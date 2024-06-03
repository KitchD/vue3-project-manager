<template>
  <div class="content-page">
    <Head></Head>
    <div class="content-box flex">
      <div class="left">
        <WorkLoad></WorkLoad>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup>
import Head from "./components/head/index.vue";
import WorkLoad from "./components/workload/index.vue";
</script>

<style lang="scss" scoped>
.content-box {
  margin-top: 32px;
  align-items: flex-start;
}
.left {
  width: 67.91%;
  min-width: 781px;
}
.right {
  width: 29.47%;
  min-width: 339px;
  background-color: aqua;
  margin-left: 30px;
}
</style>
