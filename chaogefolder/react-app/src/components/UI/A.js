import TestContext from "../../store/TestContext"
/* 
    使用方式一：
    1 引入context
    2 通过xxx.Consumer组件来创建元素
        Consumer 的标签体需要一个回调函数
        他会将context设置为回调函数的参数 通过参数就可以访问context存储的数据

*/
const A = () => {
    return (
        <TestContext.Consumer>
            {(ctx)=> {
                return <div>
                    {ctx.name} - {ctx.age}
                </div>
            }}
        </TestContext.Consumer>
    )
}

export default A