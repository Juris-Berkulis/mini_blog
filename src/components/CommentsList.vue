<script setup lang="ts">
import { useCommentsStore } from '@/stores/comments';
import CommentsListItem from '@/components/CommentsListItem.vue';

interface Props {
    postId: number,
};

const props = defineProps<Props>();

const {
    getCommentsForOpenedPost,
} = useCommentsStore();

const commentsList = getCommentsForOpenedPost(props.postId);
</script>

<template>
<CommentsListItem v-for="comment of commentsList" :key="comment.id" :comment="comment" />
</template>

<style scoped lang="scss">
</style>
