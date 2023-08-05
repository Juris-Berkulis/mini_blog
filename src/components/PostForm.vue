<script setup lang="ts">
import { ref, type Ref } from 'vue';

interface Props {
    title: string,
    smallDescription: string,
    longDescription: string,
    setTitle: (newValue: string) => void,
    setSmallDescription: (newValue: string) => void,
    setLongDescription: (newValue: string) => void,
    doIt: () => void,
};

const props = defineProps<Props>();

const inputtedTitle: Ref<string> = ref(props.title);
const inputtedSmallDescription: Ref<string> = ref(props.smallDescription);
const inputtedLongDescription: Ref<string> = ref(props.longDescription);

const resetForm = (): void => {
    inputtedTitle.value = '';
    inputtedSmallDescription.value = '';
    inputtedLongDescription.value = '';
};

const submit = (): void => {
    props.doIt();
    resetForm();
};
</script>

<template>
<form class="form" @submit.prevent="submit" action="">
    <label class="label" for="inputtedTitle">Заголовок</label>
    <input class="input" v-model="inputtedTitle" @change.lazy="() => setTitle(inputtedTitle)" type="text" id="inputtedTitle" placeholder="Заголовок">
    <label class="label" for="inputtedSmallDescription">Краткое описание</label>
    <textarea class="textarea" v-model="inputtedSmallDescription" @change.lazy="() => setSmallDescription(inputtedSmallDescription)" id="inputtedSmallDescription" placeholder="Краткое описание"></textarea>
    <label class="label" for="inputtedLongDescription">Полное описание</label>
    <textarea class="textarea" v-model="inputtedLongDescription" @change.lazy="() => setLongDescription(inputtedLongDescription)" id="inputtedLongDescription" placeholder="Полное описание"></textarea>
    <button class="btn" type="submit">Сохранить</button>
</form>
</template>

<style scoped lang="scss">
.form {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
}

.label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.8em;
    line-height: 1;
    color: #333333;
}

.input,
.textarea {
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
