import ReactDOM from "react-dom/client";
import "./index.css"
const App = <div className="logs">
    <div className="items">
        {/* 日期的一个容器 */}
        <div className="date">
            <div className="month">Dec</div>
            <div className="day">28</div>
        </div>
        {/* 内容的一个容器 */}
        <div className="content">
            <h2 className="desc">Learn React</h2>
            <div className="time">14</div>
        </div>
    </div>
</div>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(App)

