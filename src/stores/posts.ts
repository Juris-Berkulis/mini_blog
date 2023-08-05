import { computed, reactive, type ComputedRef, watch } from 'vue';
import { defineStore } from 'pinia';
import { useCommentsStore } from './comments';
import { type PostItem, type PropsObject } from '@/types';

export const usePostsStore = defineStore('posts', () => {
    const {
        addEmptyCommentIntoNewPost,
        deleteComments,
    } = useCommentsStore();

    const postObject: PropsObject = reactive(JSON.parse(localStorage.getItem('postObject') || '{}'));

    const postsList: ComputedRef<PostItem[]> = computed(() => {
        return Object.values(postObject)
    });

    const savePostObjectIntoLocalStorage = (): void => {
        localStorage.setItem('postObject', JSON.stringify(postObject));
    };

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

    watch(postObject, () => {
        savePostObjectIntoLocalStorage();
    });

    return {
        postObject,
        postsList, 
        addNewPost,
        editPost,
        deletePost,
    }
});
