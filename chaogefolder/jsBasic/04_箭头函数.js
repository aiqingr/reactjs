/* 
    箭头函数

*/
/* 
    只有一个参数 
    参数 => 返回值

    如果没有参数 或者多个参数就需要使用()括起来
    () => 返回值
    (a,b,c) => 返回值

    箭头后边的值就是函数的函数值
        - 返回值必须是一个表达式（有值的语句）
        - 如果返回值是一个对象 需要（）括起来
        
    如果需要在箭头函数中定义逻辑 可以直接在箭头后面跟一个代码块
    代码块中的语法和普通函数没有区别
    
    
*/
const fn = a => "hello"
console.log('fn(1)', fn(1))

const fn2 = (a,b) => a+b
console.log('fn2(1,2)', fn2(1,2))

const fn3 = (a,b) => {
    if(a > 10) {
        a += 10
    } else {
        a += 5
    }
    return a + b
}

let res12 = fn3(11,1)

console.log('res12', res12)

/* 
    1.箭头函数没有arguments 
        我们在箭头函数中使用的是...args

    2.箭头函数中没有自己的this
        - 他的this总是由外层作用域的this决定的

    3.箭头函数的this无法通过call apply bind来修改

    4.箭头函数无法作为构造函数
*/

const fnc = (...args) => {
    console.log('args', args)
}

let res = fnc(1,2,3)
console.log('res', res)

const fn4 = () => {
    console.log(this)
}
fn4()

const obj = {
    hello: () => {
        console.log('this-->', this)
    }
}

const obj2 = {
    hello: function() {
        const test = () => {
            console.log('this', this)
        }
        test()
    }
}

const obj3 = {
    hello: function() {
        console.log('obj3this', this)
    }
}

obj2.hello()
obj3.hello()
