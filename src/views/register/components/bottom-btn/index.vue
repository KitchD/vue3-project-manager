<template>
  <div class="bottom-box flex align-center justify-between">
    <el-link
      type="primary"
      :underline="false"
      v-visibility="RegisterObject.CurrStep === 1"
      @click="pre"
    >
      ← &nbsp;上一步
    </el-link>
    <div class="next-btn" @click="next">下一步</div>
  </div>
</template>

<script setup>
const RegisterObject = inject("RegisterObject");
const router = useRouter();

function next() {
  if (RegisterObject.CurrStep < 4) {
    RegisterObject.CurrStep += 1;
  } else {
    router.replace({ path: "/register/success" });
  }
}

function pre() {
  if (RegisterObject.CurrStep > 1) RegisterObject.CurrStep -= 1;
}
</script>

<style lang="scss" scoped>
.bottom-box {
  position: absolute;
  padding-left: 60px;
  padding-right: 40px;
  bottom: 0;
  width: 100%;
  height: 84px;
}

.next-btn {
  width: 170px;
  height: 48px;
  color: #fff;
  line-height: 48px;
  text-align: center;
  border-radius: 14px;
  background: rgba(63, 140, 255, 1);
  box-shadow: 0px 6px 12px rgba(63, 140, 255, 0.26);
}
</style>
