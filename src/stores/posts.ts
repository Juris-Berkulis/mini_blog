import { computed, reactive, type ComputedRef } from 'vue';
import { defineStore } from 'pinia';
import { type PostItem, type PropsObject } from '@/types';

export const usePostsStore = defineStore('posts', () => {
    const postObject: PropsObject = reactive({});

    const postsList: ComputedRef<PostItem[]> = computed(() => {
        return Object.values(postObject)
    });

    const addNewPost = (post: PostItem): void => {
        postObject[post.id] = post;
    };

    const editPost = (editedPost: PostItem): void => {
        postObject[editedPost.id] = editedPost;
    };

    return {
        postObject,
        postsList, 
        addNewPost,
        editPost,
    }
});
