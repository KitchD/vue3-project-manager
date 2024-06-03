import Layout from "@views/layout/index.vue";
const router = [
  {
    path: "",
    name: "Layout",
    redirect:"/dashboard"
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Layout,
    children: [
      {
        path: "",
        name: "dashboard-home",
        component: () => import("@views/dashboard/index.vue"),
      },
    ],
  },
];

export default router;
