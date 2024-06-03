<template>
  <div class="dropmenu-box">
    <div
      class="dropmenu-content-box"
      id="dropmenu-content-box"
      @click.stop="toggle"
    >
      <slot :ShowMenu="ShowMenu"></slot>
    </div>

    <Transition
      @before-enter="BeforeEnter"
      @enter="OnEnter"
      @before-leave="BeforeLeave"
      @after-leave="AfterLeave"
    >
      <div class="menu-box" v-show="ShowMenu">
        <slot name="menu"></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const ShowMenu = ref(false);
let ContentBoxDom = null;
//css 样式圆角,展开时如果有圆角则设为0,折叠后重新设置
let ContentBoxRadius = null;
onMounted(() => {
  ContentBoxDom = document.getElementById("dropmenu-content-box");
   // 获取计算后的样式
   const ContentBoxStyle = window.getComputedStyle(ContentBoxDom);
   ContentBoxRadius = ContentBoxStyle.borderRadius;
});

function toggle(param) {
  ShowMenu.value = !ShowMenu.value;
}

function BeforeEnter(el) {
  ContentBoxDom.style.borderBottomLeftRadius = "0px";
  ContentBoxDom.style.borderBottomRightRadius = "0px";

  el.style.maxHeight = "0px";
}

function OnEnter(el) {
  el.style.maxHeight = el.scrollHeight + "px";
}

function BeforeLeave(el) {
  el.style.maxHeight = "0px";
}

function AfterLeave() {
  ContentBoxDom.style.borderRadius = ContentBoxRadius;
}
</script>

<style lang="scss" scoped>
.dropmenu-box {
  position: relative;
}

.dropmenu-content-box {
  overflow: hidden;
  transition: all 0.2s ease;
}
.menu-box {
  position: absolute;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 99999;
  overflow: hidden;
  transition: all 0.5s ease;
}
</style>
