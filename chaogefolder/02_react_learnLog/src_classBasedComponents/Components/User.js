/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-11-07 10:58:37
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-07 14:05:56
 * @FilePath: /reactjs/chaogefolder/02_react_learnLog/src/Components/User.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
import React, { Component } from "react";
/* 
    类组件的props是存储到类组件的实例对象中的
    可以直接通过实例对象获取
    this.props

    类组件的state是统一存储到实例对象的state属性中
    可以通过this.state来访问
    通过this.setState()对其进行修改
    当我们通过setState修改state的时候
    React只会修改设置的属性保留其他属性

    函数组件中响应函数直接以函数的形式定义在组件中
    但是在类组件中 响应函数以类的方法来定义
*/
class User extends Component {
    //
    divRef= React.createRef()
    state = {
        counter: 0,
        test: "haha"
    }

    clickHandler = () => {
        this.setState({counter: 10})
        console.log(this.divRef)
    }
    render() {
        return <div ref={this.divRef}>
            <h1>{this.state.counter} - {this.state.test}</h1>
            <button onClick={this.clickHandler}>Click me</button>
            <ul>
                <li>name: {this.props.name}</li>
                <li>age: {this.props.age}</li>
            </ul>
        </div>
    }
}

export default User