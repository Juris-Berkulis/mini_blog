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
      path: '/post/:id',
      name: 'openedPost',
      component: () => import('../views/PostOpenedView.vue'),
      props: true,
    },
  ]
});

export default router;
