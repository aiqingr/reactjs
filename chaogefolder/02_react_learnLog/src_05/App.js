/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-11-03 20:55:01
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-03 21:10:46
 * @FilePath: /reactjs/chaogefolder/02_react_learnLog/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
const App = () => {
    const clickHandler = () => {
        alert("hahahahah")
    }

    const linkHandler = (event) => {
        console.log(event)
        event.preventDefault() // 取消默认行为
        event.stopPropagation() // 取消冒泡行为
        /* 
            在React中，无法通过return false取消默认行为

            事件对象
                React 事件同样会传递事件对象 可以在响应函数中定义的参数来接受事件对象
                React中的事件对象同样不是原生的事件对象是经过react包装后的事件对象
                由于对象进行过包装 所以使用过程中我们无需考虑兼容性的问题
        */
        alert("a link")
        // return false
    }
    return <div 
            onClick={()=>{alert("div")}} style={{width:200,height:200, margin:50, backgroundColor: "green"}}>
        <button onClick={()=>{alert(123)}}>Click me</button>
        <button onClick={clickHandler}>Click me to get hahaha </button>
        <a href="www.bing.com" onClick={linkHandler}>BING</a>
    </div>
}

export default App