"use strict";
(function () {
    // 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类中的属性和方法
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log('动物在叫');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 调用父类的构造函数
            super(name);
            this.age = age;
        }
        sayHi() {
            //    在类的方法中，super就表示当前类的父类
            super.sayHi();
            console.log('汪汪汪~~');
        }
    }
    const dog = new Dog('旺财', 3);
    dog.sayHi();
})();
