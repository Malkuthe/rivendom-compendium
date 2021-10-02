import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/creature/:creature_id',
    name: 'Creature',
    component: () => import(/* webpackChunkname: "creature" */ '../views/Creature.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
