/* 
    var let const 
*/

/* 
    var 没有块级作用域

    let 有块级作用做

    const 和let类似 具有块级作用域 但是他只能赋值一次
        - 使用场景
            1）对于一些常量 我们用const声明 譬如const PI = 3.14
            2) 对于对象，函数 也可以使用const声明 可以避免函数，对象被意外修改
*/

for(var i=0; i<5; i++) {
    console.log("i -> ", i)
}

console.log(i)