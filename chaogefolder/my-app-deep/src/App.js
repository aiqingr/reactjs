import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import B from "./B";

const App = () => {
    console.log("App am running");

    const [count, setCount] = useState(0)

    useEffect(()=>{
        setCount(1)
    })

    /* 
        Too many re-renders
        当我们直接在函数体中调用setState时， 就会触发上述错误
        问题：
            不是说过当新的state数值和旧的数值相同的时候 他是不会触发组件的重新渲染么
        setState()的执行流程（函数组件）
        setCount --> dispatchSetDate()
        --->会先判断 组件当前处于什么阶段
        1. 如果是渲染阶段 --> 不会检查State值是否相同
        2. 如果不是渲染阶段 --> 会检查State值是否相同
        -->如果值相同 则对组件进行重新渲染
        -->如果值不相同 则不对组件进行重新渲染
        如果值相同 react在一些情况下会继续执行当前组件的渲染
        但是这个渲染不会触发其子组件的渲染 这次渲染不会产生实际的效果
    */

        /* 
            useEffect() 是一个钩子函数 需要一个函数作为参数
            这个作为参数的函数 将会在组件渲染完毕后执行
            在开发中 可以将那些会产生副作用的代码编写到useEffect的回调函数中
        */

    // const clickHandler = () => {
    //     console.log("Click me");
    //     setCount(1)
    // }
    return (
        <div>
            <B></B>
            {count}
        </div>
    )
}

export default App