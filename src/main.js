import { createApp } from "vue";
import { createPinia } from "pinia";

import "element-plus/dist/index.css";
import "@assets/styles/base.scss";
import "@assets/styles/animate.scss";

import zhCn from "element-plus/es/locale/lang/zh-cn";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";
import directive from "@/directive/index.js";

/* 自定义全局组件 */
import RootTitle from "@/components/root-title/index.vue";
/* 自定义全局组件 */

const app = createApp(App);

app.component("RootTitle", RootTitle);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

//自定义指令
directive(app);

app.mount("#app");
