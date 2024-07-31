<template>
  <div :class="['priority-box', 'priority' + level]">
    <span class="priority-text">{{ getText(level) }}</span>
    <img
      class="priority-img"
      :src="`/src/assets/image/dashboard/${GetArrow(level)}`"
    />
  </div>
</template>

<script setup>
const props = defineProps(["level"]);

//将数字转为低、中、高文字
function getText(val) {
  switch (val) {
    case "1":
      return "低";
    case "2":
      return "中";
    case "3":
      return "高";
    default:
      return "-";
  }
}

function GetArrow(level) {
  switch (level) {
    case "2":
      return "arrow-up.svg";
    case "1":
      return "arrow-down.svg";
  }
}
</script>

<style scoped lang="scss">
.priority-img,
.priority-text {
  display: inline-block;
  vertical-align: middle;
}
</style>
