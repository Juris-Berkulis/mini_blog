import type { Comment, CommentsObject } from "@/types";
import { defineStore } from "pinia";
import { reactive, watch } from 'vue';

export const useCommentsStore = defineStore('comments', () => {
    const commentsObject: CommentsObject = reactive(JSON.parse(localStorage.getItem('commentsObject') || '{}'));

    const saveCommentsObjectIntoLocalStorage = (): void => {
        localStorage.setItem('commentsObject', JSON.stringify(commentsObject));
    };

    const getCommentsForOpenedPost = (openedPostId: string): Array<Comment> => {
        return commentsObject[openedPostId]
    };

    const getCommentsCountForPost = (postId: string): number => {
        return commentsObject[postId].length
    };

    const addEmptyCommentIntoNewPost = (postId: string): void => {
        commentsObject[postId] = [];
    };

    const addCommentIntoPost = (postId: string, comment: Comment): void => {
        commentsObject[postId].push(comment);
    };

    const deleteComments = (postId: string): void => {
        delete commentsObject[postId];
    };

    watch(commentsObject, () => {
        saveCommentsObjectIntoLocalStorage();
    });

    return {
        commentsObject,
        getCommentsForOpenedPost,
        getCommentsCountForPost,
        addEmptyCommentIntoNewPost,
        addCommentIntoPost,
        deleteComments,
    }
});
