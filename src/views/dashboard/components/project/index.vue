<template>
  <div class="project-box">
    <ContentHead text="项目"></ContentHead>
    <ul class="project-list">
      <li class="item flex" v-for="item in ProjectList" :key="item.id">
        <div class="left">
          <div class="top-box flex">
            <img
              class="project-icon"
              :src="`/src/assets/image/dashboard/${item.img}.png`"
            />
            <div class="text-box flex-column justify-between">
              <span class="project-id">{{ item.id }}</span>
              <span class="project-name">{{ item.name }}</span>
            </div>
          </div>
          <div class="time-box flex align-center">
            <img src="@assets/image/dashboard/calendar2.svg" />
            <span class="time flex1">{{ item.CreateTime }}</span>
            <img :src="`/src/assets/image/dashboard/${GetArrow(item.level)}`" />
            <span :class="['level', `level-${item.level}`]">{{
              GetLevel(item.level)
            }}</span>
          </div>
        </div>
        <div class="right">
          <div class="project-data">项目数据</div>

          <div class="bottom-box flex justify-between">
            <div class="flex-column">
              <span class="title">所有任务</span>
              <span class="value">{{ item.all }}</span>
            </div>
            <div class="flex-column">
              <span class="title">当前任务</span>
              <span class="value">{{ item.current }}</span>
            </div>
            <div class="flex-column">
              <span class="title">执行人</span>
              <ArcAvatar :list="item.staff"></ArcAvatar>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ContentHead from "../content-head/index.vue";
import ArcAvatar from "@/components/arc-avatar/index.vue";
const ProjectList = [
  {
    img: "project1",
    id: "PN0001265",
    name: "医疗应用（iOS 原生）",
    CreateTime: "2020年9月12日",
    level: "2",
    all: "34",
    current: "13",
    staff: ["avatar1", "avatar3", "avatar5", "avatar7", "avatar8"],
  },
  {
    img: "project2",
    id: "PN0001221",
    name: "送餐服务",
    CreateTime: "2020年9月10日",
    level: "2",
    all: "50",
    current: "24",
    staff: ["avatar1", "avatar3", "avatar5", "avatar7", "avatar8"],
  },
  {
    img: "project3",
    id: "PN0001290",
    name: "送餐服务",
    CreateTime: "2021年5月28日",
    level: "1",
    all: "23",
    current: "20",
    staff: ["avatar1", "avatar3", "avatar5", "avatar7", "avatar8"],
  },
];

function GetArrow(level) {
  switch (level) {
    case "2":
      return "arrow-up.svg";
    case "1":
      return "arrow-down.svg";
  }
}

function GetLevel(level) {
  switch (level) {
    case "2":
      return "中";
    case "1":
      return "低";
  }
}
</script>

<style lang="scss" scoped>
.project-box {
  margin-top: 44px;
}

.project-list {
  margin-top: 25px;
  .item {
    margin-bottom: 20px;
    height: 148px;
    border-radius: 24px;
    background-color: #fff;
    overflow: visible;

    .left,
    .right {
      flex: 1;
      height: 100%;
    }
    .left {
      border-right: 1px solid #e4e6e8;
      padding: 24px 44px 30px 27px;
      .top-box {
        .project-icon {
          margin-right: 14px;
          width: 48px;
          height: 48px;
        }
        .project-id {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0px;
          color: rgba(145, 146, 158, 1);
          vertical-align: top;
        }
      }

      .time-box {
        margin-top: 25px;
        img {
          margin-right: 9px;
        }

        .time {
          font-size: 14px;
          font-weight: 400;
          color: rgba(125, 133, 146, 1);
        }

        .level {
          font-size: 14px;
        }
      }
    }

    .right {
      padding: 36px 48px 25px 44px;

      .project-data {
        font-size: 16px;
        font-weight: 400;
        color: rgba(10, 22, 41, 1);
      }
      .bottom-box {
        margin-top: 16px;
        .title {
          font-size: 14px;
          font-weight: 400;
          color: rgba(145, 146, 158, 1);
        }
        .value {
          margin-top: 3px;
          font-size: 16px;
          font-weight: 400;
          color: rgba(10, 22, 41, 1);
        }
      }
    }
  }
}

.level-2 {
  color: #ffbd21;
}

.level-1 {
  color: #0ac947;
}
</style>
