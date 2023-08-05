<script setup lang="ts">
import PostForm from '@/components/PostForm.vue';
import PostsList from '@/components/PostsList.vue';
import { ref, type Ref } from 'vue';
import { type PostItem } from '@/types';
import { usePostsStore } from '@/stores/posts';
import { getDate } from '@/helpers/index';

const {
  addNewPost,
} = usePostsStore();

const title: Ref<string> = ref('');
const smallDescription: Ref<string> = ref('');
const longDescription: Ref<string> = ref('');

const setTitle = (value: string): void => {
  title.value = value;
};

const setSmallDescription = (value: string): void => {
  smallDescription.value = value;
};

const setLongDescription = (value: string): void => {
  longDescription.value = value;
};

const submit = (): void => {
  const currentDate: number = Date.now();

  const newPost: PostItem = {
      id: `p-${currentDate}`,
      title: title.value,
      smallDescription: smallDescription.value,
      longDescription: longDescription.value,
      date: getDate(currentDate),
  };

  addNewPost(newPost);
};
</script>

<template>
  <div class="formWrapper">
    <PostForm 
      :title="title"
      :setTitle="setTitle"
      :smallDescription="smallDescription"
      :setSmallDescription="setSmallDescription"
      :longDescription="longDescription"
      :setLongDescription="setLongDescription"
      :doIt="submit"
    />
  </div>
  <PostsList />
</template>

<style scoped lang="scss">
.formWrapper {
  width: 60%;
  margin: 0 auto 30px;
}
</style>
