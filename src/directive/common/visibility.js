
export default {
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) {
    el.style.visibility = binding.value ? "hidden" : "visible";
  },
  updated(el, binding, vnode, prevVnode) {
    el.style.visibility = binding.value ? "hidden" : "visible";
  },
};
