import { createRouter, createWebHistory } from "vue-router";
import Layout from "@views/layout/index.vue";
import PublicRouter from "./modules/public-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...PublicRouter,
    {
      path: "/",
      name: "Layout",
      component: Layout,
    },
  ],
});

export default router;
