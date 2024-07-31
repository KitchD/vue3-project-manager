<template>
  <div class="project-list-box">
    <div class="title">当前项目</div>
    <ul class="list">
      <li
        v-for="item in ProjectList"
        :key="item.name"
        :class="['item', CurrProject === item.id ? 'act-project' : '']"
        @click="ChooseProject(item.id)"
      >
        <div class="p-bg"></div>
        <div class="p-id">{{ item.id }}</div>
        <div class="p-name">{{ item.name }}</div>
        <div class="p-detail">查看详细 ></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const CurrProject = ref("");
const ProjectList = [
  { id: "PN0001245", name: "医疗应用（iOS 原生）" },
  { id: "PN0001246", name: "送餐服务系统" },
  { id: "PN0001247", name: "财富企业网站" },
  { id: "PN0001248", name: "规划器应用" },
  { id: "PN0001249", name: "时间追踪器" },
  { id: "PN0001250", name: "内部项目系统" },
];

function ChooseProject(id) {
  CurrProject.value = id;
}
</script>

<style lang="scss" scoped>
.project-list-box {
  width: 265px;
  height: 100%;
  border-radius: 24px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
}

.title {
  padding-left: 24px;
  height: 70px;
  line-height: 70px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(10, 22, 41, 1);
  border-bottom: 1px solid #e4e6e8;
}

.list {
  padding: 8px;
  .item {
    position: relative;
    cursor: pointer;
    margin-bottom: 30px;
    padding: 12px 0 11px 16px;
    border-radius: 14px;
    overflow: hidden;
    .p-bg {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 100%;
      transition: all 0.25s ease;
      background: #f4f9fd;
    }
    .p-id,
    .p-name,
    .p-detail {
      position: relative;
      z-index: 10;
    }
    .p-id {
      z-index: 10;
      font-size: 12px;
      font-weight: 400;
      color: rgba(145, 146, 158, 1);
    }

    .p-name {
      z-index: 10;
      margin-top: 5px;
      font-size: 16px;
      color: rgba(10, 22, 41, 1);
    }
    .p-detail {
      display: none;
      margin-top: 11px;
      font-size: 16px;
      font-weight: 400;
      color: rgba(63, 140, 255, 1);
    }
  }

  .act-project {
    .p-detail {
      display: block;
    }
    .p-bg {
      z-index: 0;
      bottom: 0%;
    }
  }
}
</style>
