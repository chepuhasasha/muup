import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:name",
    name: "viewer",
    component: () => import("../views/viewer/View.vue"),
  },
  {
    path: "/admin/:name",
    name: "admin",
    component: () => import("../views/admin/View.vue"),
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("../views/login/View.vue"),
  // },
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
