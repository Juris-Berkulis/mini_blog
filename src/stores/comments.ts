import type { Comment, CommentsObject } from "@/types";
import { defineStore } from "pinia";
import { reactive } from 'vue';

export const useCommentsStore = defineStore('comments', () => {
    const commentsObject: CommentsObject = reactive({});

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

    return {
        commentsObject,
        getCommentsForOpenedPost,
        getCommentsCountForPost,
        addEmptyCommentIntoNewPost,
        addCommentIntoPost,
    }
});
