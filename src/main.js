import { createApp } from "vue";
import { createPinia } from "pinia";

import "element-plus/dist/index.css";
import "@assets/styles/base.scss";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import ElementPlus from "element-plus";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");
