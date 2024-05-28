<template>
  <div class="main-box flex1">
    <Header></Header>
    <div class="view-box"></div>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
</script>

<style lang="scss" scoped>
.main-box {
  height: 100%;

  background-color: aqua;

  .view-box {
    margin-top: 47px;
    height: calc(100% - 95px);
    background-color: antiquewhite;
  }
}
</style>
