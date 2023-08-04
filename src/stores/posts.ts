import { computed, reactive, type ComputedRef } from 'vue';
import { defineStore } from 'pinia';
import { useCommentsStore } from './comments';
import { type PostItem, type PropsObject } from '@/types';

export const usePostsStore = defineStore('posts', () => {
    const {
        addEmptyCommentIntoNewPost,
        deleteComments,
    } = useCommentsStore();

    const postObject: PropsObject = reactive({});

    const postsList: ComputedRef<PostItem[]> = computed(() => {
        return Object.values(postObject)
    });

    const addNewPost = (post: PostItem): void => {
        postObject[post.id] = post;
        addEmptyCommentIntoNewPost(post.id);
    };

    const editPost = (editedPost: PostItem): void => {
        postObject[editedPost.id] = editedPost;
    };

    const deletePost = (deletedPostId: string): void => {
        delete postObject[deletedPostId];
        deleteComments(deletedPostId);
    };

    return {
        postObject,
        postsList, 
        addNewPost,
        editPost,
        deletePost,
    }
});
