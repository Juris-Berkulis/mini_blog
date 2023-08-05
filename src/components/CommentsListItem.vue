<script setup lang="ts">
import { type Comment } from '@/types/index';

interface Props {
    comment: Comment,
};

defineProps<Props>();
</script>

<template>
<div class="comment">
    <div class="commentAdditionaly">
        <p class="author">{{ comment.authorName }}</p>
        <p class="email">{{ comment.authorEmail }}</p>
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

.commentAdditionaly {
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
