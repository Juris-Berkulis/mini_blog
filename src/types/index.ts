export interface PostItem {
    id: string,
    title: string,
    smallDescription: string,
    longDescription: string,
    date: string,
};

export interface PropsObject {
    [key: string]: PostItem,
};

export interface Comment {
    id: string,
    authorName: string,
    authorEmail: string,
    text: string,
};

export interface CommentsObject {
    [key: string]: Array<Comment>,
};
