import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/ui",
      name: "ui",
      component: () => import("../views/UIView.vue"),
    },
    {
      path: "/editor",
      name: "editor",
      component: () => import("../views/Editor.vue"),
    },
  ],
});

export default router;
