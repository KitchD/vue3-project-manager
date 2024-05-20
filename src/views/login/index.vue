<template>
  <div class="root-page flex">
    <div class="left">
      <el-scrollbar class="hide-scrollbar">
        <div class="text">这里是文字示例，最多显示两行折行</div>
        <img src="~@assets/image/login/left.png" />
      </el-scrollbar>
    </div>
    <div class="right">
      <div class="login-box">
        <el-form :model="form" label-position="top">
          <span class="title">欢迎登陆</span>

          <el-form-item label="email">
            <el-input size="large" v-model="form.email" />
          </el-form-item>

          <el-form-item label="密码">
            <el-input
              :type="ShowPassword ? 'text' : 'password'"
              size="large"
              v-model="form.password"
            >
              <template #suffix>
                <el-icon
                  :size="20"
                  v-if="ShowPassword"
                  @click="ShowPassword = !ShowPassword"
                >
                  <i-ep-view />
                </el-icon>
                <el-icon
                  :size="20"
                  v-else
                  @click="ShowPassword = !ShowPassword"
                >
                  <i-ep-hide />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>

          <div class="remember-box flex align-center justify-between">
            <el-checkbox v-model="form.remember" label="记住我" size="large" />
            <text class="forget-text">忘记密码?</text>
          </div>

          <div class="submit">立即登录</div>
          <br />

          <el-link type="primary" class="register-text" href="register">
            还没有账号? 去注册
          </el-link>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
const ShowPassword = ref(false);
const form = reactive({
  email: "",
  password: "",
  remember: false,
});
</script>

<style lang="scss" scoped>
.left,
.right {
  flex: 1;
  height: 100%;
}

.left {
  padding: 0 96px;
  background-color: #3f8cff;

  .text {
    color: #fff;
    margin-top: 171px;
    font-size: 40px;
    line-height: 56px;
  }

  img {
    margin-top: 148px;
    width: 100%;
  }
}

.login-box {
  width: 403px;
  margin: 0 auto;
  padding-top: 113px;
  text-align: center;
  //background-color: red;

  .title {
    font-size: 22px;
    font-weight: 400;
    line-height: 31.86px;
    color: rgba(10, 22, 41, 1);
    text-align: center;
    vertical-align: top;
  }

  .forget-text {
    cursor: pointer;
    font-size: 16px;
    color: #7d8592;
  }

  .submit {
    display: inline-block;
    width: 170px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    margin-top: 49px;
    border-radius: 14px;
    background: #3f8cff;
    box-shadow: 0px 6px 12px #3f8cff;
  }

  .register-text {
    display: inline-block;
    color: #3f8cff;
    margin-top: 18px;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>
