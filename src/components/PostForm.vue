<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

interface Props {
    postId?: string,
    title: string,
    smallDescription: string,
    longDescription: string,
    setTitle: (newValue: string) => void,
    setSmallDescription: (newValue: string) => void,
    setLongDescription: (newValue: string) => void,
    doIt: () => void,
};

const props = defineProps<Props>();

const overallValues = {
    maxSizeForTitle: 50,
    maxSizeForSmallDescription: 100,
    maxSizeForLongDescription: 255,
};

const inputtedTitle: Ref<string> = ref(props.title);
const inputtedSmallDescription: Ref<string> = ref(props.smallDescription);
const inputtedLongDescription: Ref<string> = ref(props.longDescription);

const errorInInputtedTitle: Ref<string> = ref('');
const errorInInputtedSmallDescription: Ref<string> = ref('');
const errorInInputtedLongDescription: Ref<string> = ref('');

const errorInForm = computed(() => {
    return errorInInputtedTitle.value || errorInInputtedSmallDescription.value || errorInInputtedLongDescription.value 
    || !inputtedTitle.value || !inputtedSmallDescription.value
});

const resetForm = (): void => {
    inputtedTitle.value = '';
    inputtedSmallDescription.value = '';
    inputtedLongDescription.value = '';
};

const submit = (): void => {
    if (!errorInForm.value) {
        props.doIt();
        resetForm();
    }
};

type InputName = 'title' | 'smallDescription' | 'longDescription';

const chackIsValidInputValue = (inputName: InputName): void => {
    switch (inputName) {
        case 'title': if (!inputtedTitle.value.length) {
            errorInInputtedTitle.value = 'Обязательное поле';
        } else if (inputtedTitle.value.length > overallValues.maxSizeForTitle) {
            errorInInputtedTitle.value = `Максимум ${overallValues.maxSizeForTitle} символов`;
        } else {
            errorInInputtedTitle.value = '';
        } break;
        case 'smallDescription': if (!inputtedSmallDescription.value.length) {
            errorInInputtedSmallDescription.value = 'Обязательное поле';
        } else if (inputtedSmallDescription.value.length > overallValues.maxSizeForSmallDescription) {
            errorInInputtedSmallDescription.value = `Максимум ${overallValues.maxSizeForSmallDescription} символов`;
        } else {
            errorInInputtedSmallDescription.value = '';
        } break;
        case 'longDescription': if (inputtedLongDescription.value.length > overallValues.maxSizeForLongDescription) {
            errorInInputtedLongDescription.value = `Максимум ${overallValues.maxSizeForLongDescription} символов`;
        } else {
            errorInInputtedLongDescription.value = '';
        } break;
    }
};

const changeInputValue = (inputName: InputName): void => {
    chackIsValidInputValue(inputName);

    switch (inputName) {
        case 'title': props.setTitle(inputtedTitle.value); break;
        case 'smallDescription': props.setSmallDescription(inputtedSmallDescription.value); break;
        case 'longDescription': props.setLongDescription(inputtedLongDescription.value); break;
    }
};
</script>

<template>
<form class="form" @submit.prevent="submit" action="">
    <label class="label" :for="`${postId}inputtedTitle`">Заголовок</label>
    <input 
        class="input" 
        v-model.trim="inputtedTitle" 
        @input="() => changeInputValue('title')" 
        type="text" 
        :id="`${postId}inputtedTitle`" 
        placeholder="Заголовок"
    >
    <p class="error">{{ errorInInputtedTitle }}</p>
    <label class="label" :for="`${postId}inputtedSmallDescription`">Краткое описание</label>
    <textarea 
        class="textarea" 
        v-model.trim="inputtedSmallDescription" 
        @input="() => changeInputValue('smallDescription')" 
        :id="`${postId}inputtedSmallDescription`" 
        placeholder="Краткое описание"
    ></textarea>
    <p class="error">{{errorInInputtedSmallDescription}}</p>
    <label class="label" :for="`${postId}inputtedLongDescription`">Полное описание</label>
    <textarea 
        class="textarea" 
        v-model.trim="inputtedLongDescription" 
        @input="() => changeInputValue('longDescription')" 
        :id="`${postId}inputtedLongDescription`" 
        placeholder="Полное описание"
    ></textarea>
    <p class="error">{{errorInInputtedLongDescription}}</p>
    <button class="btn" type="submit" :disabled="!!errorInForm">Сохранить</button>
</form>
</template>

<style scoped lang="scss">
.form {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.label {
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 0.8em;
    line-height: 1;
    color: #333333;

    &:first-child {
        margin-top: 0;
    }
}

.input,
.textarea {
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
