## todoList 相关知识点
    1. 拆分组件，实现静态组件，注意className style的写法
    2. 动态初始化列表，如何确定将数据放在哪个组件的state中
        某个组件使用：放在自身的state中
        某些组件使用：放在他们共同的父组件state中
    3. 关于父子之间通信
        1）父组件给子组件传递数据：通过props的方式
        2）子组件给父组件传递数据：通过props传递，要求父组件提前给子传递一个函数
    4. 注意defaultChecked和checked的区别，类似的还有defaultValue和value
    5. 状态在哪里，操作状态的方法就在哪里