<template>
  <el-button>Default</el-button>
  <el-button type="primary" @click="testnum += 1">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>

  {{ testnum }}
</template>

<script lang="ts" setup>
const testnum = ref(0);
</script>

<style lang="scss" scoped></style>
