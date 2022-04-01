"use strict";
// 使用class 关键字来定义一个类
/*
*  对象中主要包含了两个部分
*    属性
*   方法
* */
class Person {
    constructor() {
        /*
        *   直接定义 的 属性是实例属性，需要通过对象的实例去访问
        *   const per = new Person();
        *   per.name
        *
        *   使用static 开头的属性是静态属性（类属性），可以直接通过类去访问
        *    Person.age:number = 18
        *
        *    readonly 开头的属性表示一个只读的属性无法修改
        *
        * */
        /*
        *   定义实例属性（new 出实例之后才能访问属性）
        *
        * */
        this.name = 'caroline';
        this.age = 18;
        this.gender = 'male';
    }
    /*
    *     定义方法，如果方法以static 开头则方法就是类方法，可以直接通过类去调用
    *
    * */
    // 实例方法
    sayHi() {
        console.log('hi!');
    }
    //    类方法
    static sayHi() {
        console.log('hi!');
    }
}
Person.addr = 'gd';
/*
*   创建实例
* */
const per = new Person();
/* 属性 */
// 访问实例属性
console.log(per);
console.log(per.name, per.age);
// 访问静态（类）属性
console.log(Person.addr);
// 如果是 readonly 类型，则无法修改
// per.gender = 'female'  报错
/*  方法 */
// 访问实例方法
per.sayHi();
// 访问静态方法
Person.sayHi();
