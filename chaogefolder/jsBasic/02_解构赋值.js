// Destructuring assignment解构赋值

let a, b;
let arr = ["sunwukong", "zhubajie"];
[a,b] = arr;

let [c, d] = arr;

console.log('a->', a);
console.log('b->', b);

console.log('c->', c);
console.log('d->', d);

function fn() {
    return [1,2]
}

const [e,f] = fn();

console.log('e->', e);
console.log('f->', f);

const obj = {
    name: "sunwukong",
    age:18,
    gender: "male"
};
/* 
    如果变量名和属性名一样 就可以省略
*/
const {name,age,gender} = obj;

console.log('name,age,gender', name, age, gender)
/* 
    交换变量
*/

a = 10;
b = 20;

[a,b] = [b,a];

console.log('a', a)
console.log('b', b)