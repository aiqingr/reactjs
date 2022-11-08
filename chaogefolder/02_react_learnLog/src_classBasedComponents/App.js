/*
 * @Author: Tongyang Ni ntyaiqingr@gmail.com
 * @Date: 2022-11-07 10:53:40
 * @LastEditors: Tongyang Ni ntyaiqingr@gmail.com
 * @LastEditTime: 2022-11-07 11:00:03
 * @FilePath: /reactjs/chaogefolder/02_react_learnLog/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Tongyang Ni ntyaiqingr@gmail.com, All Rights Reserved. 
 */
import "./App.css"
import {Component} from "react";
import User from "./Components/User";

class App extends Component{
    render() {
        return <div className="app">
            Hello World
            <User name={"zhu"} age={28} />
        </div>

    }
}

export default App