import Layout from "@views/layout/index.vue";
const router = [
  {
    path: "",
    redirect: "/layout",
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
  },
];

export default router;
