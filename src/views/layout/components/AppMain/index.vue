<!--
 * @Author: lirunji lirunji
 * @Date: 2024-05-27 21:44:36
 * @LastEditors: lirunji lirunji
 * @LastEditTime: 2024-06-11 16:29:34
 * @FilePath: \project-manager\src\views\layout\components\AppMain\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="main-box flex1">
    <Header></Header>
    <div class="view-box">
      <el-scrollbar class="hide-scrollbar">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
</script>

<style lang="scss" scoped>
.main-box {
  margin-left: 30px;
  height: 100%;

  .view-box {
    margin-top: 47px;
    height: calc(100% - 95px);

    .hide-scrollbar {
      ::v-deep(.el-scrollbar__view) {
        height: 100%;
      }
    }
  }
}
</style>
