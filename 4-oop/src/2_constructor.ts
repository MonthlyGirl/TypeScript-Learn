class Dog {
    name:string;
    age:number;

    // constructor 被称为构造函数
    // 构造函数会在对象创建时调用
    // TS 中仅能创建一个构造函数!
   constructor(name:string,age:number) {
       this.name = name;
       this.age = age;
   }
   bark() {
       // 在方法中可以通过 this 来表示当前调用方法的对象
       console.log(this.name)
   }
}

const dog = new Dog('旺财', 1);
const dog2 = new Dog('大黄',1);

console.log(dog);
console.log(dog2);

dog2.bark();
