/* 

*/

function fn(a,b,c) {
    return a+b+c
}

const arr = [1,2,3]

let res = fn(...arr)
console.log('res', res)
//浅拷贝 相当于把arr浅复制给arr2
const arr2 = [...arr]
const arr3 = [4,5,...arr,6]
console.log('arr2', arr2)
console.log('arr3', arr3)

const obj = {name:"sunwukong", age:18, gender:"male"}

const obj2 = {...obj}

obj.name = "zhubajie"

console.log('obj1', obj)

console.log('obj2', obj2)