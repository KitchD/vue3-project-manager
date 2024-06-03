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

  }
}
</style>
