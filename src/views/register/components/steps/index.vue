<template>
  <div class="stepx-box">
    <div
      v-for="(item, index) in setpsArr"
      :key="item"
      :class="[
        'setpx-item',
        'flex',
        'align-center',
        CurrStep == index + 1 ? 'act' : '',
        CurrStep > index + 1 ? 'done' : '',
      ]"
    >
      <div class="dot">
        <span v-show="CurrStep > index + 1" class="duihao"></span>
      </div>
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["setpsArr"]);
const { CurrStep } = toRefs(inject("RegisterObject"));
</script>

<style lang="scss" scoped>
.stepx-box {
  margin-top: 52px;
}
.setpx-item {
  margin-bottom: 32px;
  color: #98c2ff;
  font-size: 18px;
  .dot {
    position: relative;
    margin-right: 21px;
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid #9fc6ff;
    border-radius: 50%;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, calc(100% + 5px));
      width: 2px;
      height: 26px;
      border-radius: 1px;
      background-color: #9fc6ff;
    }
  }
}

.act {
  .dot {
    border-color: #fff;

    &::before {
      background-color: #fff;
    }
  }
  span {
    color: #fff;
  }
}

.done  {
  .dot {
    background-color: #fff;
  }
}

.setpx-item {
  &:last-child {
    .dot::before {
      display: none;
    }
  }
}
</style>
