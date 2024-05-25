<template>
  <div class="info-form-box">
    <span class="title">自我介绍</span>
    <el-form :model="form" label-position="top">
      <el-form-item label="您为什么要使用该服务">
        <el-select v-model="form.WhyUse" class="form-select">
          <el-option label="工作" value="工作" />
        </el-select>
      </el-form-item>
      <el-form-item label="什么最能描述您">
        <el-select v-model="form.description" class="form-select">
          <el-option label="企业高管" value="企业高管" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
const form = reactive({
  WhyUse: "",
  description: "",
});
</script>

<style lang="scss" scoped>
.info-form-box {
  width: 403px;
  margin: 0 auto;
}
.title {
  font-size: 22px;
  font-weight: 400;
  line-height: 31.86px;
  color: rgba(10, 22, 41, 1);
}
</style>
