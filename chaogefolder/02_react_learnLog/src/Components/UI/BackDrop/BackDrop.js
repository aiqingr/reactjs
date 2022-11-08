import React from "react"
import ReactDOM from "react-dom"
import "./BackDrop.css"
/* 
    portal 
        - 组件默认会作为父组件的后代直接渲染到页面中
            但是有些情况这种方式会带来一些问题
        - 通过portal 可以将组件渲染到页面中的指定位置
        - 使用方法
            1） 在index.html中添加一个新的元素
            2） 修改组件的渲染方式
                - 通过ReactDOM.createPortal()作为返回值创建元素
                - 参数
                    1. JSX（修改前return后面的代码）
                    2. 目标未知（DOM元素）

*/
const backdrop = document.getElementById("backdrop-root")
const BackDrop = props => {
    return ReactDOM.createPortal(
        <div className="backDrop">
            {props.children}
        </div>,
        backdrop
    )
}

export default BackDrop