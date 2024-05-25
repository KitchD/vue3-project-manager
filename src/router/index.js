import { createRouter, createWebHistory } from "vue-router";

import PublicRouter from "./modules/public-router";

import AuthRouter from "./modules/auth-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...PublicRouter, ...AuthRouter],
});

export default router;
