<template>
  <div class="root-page flex">
    <Menu></Menu>
    <div class="content">
      <el-scrollbar height="calc(100% - 84px)">
        <span class="steps-title">步骤{{ RegisterObject.CurrStep }}/4</span>

        <PhoneForm v-show="RegisterObject.CurrStep === 1"></PhoneForm>
        <InfoForm v-show="RegisterObject.CurrStep === 2"></InfoForm>
        <CompanyForm v-show="RegisterObject.CurrStep === 3"></CompanyForm>
        <TeamForm v-show="RegisterObject.CurrStep === 4"></TeamForm>
      </el-scrollbar>

      <BottomBtn></BottomBtn>
    </div>
  </div>
</template>

<script setup>
import Menu from "./components/menu.vue/index.vue";
import BottomBtn from "./components/bottom-btn/index.vue";
import PhoneForm from "./components/phone-form/index.vue";
import InfoForm from "./components/info-form/index.vue";
import CompanyForm from "./components/company-form/index.vue";
import TeamForm from "./components/team-form/index.vue";

const RegisterObject = reactive({
  CurrStep: 1, //当前步骤
});

provide("RegisterObject", RegisterObject);
</script>

<style lang="scss" scoped>
.root-page {
  padding: 20px;
}

.content {
  flex: 1;
  position: relative;
  padding-top: 109px;
  margin-left: 20px;
  height: 100%;
  text-align: center;
  .steps-title {
    /** 文本1 */
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20.27px;
    color: rgba(63, 140, 255, 1);
  }
}
</style>
