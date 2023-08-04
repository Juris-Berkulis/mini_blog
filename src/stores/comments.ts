import type { Comment, CommentsObject } from "@/types";
import { defineStore } from "pinia";
import { reactive } from 'vue';

export const useCommentsStore = defineStore('comments', () => {
    const commentsObject: CommentsObject = reactive({});

    const getCommentsForOpenedPost = (openedPostId: number): Array<Comment> => {
        return commentsObject[openedPostId]
    };

    const getCommentsCountForPost = (postId: number): number => {
        return commentsObject[postId]?.length || 0
    };

    return {
        commentsObject,
        getCommentsForOpenedPost,
        getCommentsCountForPost,
    }
});
