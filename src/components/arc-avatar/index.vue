<template>
  <div class="arc-avatar-box flex align-center">
    <img
      class="img"
      v-for="item in show"
      :key="item"
      :src="`/img/avatar/${item}.svg`"
    />
    <span
      @click="ShowArc"
      ref="SpanArcRef"
      class="arc-ball"
      v-if="show.length >= 3"
    >
      +{{ list.length - 3 }}

      <TransitionGroup @enter="OnEnter" @leave="OnLeave" v-for="item in hide">
        <img
          class="arc-img"
          :key="item.img"
          :src="`/img/avatar/${item.img}.svg`"
          :data-left="item.x"
          :data-top="item.y"
          v-show="IsShowArc"
        />
      </TransitionGroup>
    </span>
  </div>
</template>

<script setup>
import gsap from "gsap";
const props = defineProps(["list"]);
const SpanArcRef = ref(null);
const IsShowArc = ref(false);

let show = []; //要显示的前三个
let hide = ref([]); //需要展开的头像

const StartAngle = -60; //起始角度

if (props.list.length <= 3) {
  show = [...props.list];
} else {
  show = props.list.filter((item, index) => index <= 2);
}

onMounted(() => {
  HandleHideList();
});

//处理扇形展开图片的数据
function HandleHideList() {
  console.log(SpanArcRef.value);
  if (SpanArcRef.value === null) return;

  const location = SpanArcRef.value.getBoundingClientRect();
  hide.value = props.list.map((item, index) => {
    const rad = ((StartAngle + index * 30) * Math.PI) / 180;
    return {
      img: item,
      rad: rad, //角度转弧度
      x: 50 * Math.cos(rad) + "px",
      y: 50 * Math.sin(rad) + "px",
    };
  });
}

function ShowArc(e) {
  IsShowArc.value = !IsShowArc.value;
}

function OnEnter(el, done) {
  gsap.to(el, {
    top: el.dataset.top,
    left: el.dataset.left,
    onComplete: done,
  });
}

function OnLeave(el, done) {
  gsap.to(el, {
    top: 0,
    left: 0,
    onComplete: done,
  });
}
</script>

<style lang="scss" scoped>
.img {
  width: 24px;
  height: 24px;
}

.img:not(:first-child) {
  margin-left: -6px;
  width: 26px;
  height: 26px;
  border: 2px solid #fff;
  border-radius: 50%;
}

.arc-ball {
  position: relative;
  margin-left: -5px;
  width: 26px;
  height: 26px;
  border: 2px solid rgba(151, 151, 151, 1);
  border-radius: 50%;
  background-color: #3f8cff;
  color: #fff;
  font-size: 12px;
  text-align: center;
}

.arc-img {
  position: absolute;

  width: 24px;
  height: 24px;
}
</style>
