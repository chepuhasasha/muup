import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "page",
    component: () => import("../views/page/View.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/admin/View.vue"),
  },
  {
    path: "/ui",
    name: "ui",
    component: () => import("../views/ui/View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
