import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { type PostItem } from '@/types';

export const usePostsStore = defineStore('posts', () => {
    const postsList: Ref<PostItem[]> = ref([]);

    const addNewPost = (post: PostItem): void => {
        postsList.value.push(post);
    };

    return {
        postsList, 
        addNewPost,
    }
});
