// 引入 React 的 useState 钩子
import { useState } from "react";

// 定义一个名为 useWindowScroll 的自定义钩子函数
export function useWindowScroll() {
  // 使用 useState 钩子创建一个状态变量 y 和设置状态的函数 setY，并将初始值设为 0
  const [y, setY] = useState(0);

  // 添加滚动事件监听器到 window 对象上
  window.addEventListener("scroll", () => {
    // 获取当前文档顶部相对于视口的垂直偏移量
    const h = document.documentElement.scrollTop;
    // 更新状态变量 y 的值为获取到的偏移量 h
    setY(h);
  });

  // 返回状态变量 y，以便在组件中使用
  return y;
}