/* 
    数组的方法
*/
const arr = [1,2,3,4,5,6]
/* 
    map()
        可以根据原有数组返回一个新数组
        需要一个回调函数作为参数，回调函数的返回值会作为新数组中的元素
        回调函数中有三个参数
        1）当前元素
        2）当前元素的索引
        3）当前数组

*/
const res1 = arr.map((item, index, array) => item+2)
console.log('res1', res1)

/* 
    filter()
        可以从一个数组中获得符合条件的元素
        会根据回调函数的结果来决定是否保留元素 true保留false不保留

    find()
        可以从一个数组中获得第一个符合的元素
*/

const res2 = arr.filter((item, index, arr)=> item % 2 ===0)
console.log('res2', res2)

const res3 = arr.find(item => item%2 === 1)
console.log('res3', res3)

/* 
    reduce()
        可以用来整合数组
        - 需要两个参数
        1） 回调函数
            回调函数（指定运算规则）中有四个参数
            1. prev上一个值
            2. cur当前值
            3. index 当前索引
            4. 当前数组
        2） 初始值
        - 用来指定第一次运算时prev 如果不指定的话则直接从第二个元素开始
        也就是说如果不指定初始值 则index从1开始而不是从0开始
*/

const res4 = arr.reduce((prev, cur, index, arr)=> {
    console.log('prev', prev)
    console.log('cur', cur)
    console.log('index', index)
    console.log('arr', arr)
    return prev + cur
},0)
console.log('res4', res4)