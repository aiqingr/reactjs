import ReactDOM from "react-dom/client"

const App = <div>
    <h1>This is a react application</h1>
    <p>I have my first react project</p>
</div>
// 获取根元素
const root = ReactDOM.createRoot(document.getElementById("root"))
// 将APP渲染到根容器
root.render(App)