<template>
  <div class="stepx-box">
    <div
      class="setpx-item flex align-center"
      v-for="item in setpsArr"
      :key="item"
    >
      <div class="dot"></div>
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["setpsArr"]);
</script>

<style lang="scss" scoped>
.stepx-box {
  margin-top: 52px;
}
.setpx-item {
  margin-bottom: 32px;
  color: #fff;
  font-size: 18px;
  .dot {
    position: relative;
    margin-right: 21px;
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid #9fc6ff;
    border-radius: 50%;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, calc(100% + 5px));
      width: 2px;
      height: 26px;
      border-radius: 1px;
      background-color: #9fc6ff;
    }
  }
}

.setpx-item {
  &:last-child {
    .dot::before {
      display: none;
    }
  }
}
</style>
