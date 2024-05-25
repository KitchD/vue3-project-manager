<template>
  <div class="team-form-box">
    <span class="title">邀请团队成员</span>
    <el-form :model="form" label-position="top">
      <el-form-item label="贵公司名称">
        <el-input
          v-for="(item, index) in form.EmailArray"
          :key="index"
          v-model="item.email"
          class="form-input"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-link type="primary" :underline="false" class="add" @click="add">
      添加另一个团队成员
    </el-link>
  </div>
</template>

<script setup>
const form = reactive({
  EmailArray: [{ email: "" }],
});

function add() {
  form.EmailArray.push({ email: "" });
}
</script>

<style lang="scss" scoped>
.team-form-box {
  width: 403px;
  margin: 0 auto;
}
.title {
  font-size: 22px;
  font-weight: 400;
  line-height: 31.86px;
  color: rgba(10, 22, 41, 1);
}
.add {
  display: block;
  text-align: left;
}
.form-input {
  &:not(:first-child) {
    margin-top: 15px;
  }
}
</style>
