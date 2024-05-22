<template>
  <el-form-item label="验证码">
    <div class="num-box flex">
      <div v-for="item in number" :key="number" class="num-item">
        {{ captchaValue[item - 1] }}
      </div>
      <input
        type="text"
        class="list-input"
        :maxlength="number"
        v-model="captchaValue"
      />
    </div>
  </el-form-item>
</template>

<script setup>
const porps = defineProps(["number"]);
const captchaValue = defineModel();
</script>

<style lang="scss" scoped>
.num-box {
  width: 100%;
}
.num-item {
  width: 58px;
  height: 50px;
  margin-right: 16px;
  line-height: 50px;
  text-align: center;
  border-radius: 14px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(216, 224, 240, 1);
  box-shadow: 0px 1px 2px rgba(184, 200, 224, 0.22);
}
.list-input {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  opacity: 0;
}
</style>
