/* 
    Context 相当于一个公共的存储空间
    我们可以将多个组件中都需要访问的数据统一存储在一个Context当中
    这样无需通过props逐层传递 即可使组件访问到这些数据
    
    通过React.createContext()创建一个context
*/
import React from "react"

const TestContext = React.createContext(
    {
        name: "sunwukong",
        age: 18
    }
)

export default TestContext