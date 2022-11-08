import React, { useContext } from "react"
import TestContext from "../../store/TestContext"
/* 
    使用Context方式二
    1. 导入Context
    2. 使用钩子函数useContext()获取到context
        useContext()需要一个Context作为参数
            他会将COntxt中的数据获取并作为返回值返回

    xxx.Provider
        表示数据的生产者 可以使用它来指定Context中的数据
        通过value来指定Context中存储的数据
        这样 该组件的所有的子组件都可以通过Context来访问他所指定的数据

    当我们通过Context访问数据的时候 他会获取到离他最近的Provider的数据

*/

const B = () => {

    const ctx = useContext(TestContext)
    return (
        <div>
            {ctx.name} - {ctx.age}
        </div>
    )
}

export default B