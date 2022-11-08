class MyClass {
    /* 
        类中的所有代码都会在严格模式下执行
            严格模式下其中一个特点就是 函数的this不对象本身 而是undefined

        注意：
            在类中的方法的this不是固定的
                以方法形式调用的时候，this就是当前实例
                以函数形式调用的时候，this就是undefined

            在开发中，在有些场景中，我们希望方法中this是固定的 不会因为调用方式的不同而改变
                如果有这样的需求 可以使用箭头函数定来类中的方法
                如果类中的方法是以箭头函数定义的 则方法中this一直都是当前实例 不会改变
    */
    /* fn() {
        console.log('this', this)
    } */

    fn = () => {
        console.log(this)
    }
}

const mc = new MyClass();

const test = mc.fn;

mc.fn() // MyClass
test() // 使用function fn(){}定义的时候 返回undefined
// 使用箭头函数的时候 返回的就是MyClass

