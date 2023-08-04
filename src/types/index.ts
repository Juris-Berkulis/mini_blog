interface CommentsList {
    id: number,
    authorName: string,
    authorEmail: string,
    text: string,
};

export interface PostItem {
    id: number,
    title: string,
    smallDescription: string,
    longDescription: string,
    date: string,
    commentsList: Array<CommentsList>,
};
