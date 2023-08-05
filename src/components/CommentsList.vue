<script setup lang="ts">
import { useCommentsStore } from '@/stores/comments';
import CommentsListItem from '@/components/CommentsListItem.vue';

interface Props {
    postId: string,
};

const props = defineProps<Props>();

const {
    getCommentsForOpenedPost,
} = useCommentsStore();

const commentsList = getCommentsForOpenedPost(props.postId);
</script>

<template>
<div class="commentsList">
    <CommentsListItem v-for="comment of commentsList" :key="comment.id" :comment="comment" />
</div>
</template>

<style scoped lang="scss">
.commentsList {
    width: 100%;
    margin-bottom: 30px;
    font-size: 1em;
    font-weight: 400;
    line-height: 1;
}
</style>
