<template>
  <div class="phone-form-box">
    <span class="title">验证您的手机</span>
    <el-form :model="form" label-position="top">
      <el-form-item label="手机号码">
        <div class="flex phone-box">
          <el-select
            v-model="form.AreaCode"
            class="area-code-select form-select"
            placeholder=""
          >
            <el-option label="+86" value="86" />
            <el-option label="+1" value="1" />
            <el-option label="+47" value="47" />
          </el-select>
          <el-input v-model="form.name" class="form-input flex1">
            <template #suffix>
              <el-link type="primary">获取验证码</el-link>
            </template>
          </el-input>
        </div>
      </el-form-item>
      <captcha v-model="form.captcha" :number="4"></captcha>

      <el-form-item label="手机号码">
        <el-input v-model="form.email" class="form-input" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.email" class="form-input" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import captcha from "./components/captcha.vue";
const form = reactive({
  AreaCode: "+86",
  captcha: "",
});
</script>

<style lang="scss" scoped>
.phone-form-box {
  width: 403px;
  margin: 0 auto;
}
.title {
  font-size: 22px;
  font-weight: 400;
  line-height: 31.86px;
  color: rgba(10, 22, 41, 1);
}

.phone-box {
  width: 100%;

  .area-code-select {
    width: 74px;
    margin-right: 16px;
  
  }
}
</style>
