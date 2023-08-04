<script setup lang="ts">
import type { PostItem } from '@/types';
import { converteDate } from '@/helpers/index';

interface Props {
    post: PostItem,
};

defineProps<Props>();
</script>

<template>
<div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.smallDescription }}</p>
    <div>
        <p>
            <span>Комментарии:</span>
            <span>{{ post.commentsList.length }}</span>
        </p>
        <p>{{ converteDate(post.date) }}</p>
    </div>
</div>
</template>

<style scoped lang="scss">
</style>
