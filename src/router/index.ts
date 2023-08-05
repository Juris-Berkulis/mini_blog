import { createRouter, createWebHistory } from 'vue-router';
import PostsView from '../views/PostsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsView,
    },
    {
      path: '/post/:postId',
      name: 'openedPost',
      component: () => import('../views/PostOpenedView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: () => import('../views/PageNotFoundView.vue'),
    },
  ]
});

export default router;
