import ReactDOM from "react-dom/client"; // 导入React DOM的客户端模块
import { useWindowScroll } from "./other/useWindowScroll"; // 导入自定义的useWindowScroll钩子函数
const root = ReactDOM.createRoot(document.getElementById("root")); // 创建根节点
function App() {
  const y = useWindowScroll(); // 使用useWindowScroll钩子获取滚动位置
  return(
    <div>
    <div style={{ position: "fixed", top: 0, left: 0, zIndex: 1000, backgroundColor: "white", padding: "10px" }}>
      当前滑动距离: {y}
    </div>
    <div style={{ height: "12000px" }}>{y}</div>; // 返回一个包含滚动位置的div元素

  </div>
  )
  

}
export function renderApp() {
  root.render(
    <>
      <App /> // 渲染App组件
    </>
  );
}