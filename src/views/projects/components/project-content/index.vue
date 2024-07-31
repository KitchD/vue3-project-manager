<template>
  <div class="project-content flex1">
    <div class="head">
      <span class="title">任务列表</span>
    </div>

    <div class="content-title">当前任务</div>
    <ul class="current-list">
      <li
        class="item list-item flex align-center"
        v-for="item in CurrentList"
        :key="item.name"
      >
        <div class="col flex-column">
          <span class="label">任务名称</span>
          <span class="value">{{ item.name }}</span>
        </div>
        <div class="col flex-column">
          <span class="label">预估时间</span>
          <span class="value">{{ item.time1 }}</span>
        </div>
        <div class="col flex-column">
          <span class="label">实际时间</span>
          <span class="value">{{ item.time2 }}</span>
        </div>
        <div class="col flex-column">
          <span class="label">执行人</span>
          <img class="img-value" :src="'/img/avatar/' + item.people" />
        </div>

        <div class="col flex-column">
          <span class="label">优先等级</span>
          <ProjectPriority :level="item.level" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ProjectPriority from "@/components/project-priority/index.vue";
const CurrentList = [
  {
    name: "用户调研",
    time1: "2天4小时",
    time2: "1天2小时",
    people: "avatar1.svg",
    level: "2",
    type: "进行中",
    percentage: 72,
  },
];
</script>

<style lang="scss" scoped>
.project-content {
  padding-left: 30px;
  padding-right: 40px;
}
.head {
  margin-bottom: 24px;
  .title {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 31.86px;
    color: rgba(10, 22, 41, 1);
  }
}

.content-title {
  margin-bottom: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 14px;
  background: #e6edf5;
  /** 文本 */

  color: rgba(10, 22, 41, 1);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
}

.list-item {
  padding: 0 30px;
  margin-bottom: 16px;
  width: 100%;
  height: 91px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 6px 58px #c4cbd6;

  .label {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 20.27px;
    color: rgba(145, 146, 158, 1);
  }

  .value {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(10, 22, 41, 1);
  }
  .img-value {
    width: 24px;
    height: 24px;
  }
}

.current-list {
  .item {
    .col:nth-child(1) {
      width: 26.91%;
    }
    .col:nth-child(2) {
      width: 14.84%;
    }

    .col:nth-child(3) {
      width: 15.72%;
    }
    .col:nth-child(4) {
      width: 12.45%;
    }
  }
}
</style>
