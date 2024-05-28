<template>
  <div class="root-page flex">
    <SideMenu></SideMenu>
    <AppMain></AppMain>
  </div>
</template>

<script setup>
import SideMenu from "./components/side-menu/index.vue";
import AppMain from "./components/AppMain/index.vue";
</script>

<style lang="scss" scoped>
.root-page {
  background-color: #f4f9fdff;
  padding: 20px 40px 30px 20px;
}
</style>
