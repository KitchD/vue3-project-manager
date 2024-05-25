<template>
  <div class="root-page flex align-center justify-center">
    <img class="img" src="~@assets/image/login/left.png" />
    <span>恭喜您, 注册成功</span>
    <div class="action-btn" @click="enter">现在开始吧</div>
  </div>
</template>

<script setup>
const router = useRouter();
function enter() {
  router.replace({ path: "/" });
}
</script>

<style lang="scss" scoped>
.root-page {
  flex-direction: column;
}
.img {
  width: 500px;
  margin-bottom: 50px;
}

.action-btn {
  margin-top: 26px;
  width: 170px;
  height: 48px;
  cursor: pointer;
  line-height: 48px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  border-radius: 14px;
  background: rgba(63, 140, 255, 1);
  box-shadow: 0px 6px 12px rgba(63, 140, 255, 0.26);
}
</style>
