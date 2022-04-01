# TypeScript 中的基本类型
TypeScript中的基本类型：
 - 类型声明
   - 类型声明是TS非常重要的一个特点
   - 通过类型声明可以指定TS中变量（参数、形参）的类型
   - 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则则报错
   - 简言之，类型声明给变量设置了 类型，使得变量只能存储某只类型的值
   - 语法：
      + ```js

          let 变量 : 类型;

          let 变量 : 类型 = 值;

          function fn(参数: 类型, 参数: 类型): 类型 {
            ...
          }
        ```
 - 自动类型判断
    + TS 拥有自动的类型判断机制
    + 当对变量的声明和赋值是同时进行的，TS 编译器会自动判断变量的类型
    + 所以如果 变量的声明和赋值是同时进行的，可以省略类型声明
 - 类型
   | 类型      | 例子 | 描述    |
   | :---        |    :----:   |          ----: |
   | number | 1,22，-3,4.5 | 任意数字 |
   | string | 'hi', 'hahaha'| 任意字符串 |
   | boolean | true false |  布尔值 true or false |
   | any | * | 任意类型 | 
   | unknown | * | 类型安全的any |
   | void |  空值（undefined）| 没有值（或undefined） |
   | never | 没有值 |  不能是任何值 |
   |  object | {name: 'hhh',} | 任意的js对象|
   | array |  [1,2,3] | 任意的js数组 |
   | tuple | [4,5] | 元素，TS 新增类型，固定长度数组 |
   | enum | enum{A,B} | 枚举，TS中新增的类型 | 

 - number
    - ```js
      let decimal: number = 6;
      let hex: number = 0xff00d;
      let binary: number =0b1010;
      let octal: number = 0o744;
      let big: bigint = 100n;

 - boolean
    - ```js
       let isNumber: boolean = true;
 
 - string
    -  ```js
       let color: string = "pink";
       color = "blue";
       let fullName: string = "BELLA LI";
       let age: number = 18;
       let sentence: bigint = `hallo, my name is ${fullName}.
       I'LL be ${age + 1} years old next month;`
 - 字面量
   - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围
   - ```js
      let color : 'red' | 'blue' | 'pink';
      let num: 1 | 2 | 3 | 4 | 5 |;

 - any 
   -  ```js
       let d: any = 4;
       d = 'halo';
       d = true
 
 - unknown
   -  ```js
      let notSure: void = undefined;

 - void
   -  ```js
      let unusable: void = undefined;

 - never
   -  ```js
      function error(message: string): never {
          throw new Error(message);
      }

- object
   - ```js
      let obj: object = {};
     
- array 
    - ```js
      let list: number[] = [1, 2, 3, 4];
      let list: Array<number> = [1, 2, 3, 4];

- tuple
   - ```js
      let x: [string, number];
      X = ['hello', 10]

- enum
   - ```js
        enum Color = {
          Red,
          Green,
          Blue
        }

        let c: Color = Color.Green

        enum Color = {
            Red = 1,
            Green,
            Blue
        }
        let c: Color = Color.Green

        enum Color = {
            Red = 1,
            Green = 2,
            Blue = 4
        }
        let c: Color = Color.Green

- 类型断言
   - 有些情况下，变量的类型对于我们来说是很明确，但是TS 编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：
      - 第一种
        - ```js
          let someVal: unknown = 'this is a string';
          let strLen: number = (someVal as string).length;

      - 第二种
        - ```js
          let someVal: unknown = 'this is a string';
          let strLen: number = (<string>someVal).length;
          

   


     