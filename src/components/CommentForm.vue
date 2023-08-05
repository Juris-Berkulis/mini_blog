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
<form class="form" @submit.prevent="submit" action="">
    <label class="label" for="authorName">Автор</label>
    <input class="input" v-model="authorName" type="text" id="authorName" placeholder="Имя">
    <label class="label" for="authorEmail">Почта</label>
    <input class="input" v-model="authorEmail" type="text" id="authorEmail" placeholder="Email">
    <label class="label" for="text">Комментарий</label>
    <textarea class="textarea" v-model="text" id="text" placeholder="Комментарий"></textarea>
    <button class="btn" type="submit">Добавить комментарий</button>
</form>
</template>

<style scoped lang="scss">
.form {
    width: 100%;
    margin-bottom: 30px;
}

.label {
    display: block;
    margin-bottom: 5px;
    font-size: 1em;
    line-height: 1;
    color: #333333;
}

.input,
.textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 5px;
    border: 2px solid #333333;
    border-radius: 5px;
    background-color: #dddddd;
    transition: all 0.4s linear 0s;

    &:focus {
        background-color: #cccccc;
    }
}

.textarea {
    height: 100px;
    width: 100%;
}

.btn {
    margin: 0 auto;
    font-size: 1em;
    font-weight: 400;
    line-height: 1;
}
</style>
