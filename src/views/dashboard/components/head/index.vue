<template>
  <div class="head-box">
    <div class="welcome-text">欢迎回来，admin!</div>
    <div class="title-box flex align-center justify-between">
      <RootTitle text="仪表盘"></RootTitle>
      <div class="time-box flex align-center">
        <el-date-picker
          v-model="time"
          type="daterange"
          start-placeholder="Start date"
          end-placeholder="End date"
          :prefix-icon="customPrefix"
          format="YYYY年MM月DD日"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TimeSvg from "@assets/image/dashboard/calendar.svg";
const now = new Date();
const startDate = new Date(
  Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
)
  .toISOString()
  .slice(0, 10);
const endDate = new Date(
  Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() + 1)
)
  .toISOString()
  .slice(0, 10);
const time = ref([startDate, endDate]);

const customPrefix = shallowRef({
  render() {
    return h("img", {
      style: {
        "margin-right": "15px",
      },
      src: TimeSvg,
    });
  },
});
</script>

<style lang="scss" scoped>
.welcome-text {
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  color: rgba(125, 133, 146, 1);
  text-align: left;
  vertical-align: top;
}

.time-box {
  width: 315px;
  height: 48px;
  padding-left: 19px;
  padding-right: 15px;
  opacity: 1;
  border-radius: 14px;
  background: rgba(230, 237, 245, 1);

  ::v-deep(.el-date-editor--daterange) {
    padding: 0;
    background: none;
    box-shadow: none;

    input {
      color: #000;
    }
  }
}
</style>
