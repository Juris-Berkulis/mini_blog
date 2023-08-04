<script setup lang="ts">
import type { PostItem } from '@/types';

interface Props {
    openedPost: PostItem,
};

defineProps<Props>();
</script>

<template>
<div>
    <h1>{{ openedPost.title }}</h1>
    <p>{{ openedPost.date }}</p>
    <div>{{ openedPost.smallDescription }}</div>
    <div>{{ openedPost.longDescription }}</div>
</div>
</template>

<style scoped lang="scss">
</style>
