<template>
  <div class="content-head-box flex align-center justify-between">
    <span class="title">{{ text }}</span>
    <div class="show-all flex align-center">
      <span>查看全部</span>

      <el-icon>
        <i-ep-ArrowRightBold />
      </el-icon>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "title",
  },
  ShowAll: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.title {
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0px;
  color: rgba(10, 22, 41, 1);
}

.show-all {
  /** 文本1 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  color: rgba(63, 140, 255, 1);
  span {
    margin-right: 10px;
  }
}
</style>
