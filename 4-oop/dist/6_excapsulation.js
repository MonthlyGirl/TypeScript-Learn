"use strict";
(function () {
    // 定义一个表示 人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
        *  getter 方法用来读取属性
        *  setting 方法用来设置属性
        *          它们被称为属性的存取器
        *
        * */
        //    定义方法，用来获取 name 属性
        getName() {
            return this._name;
        }
        //    定义方法，用来设置 name 属性
        setName(val) {
            this._name = val;
        }
        getAge() {
            return this._age;
        }
        setAge(val) {
            if (val >= 0) {
                this._age = val;
            }
        }
    }
    const per = new Person('rose', 15);
    /*
    *  现在属性是在对象中设置的，属性可以任意的被修改
    *    属性可以任意被修改将会导致对象中的数据变得非常不安全
    *
    *
    * */
    // per.name = 'jack';
    // per.age = 19;
    // console.log(per);
    /*
    *  protected
    * */
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(121);
    // B.num = 33
    /*
    *  可以直接将属性定义在构造函数中
    * 下面两个构造函数方法效果是一样的~
    *
    * */
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class C1 {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
        }
    }
    const c = new C('xxx', 111);
    console.log(c);
})();
