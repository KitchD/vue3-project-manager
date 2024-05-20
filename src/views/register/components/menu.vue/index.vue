<template>
  <div class="menu-box">
    <el-scrollbar>
      <span class="title">开始注册</span>
      <steps :setpsArr="setpsArr"></steps>
    </el-scrollbar>
  </div>
</template>

<script setup>
import steps from "../steps/index.vue";

const setpsArr = ["验证您的手机", "自我介绍", "公司概况", "邀请团队成员"];
</script>

<style lang="scss" scoped>
.menu-box {
  height: 100%;
  width: 346px;
  padding-left: 40px;
  border-radius: 24px;
  background-color: #3f8cff;

  .title {
    margin-top: 207px;
    font-size: 36px;
    font-weight: 400;
    line-height: 52.13px;
    color: rgba(255, 255, 255, 1);
    text-align: left;
    vertical-align: top;
  }
}
</style>
