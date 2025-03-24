// 导入 `useEffect` 函数
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [count, setCount] = useState(0);
  // 2. 调用 useEffect 函数，并传入回调函数
  useEffect(() => {
    console.log("副作用执行了....");
    // 3. 在回调函数中编写副作用处理（dom 操作）
    document.title = count + "!!!!";
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <div>{count}</div>
    </div>
  );
}
root.render(
  <>
    <App />
  </>
);