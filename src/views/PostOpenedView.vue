<script setup lang="ts">
import { usePostsStore } from '@/stores/posts';
import { type PostItem } from '@/types';
import OpenedPost from '@/components/OpenedPost.vue';
import CommentForm from '@/components/CommentForm.vue';
import CommentsList from '@/components/CommentsList.vue';

interface Props {
    id: string,
};

const props = defineProps<Props>();

const {
    postObject,
} = usePostsStore();

const openedPost: PostItem | undefined = postObject[props.id];
</script>

<template>
<div v-if="openedPost">
    <OpenedPost :openedPost="openedPost" />
    <CommentForm :postId="openedPost.id" />
    <CommentsList :postId="openedPost.id" />
</div>
<div v-else>
    <h1>404</h1>
    <p>Пост не найден</p>
    <RouterLink to="/">Вернуться на главную</RouterLink>
</div>
</template>

<style scoped lang="scss">
</style>
