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
<form @submit.prevent="submit" action="">
    <label for="">Заголовок</label>
    <input v-model="inputtedTitle" @change.lazy="() => setTitle(inputtedTitle)" type="text" name="" id="">
    <label for="">Краткое описание</label>
    <textarea v-model="inputtedSmallDescription" @change.lazy="() => setSmallDescription(inputtedSmallDescription)" name="" id="" cols="30" rows="10"></textarea>
    <label for="">Полное описание</label>
    <textarea v-model="inputtedLongDescription" @change.lazy="() => setLongDescription(inputtedLongDescription)" name="" id="" cols="30" rows="10"></textarea>
    <button type="submit">Опубликовать</button>
</form>
</template>

<style scoped lang="scss">
</style>
