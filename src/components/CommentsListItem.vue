<script setup lang="ts">
import { type Comment } from '@/types/index';

interface Props {
    comment: Comment,
};

defineProps<Props>();
</script>

<template>
<div>
    <p>{{ comment.authorName }}</p>
    <p>{{ comment.authorEmail }}</p>
    <p>{{ comment.text }}</p>
</div>
</template>

<style scoped lang="scss">
</style>
