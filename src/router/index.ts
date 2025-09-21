import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
  }
}

import { createRouter, createWebHistory } from "vue-router";
import Intrsc from "../Intrsc.vue";
import Portfolio from "../Portfolio.vue";

const routes = [
  {
    path: "/",
    name: "Intrsc",
    component: Intrsc,
    meta: { title: "Introduction to Simplified Clock" },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: { title: "Portfolio" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ルート変更時にタイトルを変更
router.afterEach((to) => {
  document.title = to.meta.title || "Not Found";
});

export default router;
