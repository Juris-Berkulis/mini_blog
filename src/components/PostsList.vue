<script setup lang="ts">
import { usePostsStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import PostsListItem from './PostsListItem.vue';

const {
    postsList,
} = storeToRefs(usePostsStore());
</script>

<template>
<div class="postsList">
    <PostsListItem v-for="post of postsList" :key="post.id" :post="post" />
</div>
</template>

<style scoped lang="scss">
</style>
