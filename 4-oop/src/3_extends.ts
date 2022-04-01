(
    function() {
        class Animal {
            name:string;
            age:number;

            constructor(name:string,age:number) {
                this.name = name;
                this.age = age;
            }
            sayHi() {
                console.log('动物在叫~~')
            }
        }
        /*
        *   Dog extends Animal
        *     此时 Animal 被称为父类，Dog被称为子类
        *     使用继承后，子类将会拥有父类所有的方法和属性
        *     通过继承可以将多个类中共有的代码写在一个父类中，
        *         这样只需要写一次即可让所有的子类都同事拥有父类中的属性和方法
        *         如果希望在子类中添加一些父类中没有的属性或方法直接添加即可
        *     如果子类覆盖父类方法的形式，我们称为方法重写
        *
        *
        *
        *
        * */

        class Dog extends Animal {
            run() {
                console.log(`${this.name}在跑~~`);
            }
            sayHi() {
                console.log('汪汪汪')
            }
        }
        class Cat extends Animal {
            sayHi() {
                console.log('喵喵喵')
            }
        }

        const dog = new Dog('旺财',2)
        const cat = new Cat('咪咪', 1)
        console.log(dog);
        dog.sayHi();
        dog.run();
        console.log(cat);
        cat.sayHi();
    }
)()
