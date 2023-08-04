import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import { type PostItem } from '@/types';

export const usePostsStore = defineStore('posts', () => {
    const postsList: Ref<PostItem[]> = ref([]);

    const addNewPost = (post: PostItem): void => {
        postsList.value.push(post);
    };

    const editPost = (editedPost: PostItem): void => {
        const editedPostIndex = postsList.value.findIndex((post) => post.id === editedPost.id);

        postsList.value.splice(editedPostIndex, 1, editedPost);
    };

    return {
        postsList, 
        addNewPost,
        editPost,
    }
});
