<template>
  <div class="menu-box">
    <el-scrollbar>
      <img class="avatar" src="@/assets/image/avatar.jpg" />
      <ul class="menu-list">
        <li
          v-for="item in MenuList"
          :key="item.name"
          :class="['item', 'flex', 'align-center']"
          @click="ClickItem(item.name)"
        >
          <img :src="getImageUrl(GetICon(item))" />
          <span class="name">{{ item.name }}</span>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script setup>
const MenuList = [
  { icon: "dashboard", name: "仪表盘" },
  { icon: "projects", name: "项目" },
  { icon: "calendar", name: "日历" },
  { icon: "vacations", name: "假期" },
  { icon: "users", name: "雇员" },
  { icon: "message", name: "消息" },
  { icon: "folder", name: "门户网站" },
];

const CurrentMenu = ref("仪表盘");

const GetICon = computed(
  () => (item) =>
    CurrentMenu.value === item.name ? item.icon + "-act" : item.icon
);
function getImageUrl(item) {
  return new URL(
    `../../../../assets/image/layout/menu/${item}.svg`,
    import.meta.url
  ).href;
}

function ClickItem(name) {
  CurrentMenu.value = name;
}
</script>

<style lang="scss" scoped>
.menu-box {
  background-color: #fff;
  width: 200px;
  height: 100%;
  box-shadow: 0px 6px 58px #c4cbd619;
  border-radius: 24px;
  padding-top: 40px;
  padding-left: 16px;
}

.menu-list {
  margin-top: 55px;

  .item {
    cursor: pointer;
    height: 44px;
    margin-bottom: 22px;
    img {
      margin-right: 19px;
    }
    .name {
      font-size: 16px;
      color: #7d8592;
    }
  }
}

.avatar {
  width: 50px;
  height: 50px;
  margin-left: 8px;
  border-radius: 12px;
}
</style>
