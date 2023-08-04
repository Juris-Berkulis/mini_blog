<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { type PostItem } from '@/types';
import { usePostsStore } from '@/stores/posts';

const {
    addNewPost,
} = usePostsStore();

const title: Ref<string> = ref('');
const smallDescription: Ref<string> = ref('');
const longDescription: Ref<string> = ref('');

const resetForm = (): void => {
    title.value = '';
    smallDescription.value = '';
    longDescription.value = '';
};

const addZeroToBeginingOfNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
};

const getDate = (dateInMilliseconds: number): string => {
    const date: Date = new Date(dateInMilliseconds);
    const utcYear: number = date.getUTCFullYear();
    const utcMonth: number = date.getUTCMonth() + 1;
    const utcDayNumber: number = date.getUTCDate();

    return `${utcYear}-${addZeroToBeginingOfNumber(utcMonth)}-${addZeroToBeginingOfNumber(utcDayNumber)}`
};

const submit = (): void => {
    const currentDate: number = Date.now();

    const newPost: PostItem = {
        id: currentDate,
        title: title.value,
        smallDescription: smallDescription.value,
        longDescription: longDescription.value,
        date: getDate(currentDate),
        commentsList: [],
    };

    addNewPost(newPost);
    resetForm();
};
</script>

<template>
<form @submit.prevent="submit" action="">
    <label for="">Заголовок</label>
    <input v-model="title" type="text" name="" id="">
    <label for="">Краткое описание</label>
    <textarea v-model="smallDescription" name="" id="" cols="30" rows="10"></textarea>
    <label for="">Полное описание</label>
    <textarea v-model="longDescription" name="" id="" cols="30" rows="10"></textarea>
    <button type="submit">Опубликовать</button>
</form>
</template>

<style scoped lang="scss">
</style>
