/* 
    直接通过类调用的属性和方法称为静态属性和静态方法

*/

class Myclass {

    /* 
        使用static开头的属性和方法就是静态属性和静态方法
    */
    name = "haha"
    /* 
        静态方法this不是实例对象而是当前的类对象
    */
    fn = () => {
        console.log("func")
    }
}