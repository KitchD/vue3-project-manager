<template>
  <div class="company-form-box">
    <span class="title">公司概况</span>
    <el-form :model="form" label-position="top">
      <el-form-item label="贵公司名称">
        <el-input v-model="form.CompanyName" class="form-input"></el-input>
      </el-form-item>
      <el-form-item label="行业方向">
        <el-select v-model="form.CompanyDirection" class="form-select">
          <el-option label="信息技术和编程" value="信息技术和编程" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
const form = reactive({
  CompanyName: "",
  CompanyDirection: "",
});
</script>

<style lang="scss" scoped>
.company-form-box {
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
