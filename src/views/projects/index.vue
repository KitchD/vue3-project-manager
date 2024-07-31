<template>
  <div class="content-page">
    <Head></Head>
    <div class="content-box flex">
      <ProjectList></ProjectList>
      <ProjectContent></ProjectContent>
    </div>
  </div>
</template>

<script setup>
import Head from "./components/head/index.vue";
import ProjectList from "./components/project-list/index.vue";
import ProjectContent from "./components/project-content/index.vue";
</script>

<style lang="scss" scoped>
.content-page {
  height: 100%;

  .content-box {
    margin-top: 30px;
    height: calc(100% - 74px);
  }
}
</style>
