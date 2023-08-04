<script setup lang="ts">
import { ref, type Ref } from 'vue';

const authorName: Ref<string> = ref('');
const authorEmail: Ref<string> = ref('');
const text: Ref<string> = ref('');

const submit = (): void => {

};
</script>

<template>
<form @submit="submit" action="">
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
