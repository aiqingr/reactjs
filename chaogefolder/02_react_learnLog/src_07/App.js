/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-11-04 09:32:04
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-07 10:16:28
 * @FilePath: /reactjs/chaogefolder/02_react_learnLog/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
import { useState } from "react"
import "./App.css"
const App = () => {

    /* 
        在react中当组件渲染完后 在修改组件中的变量 不会使组件重新渲染
        要是的组件可以收到变量的影响 必须在变量修改后对组件进行重新渲染
        这里我们就需要一个特殊的变量当这个变量被修改的时候 组件会自动渲染

        state相当于一个变量
        只是这个变量在react中进行了注册
        react会监控这个变量的变化 当state发生变化的时候 会自动触发组件的重新渲染
        使得我们的修改可以在页面中呈现出来
        - 只有state发生变化 组件才会重新渲染
        - state是一个对象的时候 修改是使用新的对象去替代旧的对象

        当通过setState去修改一个state时， 并不表示修改当前的state
        他修改的是 下一次渲染的state值

        在函数组件中 我们需要通过钩子函数 获取state
        他需要一个值作为参数 这个值就是state的初始值
        该函数会返回一个数组
        数组中的第一个元素 是初始值
            初始值只是用来显 示数据 直接修改不会出发组件的重新渲染
        数组中的第二个元素 是一个函数
        这个函数是用来渲染

        
    */
    const [counter, setCounter] = useState(2)
    const [user, setUser] = useState({name: "sun", age: 18})
    const addHandler = () => {
        setTimeout(()=> {
            setCounter((prev)=>{
                return prev+1
            })
        }, 1000)
    }

    const reduceHandler = () => {
        setCounter(counter-1)
    }
    const userHandler = () => {
        /* 
            如果直接修改旧的state对象 因为对象还是之前的对象 所以不会生效

        */
        // user.name = "zhu"
        // console.log(user);
        // setUser(user)

        // const newUser = Object.assign({},user)
        // console.log(newUser)
        // console.log(newUser === user)
        // newUser.name = "zhu"
        // setUser(newUser)

        setUser({...user, name: "zhu"})
    }
    return <div className={"app"}>
        <h1>{user.name} - {user.age}</h1>
        <h1>{counter}</h1>
        <button onClick={userHandler}>-</button>
        <button onClick={addHandler}>+</button>
    </div>
}

export default App
