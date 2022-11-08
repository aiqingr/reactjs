const a = 10
export const b = 11
export const c = 12 
const obj = {
    name: "sunwukong",
    age: 18
}

const fn = () => {
    console.log("hello")
}

/* 
    作为一个模块 我们不希望模块中所有的内容都暴露给外部
    作为导入方 也不希望导入无用的变量

    export （导出）
        - 导出用来决定一个模块中那些内容可以被外部查看
        - 导出分为两种
        1 默认导出
            - 语法
                export default xxx
            - 一个模块中只可以有一个默认导出
        
        2 命名导出
            - 语法


    import（导入）
        - 导入用来将外部模块中的内容导入到当前的模块中
        - 导入默认模块
            import a from "./05_模块化"
            - 导入默认模块时，变量名可以自主指定，无需和模块的变量名对应
            - 在网页中导入模块的时，模块的路径必须写完整
        -导入指定内容
            import {b,c} from "xxx"

        -导入默认和指定内容
            import a, {b,c} from "XXX"
*/

export default a;