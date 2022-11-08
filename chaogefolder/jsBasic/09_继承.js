class Dog {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello = () => {
        console.log("say hi")
    }
}

class Pig {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello = () => {
        console.log("say hahahah")
    }
}

/* 

    将多个类中重复的代码提取出来
*/

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello = () => {
        console.log("Animal is barking")
    }
}

/* 
    通过继承可以使得类中拥有其他类中的属性和方法
    使用extends来继承一个类 继承后就相当于将该类中的代码复制到了当前类中
    当我们使用继承后，被继承的类就是父类， 继承父类的就是子类
    子类继承父类后， 将获得父类中所有的属性和方法
    我们也可以创建同名的属性或者发方法来对父类进行重写
*/


class Cat extends Animal {
    sayHello = () => {
        console.log("miaomiaomiao")
    }
}

const cat1 = new Cat("mimi", 1)
console.log(cat1.name, cat1.age)
console.log(cat1.sayHello())

class Snake extends Animal {
    /* 
        当子类中重写父类的构造函数的时候 必须在子类构造函数中第一时间调用super
    */
    constructor(name, age, length) {
        super(name, age)
        this.length = length;
    }
}

const snake1 = new Snake("snakeeee", 1, 5);
console.log(snake1.length)
