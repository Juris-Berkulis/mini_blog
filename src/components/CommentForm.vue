<script setup lang="ts">
import { useCommentsStore } from '@/stores/comments';
import type { Comment } from '@/types';
import { ref, type Ref } from 'vue';

interface Props {
    postId: string,
};

const props = defineProps<Props>();

const {
    addCommentIntoPost,
} = useCommentsStore();

const authorName: Ref<string> = ref('');
const authorEmail: Ref<string> = ref('');
const text: Ref<string> = ref('');

    const resetForm = (): void => {
    authorName.value = '';
    authorEmail.value = '';
    text.value = '';
};

const submit = (): void => {
    const comment: Comment = {
        id: `comment-${Date.now()}`,
        authorName: authorName.value,
        authorEmail: authorEmail.value,
        text: text.value,
    };

    addCommentIntoPost(props.postId, comment);
    resetForm();
};
</script>

<template>
<form @submit.prevent="submit" action="">
    <label for=""></label>
    <input v-model="authorName" type="text" name="" id="">
    <label for=""></label>
    <input v-model="authorEmail" type="text" name="" id="">
    <label for=""></label>
    <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea>
    <button type="submit">Добавить комментарий</button>
</form>
</template>

<style scoped lang="scss">
</style>
