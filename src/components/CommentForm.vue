<script setup lang="ts">
import { useCommentsStore } from '@/stores/comments';
import type { Comment } from '@/types';
import { computed, ref, type Ref } from 'vue';

interface Props {
    postId: string,
};

const props = defineProps<Props>();

const overallValues = {
    maxSizeForAuthorName: 50,
    maxSizeForAuthorEmail: 50,
    maxSizeForText: 255,
    regExpForAuthorEmail: /^[a-z0-9]+@[a-z]+\.[a-z]{1,3}$/i,
};

const {
    addCommentIntoPost,
} = useCommentsStore();

const authorName: Ref<string> = ref('');
const authorEmail: Ref<string> = ref('');
const text: Ref<string> = ref('');

const errorInInputtedAuthorName: Ref<string> = ref('');
const errorInInputtedAuthorEmail: Ref<string> = ref('');
const errorInInputtedText: Ref<string> = ref('');

const errorInForm = computed(() => {
    return errorInInputtedAuthorName.value || errorInInputtedAuthorEmail.value || errorInInputtedText.value 
    || !authorName.value || !text.value
});

const resetForm = (): void => {
    authorName.value = '';
    authorEmail.value = '';
    text.value = '';
};

const submit = (): void => {
    if (!errorInForm.value) {
        const comment: Comment = {
            id: `c-${Date.now()}`,
            authorName: authorName.value,
            authorEmail: authorEmail.value.toLowerCase(),
            text: text.value,
        };

        addCommentIntoPost(props.postId, comment);
        resetForm();
    }
};

type InputName = 'authorName' | 'authorEmail' | 'text';

const chackIsValidInputValue = (inputName: InputName): void => {
    switch (inputName) {
        case 'authorName': if (!authorName.value.length) {
            errorInInputtedAuthorName.value = 'Обязательное поле';
        } else if (authorName.value.length > overallValues.maxSizeForAuthorName) {
            errorInInputtedAuthorName.value = `Максимум ${overallValues.maxSizeForAuthorName} символов`;
        } else {
            errorInInputtedAuthorName.value = '';
        } break;
        case 'authorEmail': if (!overallValues.regExpForAuthorEmail.test(authorEmail.value) && authorEmail.value !== '') {
            errorInInputtedAuthorEmail.value = 'Неверный формат почты';
        } else if (authorEmail.value.length > overallValues.maxSizeForAuthorEmail) {
            errorInInputtedAuthorEmail.value = `Максимум ${overallValues.maxSizeForAuthorEmail} символов`;
        } else {
            errorInInputtedAuthorEmail.value = '';
        } break;
        case 'text': if (!text.value.length) {
            errorInInputtedText.value = 'Обязательное поле';
        } else if (text.value.length > overallValues.maxSizeForText) {
            errorInInputtedText.value = `Максимум ${overallValues.maxSizeForText} символов`;
        } else {
            errorInInputtedText.value = '';
        } break;
    }
};
</script>

<template>
<form class="form" @submit.prevent="submit" action="">
    <label class="label" for="authorName">Автор</label>
    <input class="input" v-model="authorName" @input="() => chackIsValidInputValue('authorName')" type="text" id="authorName" placeholder="Имя">
    <p class="error">{{ errorInInputtedAuthorName }}</p>
    <label class="label" for="authorEmail">Почта</label>
    <input class="input" v-model="authorEmail" @input="() => chackIsValidInputValue('authorEmail')" type="text" id="authorEmail" placeholder="Email">
    <p class="error">{{ errorInInputtedAuthorEmail }}</p>
    <label class="label" for="text">Комментарий</label>
    <textarea class="textarea" v-model="text" @input="() => chackIsValidInputValue('text')" id="text" placeholder="Комментарий"></textarea>
    <p class="error">{{ errorInInputtedText }}</p>
    <button class="btn" type="submit" :disabled="!!errorInForm">Добавить комментарий</button>
</form>
</template>

<style scoped lang="scss">
.form {
    width: 100%;
}

.label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 1em;
    line-height: 1;
    color: #333333;

    &:first-child {
        margin-top: 0;
    }
}

.input,
.textarea {
    width: 100%;
    margin-bottom: 5px;
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
    display: block;
    margin: 0 auto;
    font-size: 1em;
    font-weight: 400;
    line-height: 1;

    &:disabled {
        background-color: #dddddd;
        cursor: not-allowed;
    }
}

.error {
    font-size: 0.6em;
    font-weight: 400;
    line-height: 1;
    color: #cc0000;
}
</style>
