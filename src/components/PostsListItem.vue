<script setup lang="ts">
import type { PostItem } from '@/types';
import { converteDate, getDate } from '@/helpers/index';
import { usePostsStore } from '@/stores/posts';
import { useCommentsStore } from '@/stores/comments';
import { ref, type Ref } from 'vue';
import PostForm from './PostForm.vue';
import router from '@/router';

interface Props {
    post: PostItem,
};

const props = defineProps<Props>();

const {
    editPost,
    deletePost,
} = usePostsStore();

const {
    getCommentsCountForPost,
} = useCommentsStore();

const isEdit: Ref<boolean> = ref(false);

const title: Ref<string> = ref(props.post.title);
const smallDescription: Ref<string> = ref(props.post.smallDescription);
const longDescription: Ref<string> = ref(props.post.longDescription);

const setTitle = (value: string): void => {
    title.value = value;
};

const setSmallDescription = (value: string): void => {
    smallDescription.value = value;
};

const setLongDescription = (value: string): void => {
    longDescription.value = value;
};

const backToDefaultFormValues = (): void => {
    setTitle(props.post.title);
    setSmallDescription(props.post.smallDescription);
    setLongDescription(props.post.longDescription);
};

const toggleIsEdit = (): void => {
    isEdit.value = !isEdit.value;
    backToDefaultFormValues();
};

const changePost = () => {
    const currentDate: number = Date.now();

    const changedPost: PostItem = {
        id: props.post.id,
        title: title.value,
        smallDescription: smallDescription.value,
        longDescription: longDescription.value,
        date: getDate(currentDate),
    };

    editPost(changedPost);
    toggleIsEdit();
};
</script>

<template>
<div class="postItem" @click="router.push(`/post/${post.id}`)">
    <div class="btnsPanel">
        <button class="btn" @click.stop="toggleIsEdit">{{ isEdit ? 'Отмена' : 'Редактировать' }}</button>
        <button class="btn delete" @click.stop="() => deletePost(post.id)">Удалить</button>
    </div>
    <div v-if="isEdit" class="formWrapper" @click.stop="">
        <PostForm 
            :postId="post.id"
            :title="title"
            :setTitle="setTitle"
            :smallDescription="smallDescription"
            :setSmallDescription="setSmallDescription"
            :longDescription="longDescription"
            :setLongDescription="setLongDescription"
            :doIt="changePost"
        />
    </div>
    <div class="postMain" v-else>
        <h2 class="postTitle">{{ post.title }}</h2>
        <p class="postDescription">{{ post.smallDescription }}</p>
        <div class="postAdditionaly">
            <p class="postCommentsInfo">
                <span>Комментарии:</span>
                <span>{{ getCommentsCountForPost(post.id) }}</span>
            </p>
            <p class="postDate">{{ converteDate(post.date) }}</p>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.postItem {
    width: 80%;
    margin: 0 auto 30px;
    padding: 8px 15px 15px;
    border-radius: 15px;
    font-size: 1em;
    cursor: pointer;
    background-color: #f8e8d5;
    box-shadow: 0 0 3px 3px #000000;
    transition: all 0.4s linear 0s;

    &:hover {
        background-color: #ffe6c7;
        box-shadow: 0 0 10px 7px #000000;
    }
}

.btnsPanel {
    margin-bottom: 8px;
    padding-bottom: 8px;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #000000;
}

.link {
    display: inline-block;
}

.btn {
    margin-right: 5px;
    padding: 0.5em 1em;
    font-size: 0.6em;
    font-weight: 400;
    line-height: 1;

    &:last-child {
        margin-right: 0;
    }

    &.delete {
        background-color: #e40000;
    }

    &.delete:hover {
        background-color: #8b0000;
    }
}

.formWrapper {
    width: 80%;
    margin: 0 auto;
}

.postMain {
    width: 100%;
}

.postTitle {
    margin-bottom: 15px;
    font-size: 1.2em;
    font-weight: 700;
    line-height: 1.15;
    text-align: center;
}

.postDescription {
    margin-bottom: 15px;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.15;
}

.postAdditionaly {
    display: flex;
    justify-content: space-between;
}

.postCommentsInfo {
    font-size: 0.8em;
    font-weight: 400;
    line-height: 1;

    & span:first-child {
        margin-right: 5px;
    }
}

.postDate {
    font-size: 0.8em;
    font-weight: 400;
    line-height: 1;
    color: #555555;
}
</style>
