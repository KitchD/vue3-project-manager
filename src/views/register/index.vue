<template>
  <div class="root-page flex">
    <Menu></Menu>
    <div class="content">
      <span class="steps-title">步骤1/4</span>

      <BottomBtn></BottomBtn>
    </div>
  </div>
</template>

<script setup>
import Menu from "./components/menu.vue/index.vue";
import BottomBtn from "./components/bottom-btn/index.vue";
</script>

<style lang="scss" scoped>
.root-page {
  padding: 20px;
}

.content {
  flex: 1;
  position: relative;
  padding-top: 109px;
  margin-left: 20px;
  height: 100%;
  background-color: red;
  text-align: center;
  .steps-title {
    /** 文本1 */
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20.27px;
    color: rgba(63, 140, 255, 1);
  }
}
</style>
