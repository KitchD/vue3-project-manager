import { fileURLToPath, URL } from "node:url";
import { defineConfig, mergeConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Inspect from "vite-plugin-inspect";
import pxtovw from "postcss-px-to-viewport";

const loder_pxtovw = pxtovw({
  //这里是设计稿宽度 自己修改
  viewportWidth: 1440,
  viewportUnit: "vw",
});

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target:
          "https://www.fastmock.site/mock/fa267b05211d4e6c1206ab847e3b72fe/project",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver(), IconsResolver({})],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ["ep"],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
    },
  },
  css: {
    postcss: {
      // plugins: [loder_pxtovw],
    },
  },
});
