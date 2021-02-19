import { createRouter, createWebHistory } from 'vue-router';
import { HomeRoutes } from './modules';
const router = createRouter({
  history: createWebHistory(),
  routes: [...HomeRoutes],
});

export default router;
