<template>
  <div class="header-box flex justify-between">
    <el-input class="form-input48" placeholder="搜索" v-model="search">
      <template #prefix>
        <el-icon color="#000000" size="20"><i-ep-Search /></el-icon>
      </template>
    </el-input>

    <div class="right-box flex">
      <div class="img-box">
        <img src="@assets/image/layout/notifications.svg" />
      </div>

      <dropmenu>
        <template #default="slot">
          <div class="user-box flex align-center">
            <img src="@assets/image/avatar.jpg" />
            <span class="user-name flex1">亲爱的管理员</span>

            <el-icon v-if="!slot.ShowMenu">
              <i-ep-CaretBottom />
            </el-icon>
            <el-icon v-else>
              <i-ep-CaretTop />
            </el-icon>
          </div>
        </template>

        <template #menu>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </template>
      </dropmenu>
    </div>
  </div>
</template>

<script setup>
import dropmenu from "@/components/dropmenu/index.vue";
const search = ref("");
</script>
<style lang="scss" scoped>
.header-box {
  height: 48px;
}

.form-input48 {
  width: 412px;

  ::v-deep(.el-input__wrapper) {
    box-shadow: none !important;
  }
}

.right-box {
  .img-box {
    width: 48px;
    height: 48px;
    margin-right: 24px;
    text-align: center;
    line-height: 48px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
    img {
      vertical-align: middle;
    }
  }

  .user-box {
    width: 194px;
    height: 48px;
    padding-left: 14px;
    padding-right: 17px;
    line-height: 48px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      border-radius: 50%;
      vertical-align: middle;
    }

    .user-name {
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 24px;
      color: rgba(10, 22, 41, 1);
      vertical-align: middle;
    }
  }

  ::v-deep(.dropmenu-content-box) {
    border-radius: 14px;
  }
}
</style>
