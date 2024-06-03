<template>
  <span class="text">{{ text }}</span>
</template>

<script setup>
const props = defineProps(["text"]);
</script>

<style lang="scss" scoped>
.text {
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 0px;
  color: rgba(10, 22, 41, 1);
  text-align: left;
  vertical-align: top;
}
</style>
