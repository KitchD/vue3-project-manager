<template>
  <div class="workload-box">
    <ContentHead text="工作量"></ContentHead>
    <div class="staff-list">
      <div class="item" v-hover-blur v-for="item in StaffList" :key="item.name">
        <div class="progress-box">
          <el-progress
            type="circle"
            :percentage="item.percentage"
            class="percentage reverse-progress"
          >
            <img class="avatar-img" :src="'/img/avatar/' + item.avatar" />
          </el-progress>
        </div>

        <span class="name">{{ item.name }}</span>
        <br />
        <span class="desc">{{ item.desc }}</span>
        <br />
        <span class="level">{{ item.level }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import ContentHead from "../content-head/index.vue";

const StaffList = [
  {
    name: "张伟成",
    desc: "用户界面/交互设计师",
    avatar: "avatar1.svg",
    percentage: Math.floor(Math.random() * 100) + 1,
    level: "中级",
  },
  {
    name: "王怡悦",
    desc: "用户界面/交互设计师",
    avatar: "avatar2.svg",
    percentage: Math.floor(Math.random() * 100) + 1,
    level: "初级",
  },
  {
    name: "李鹤轩",
    desc: "文案",
    avatar: "avatar3.svg",
    percentage: Math.floor(Math.random() * 100) + 1,
    level: "中级",
  },
  {
    name: "甄博超",
    desc: "文案",
    avatar: "avatar4.svg",
    percentage: Math.floor(Math.random() * 100) + 1,
    level: "高级",
  },
  {
    name: "于伟旗",
    desc: "IOS开发人员",
    avatar: "avatar5.svg",
    percentage: Math.floor(Math.random() * 100) + 1,
    level: "高级",
  },
  {
    name: "段欣怡",
    desc: "用户界面/UI设计师",
    avatar: "avatar6.svg",
    percentage: Math.floor(Math.random() * 100) + 1,
    level: "中级",
  },
  {
    name: "于瑞元",
    desc: "文案",
    avatar: "avatar7.svg",
    percentage: Math.floor(Math.random() * 100) + 1,
    level: "初级",
  },
  {
    name: "段康宇",
    desc: "用户界面/UI设计师",
    avatar: "avatar8.svg",
    percentage: Math.floor(Math.random() * 100) + 1,
    level: "中级",
  },
];
</script>

<style lang="scss" scoped>
.workload-box {
  padding: 28px 18px 18px 18px;
  height: 470px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
}

.staff-list {
  display: grid;
  justify-content: space-between;
  margin-top: 20px;
  grid-template-columns: repeat(auto-fill, 175px);

  grid-row-gap: 16px;
  .item {
    position: relative;
    overflow: hidden;
    padding-top: 17px;

    width: 175px;
    background-color: rgba(244, 249, 253, 1);
    aspect-ratio: 35/36;
    border-radius: 24px;
    text-align: center;
    .progress-box {
      width: 33.14%;
      margin: 0 auto;
      height: auto;
      aspect-ratio: 1;

      .avatar-img {
        width: 82%;
      }

      ::v-deep(.el-progress) {
        width: 100% !important;
        height: auto !important;
        aspect-ratio: 1 !important;
        .el-progress-circle {
          width: 100% !important;
          height: auto !important;
          aspect-ratio: 1 !important;

          .el-progress-circle__track {
            stroke: #dce2e7;
          }
        }
      }
    }

    .name {
      margin-top: 12px;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0px;
      color: rgba(10, 22, 41, 1);
    }
    .desc {
      margin-top: 4px;
      color: rgba(10, 22, 41, 1);
      font-size: 14px;
    }
    .level {
      margin-top: 10px;
      width: 46px;
      height: 18px;
      line-height: 18px;
      font-size: 12px;
      font-weight: 500;
      color: rgba(125, 133, 146, 1);
      border-radius: 4px;
      border: 1px solid rgba(125, 133, 146, 1);
    }
  }
}

.percentage,
.name,
.desc,
.level {
  position: relative;
  z-index: 100;
}
</style>
