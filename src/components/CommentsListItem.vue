<script setup lang="ts">
import { useCommentsStore } from '@/stores/comments';
import { type Comment } from '@/types/index';

interface Props {
    postId: string,
    comment: Comment,
};

defineProps<Props>();

const {
    deleteComment,
} = useCommentsStore();
</script>

<template>
<div class="comment">
    <div class="commentAdditionaly">
        <div class="commentInfo">
            <p class="author">{{ comment.authorName }}</p>
            <p class="email">{{ comment.authorEmail }}</p>
        </div>
        <button class="btn" @click="() => deleteComment(postId, comment.id)">Удалить</button>
    </div>
    <p class="text">{{ comment.text }}</p>
</div>
</template>

<style scoped lang="scss">
.comment {
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 15px;
    background-color: #b3ddff;

    &:last-child {
        margin-bottom: 0;
    }
}

.btn {
    display: block;
    margin-bottom: 10px;
    margin-left: auto;
    font-size: 0.6em;
    font-weight: 400;
}

.commentAdditionaly {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.commentInfo {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 15px;
}

.author {
    margin-bottom: 5px;
    font-size: 1em;
    font-weight: 700;
    line-height: 1;
}

.email {
    margin-bottom: 10px;
    font-size: 1em;
    font-weight: 400;
    line-height: 1;
    color: #555555;
}

.text {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.15;
}
</style>
