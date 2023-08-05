<script setup lang="ts">
import { converteDate } from '@/helpers';
import type { PostItem } from '@/types';

interface Props {
    openedPost: PostItem,
};

defineProps<Props>();
</script>

<template>
<div class="post">
    <h1 class="postTitle">{{ openedPost.title }}</h1>
    <p class="postDate">{{ converteDate(openedPost.date) }}</p>
    <div class="postDescription small">{{ openedPost.smallDescription }}</div>
    <div class="postDescription long">{{ openedPost.longDescription }}</div>
</div>
</template>

<style scoped lang="scss">
.post {
    width: 100%;
    margin-bottom: 30px;
}

.postTitle {
    margin-bottom: 15px;
    font-size: 1.5em;
    font-weight: 700;
    line-height: 1.15;
    text-align: center;
}

.postDate {
    margin-bottom: 15px;
    font-size: 1em;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    color: #bbbbbb;
}

.postDescription {
    font-size: 1em;
    font-weight: 400;
    line-height: 1.15;

    &.small {
        margin-bottom: 15px;
    }
}
</style>
