import Layout from "@views/layout/index.vue";
const router = [
  {
    path: "",
    name: "Layout",
    redirect: "/dashboard",
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
  {
    path: "/projects",
    name: "projects",
    component: Layout,
    children: [
      {
        path: "",
        name: "project-home",
        component: () => import("@views/projects/index.vue"),
      },
    ],
  },
];

export default router;
