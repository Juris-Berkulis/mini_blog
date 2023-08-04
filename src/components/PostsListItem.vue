<script setup lang="ts">
import type { PostItem } from '@/types';
import { converteDate, getDate } from '@/helpers/index';
import { usePostsStore } from '@/stores/posts';
import { ref, type Ref } from 'vue';
import PostForm from './PostForm.vue';

interface Props {
    post: PostItem,
};

const props = defineProps<Props>();

const {
    editPost,
} = usePostsStore();

const isEdit: Ref<boolean> = ref(false);

const toggleIsEdit = (): void => {
    isEdit.value = !isEdit.value;
};

const title: Ref<string> = ref(props.post.title);
const smallDescription: Ref<string> = ref(props.post.smallDescription);
const longDescription: Ref<string> = ref(props.post.longDescription);

const setTitle = (value: string): void => {
    title.value = value;
};

const setSmallDescription = (value: string): void => {
    smallDescription.value = value;
};

const setLongDescription = (value: string): void => {
    longDescription.value = value;
};

const changePost = () => {
    const currentDate: number = Date.now();

    const changedPost: PostItem = {
        id: props.post.id,
        title: title.value,
        smallDescription: smallDescription.value,
        longDescription: longDescription.value,
        date: getDate(currentDate),
        commentsList: props.post.commentsList,
    };

    editPost(changedPost);
    toggleIsEdit();
};
</script>

<template>
<div>
    <button @click="toggleIsEdit">{{ isEdit ? 'Показать' : 'Редактировать' }}</button>
    <PostForm 
        v-if="isEdit"
        :title="title"
        :setTitle="setTitle"
        :smallDescription="smallDescription"
        :setSmallDescription="setSmallDescription"
        :longDescription="longDescription"
        :setLongDescription="setLongDescription"
        :doIt="changePost"
    />
    <div v-else>
        <h2>{{ post.title }}</h2>
        <p>{{ post.smallDescription }}</p>
        <div>
            <p>
                <span>Комментарии:</span>
                <span>{{ post.commentsList.length }}</span>
            </p>
            <p>{{ converteDate(post.date) }}</p>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
</style>
