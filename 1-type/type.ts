/*1.变量类型声明和初始化*/
let a: number;
 a = 10;
 a = 33;
 // a = 'hello'; 报错，变量 a 类型为 number

 let b: string
b = 'hello';
 // b = 123;

// 声明变量的同时直接进行赋值，TS 可以自动对变量进行检测
let c: boolean = false;
c = true;

/*2. 函数声明*/
// // js 中的函数是不考虑参数的类型和个数的
// function sum(a,b) {
//     return a + b;
// }
// console.log(sum(123, 456)) // 579
// console.log(sum(123, "456"))  // 123456

function sum(a:number, b:number) {
    return a + b;
}

// let res = sum(123,'456') // 报错

/* 3. 字面量声明*/
// 下面的语句相当于定义了一个 a3 常量;
let a3: 10;
// a3 = 11 尝试将 a3 赋值为 11 ，报错；


/* 4. 联合类型*/
let b4:"male" | "female";
b4 = "male";
b4 = "female";

/* 5.组合类型*/
// & 表示同时满足的类型
let a5:{name:string} & {age:number};
a5 = {name:'jack',age:18}

/* 6.其他常见基本类型（number，string，bool之外）*/
/* 6.1 any*/
// any表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了 TS 的类型检测
// 使用 TS 时，强烈建议不要使用 any 类型
// let d:any

// 声明变量如果不指定类型，则 TS 解析器会自动判断变量的类型为 any(隐式的 any)
let a61;
a61 = 10;
a61 = 'hello';
a61 = true;

/* 6.2 unknown*/

let a62:unknown;
a62 = 10;
a62 = 'hello';
a62 = true;

/* 6.2.2 unknown*/

let s:string = 'hello';
// a61 的类型是 any,它可以赋值给任意变量
// any 赋值给其他变量时，TS 也会同时关闭对那个赋值变量的类型检查！
s = a61;

// aa62 的类型 是unknown, 实际上就是一个类型安全的 any
// unknown 类型的变量，不能直接赋值给其他变量
if(typeof a62 === 'string') {
    s = a62;
}

/* 6.3 void*/

// void 用来表示空，主要用于函数中
// 以函数为例，表示没有返回值的函数；
function fn():void {

}


/* 6.4 undefined*/

// never 表示永远也不会返回结果（连undefined 都没有）[较少用]
// 下面函数没有返回值（连undefined 都没有）
function fn2():never {
    throw new Error('error')
}

/* 6.5 object*/
// object 表示一个js对象类型
let a65:object;
a65 = {};
a65 = function(){}

// {} 用来指定对象中可以包含哪些属性
// 语法：
// {属性名：属性值，属性名：属性值}
// 在属性名后边加上 ? ，表示该属性是可选的
let b65:{name:string,age?:number};
b65 = {name: 'haha'};
b65 = {name: 'jack',age: 18}


// [propName:string]:any 表示任意类型的属性
// 所以下面定义了一个必须包含 name 属性，其他属性随意的类型
let c65: {name: string,[propName:string]:any}
c65 = {name:'rose',age:18,gender:'male'}

/* 6.5.2 函数对象*/
/*
*  涉资函数结构的类型声明：
*     语法：（形参：类型，形参：类型...） => 返回值
* */

let d65:(a:number,b:number) => number;
// 声明了类型之后，在定义时可以不再指出类型
d65 = function(n1,n2) {
    return n1 + n2;
}

// 也可以指出类型
d65 = function(n1:number,n2:number):number {
    return n1 + n2;
}
d65 = function(n1:number):number{
    return n1;
}

// 定义错误例子
// d65 = function(n1:string,n2:number):number{
//     return n1 + n2;
// }

// d65 = function(n1:number,n2:number,n3:number):number{
//     return n1 + n2 +n3;
// }

/* 6.6 数组*/
/*
*  数组的类型声明：
*      类型[]
*       Array<类型>
*
*
* */
// 例如：string[]表示字符串数组
let e66:string[];
e66 = ['a','b','c'];

// number[] 表示数值型数组
let g66:number[];
g66 = [1,2,3];

// 也可以使用下面的声明方式
let t77:Array<number>
t77 = [1,2,3]

/*
*  6.7 元组
*
*   元组，就是固定长度的数组
*       语法：[类型,类型，类型]
*    相比于数组，元组的性能更高一些
* */
let a67:[string,number];
a67 = ['hello', 123];


/*
*  6.8 枚举
*
* */
enum Gender {
    Male,
    Female
}

let a68:{name:string,gender:Gender};
a68 = {
    name: 'hello',
    gender: Gender.Male
}
console.log(a68.gender === Gender.Male);


/*
*  7. 类型别名
*
* */
// 使用关键字type
type myType = 1 | 2 | 3 | 4 | 5;
let k:myType;
let l:myType;
let m:myType;

k = 2;
// k = 6 error !

/*
*  8. 类型断言  用来帮助编译器判断变量的实际类型
*
*      语法：
*         变量 as 类型
*         <类型>变量
* */


// 有些情况下，变量的类型对于我们来说是很明确，但是 TS 编译器并不清除
// 此时，可以通过类型断言来告诉编译器变量的类型
// 断言 有两种类型
// 1. 变量 as 类型
let someVal: unknown = 'this is a string';
let strLength:number = (someVal as string).length

// 2. <类型>变量
let strLength2:number = (<string>someVal).length;
