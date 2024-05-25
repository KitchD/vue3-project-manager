const router = [
  {
    path: "/login",
    name: "login",
    component: () => import("@views/login/index.vue"),
    meta: { routerAni: "fade" },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@views/register/index.vue"),
    meta: { routerAni: "slide" },
  },
  {
    path: "/register/success",
    name: "register-success",
    component: () => import("@views/register/success.vue"),
    meta: { routerAni: "slide" },
  },
];
export default router;
