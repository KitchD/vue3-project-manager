/*
  动画指令
    鼠标移入元素后毛玻璃 hover效果
*/
import gasp from "gsap";
export default {
  span: null,
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) {
    const span = document.createElement("span");
    let start = false; //是否已经开始执行动画 - 防止快速移入移出多次执行
    el.addEventListener("mouseenter", function (e) {
      if (start) return;
      start = true;
      const info = el.getBoundingClientRect();
      span.className = "hover-blur-span";
      el.appendChild(span);
      gasp.to(span, { width: "300%", height: "300%", duration: 0.8 });
      //计算 top 和 left 值，跟踪鼠标位置
      let top = e.clientY - info.top;
      let left = e.clientX - info.left;
      span.style.top = top + "px";
      span.style.left = left + "px";
    });

    el.addEventListener("mouseleave", function (e) {
      gasp.to(span, {
        width: 0,
        height: 0,
        duration: 0.8,
        onComplete: () => {
          try {
            el.removeChild(span);
          } catch {}

          start = false;
        },
      });
      const info = el.getBoundingClientRect();
      //计算 top 和 left 值，跟踪鼠标位置
      let top = e.clientY - info.top;
      let left = e.clientX - info.left;

      span.style.top = top + "px";
      span.style.left = left + "px";
    });
  },
};
