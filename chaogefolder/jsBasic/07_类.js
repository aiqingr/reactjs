/* 
    类
        - 类是对象的模版
        - 类决定了一个对象中有哪些属性和方法
        - 使用class 关键字来定义一个类

*/
class Person {
    //构造函数
    /* 
        当我们通过new创建对象的时候 实际就是在调用类的构造函数
    */
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
/* 
    age = 18;
    gender = "male"; */

    // 定义一个实例方法
    run() {
        console.log("I can run")
    }
}

const person1 = new Person("sunwukong", 18, "male");
const person2 = new Person("zhubajie", 28, "male");

console.log(person1, person2)
console.log(person1 === person2)

person1.run()