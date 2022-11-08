/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-11-04 09:32:04
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-07 10:52:51
 * @FilePath: /reactjs/chaogefolder/02_react_learnLog/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
import { useRef } from "react"
import "./App.css"
const App = () => {
    /* 
        获取原生DOM对象
        1. 可以使用传统的获取DOM的方法
        2. 直接从React中获取DOM
            步骤：
                1）创建一个存储DOM对象的容器
                    使用useRef()钩子函数
                    钩子函数的使用注意事项
                    1.React中的钩子函数只可以在函数组件或者自定义钩子中使用
                    2. 钩子函数只可以直接在函数组件调用 (嵌套的函数中就不能使用)
                2) 将容器设置为想要获取的DOM对象的ref属性
                    <h1 ref={}> ... </h1>

        useRef()
            返回的就是一个普通的js对象
            {current: null}
            所以我们直接创建一个对象也可以替代useRef
            但是我们创建的对象 组件每一次重新渲染都会创建一个新的对象
            useRef()创建的对象可以确保每次渲染获取的都是同一个对象

            - 当你需要一个对象不会因为组件的重新渲染而改变的时候就可以通过使用useRef
    */
    const h1Ref = useRef() // 创建一个容器
    const buttonRef = useRef()
    const clickHandler = () => {
        console.log(h1Ref.current)
        console.log(buttonRef.current)
    }

    return <div className={"app"} ref={h1Ref}>
        <h1>I am a header</h1>
        <button onClick={clickHandler} ref={buttonRef}>-</button>
    </div>
}

export default App
