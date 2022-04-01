(function(){
    // 定义一个表示 人的类
    class Person {
        // TS 可以在属性千添加属性的修饰符
        /*
        *  public 修饰的属性可以在任意位置访问（修改）默认值
        *  private 私有属性，私有属性只能在类内部进行访问（修改）
        *          通过在类中添加方法使得私有属性可以被外部访问
        * protected 受保护的属性，只能在当前类喝当前子类中访问（修改——
        *
        *
        * */

        private _name:string;
        private _age:number;

        constructor(name:string,age:number) {
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
        setName(val:string) {
            this._name = val
        }

        getAge() {
            return this._age;
        }

        setAge(val:number) {
            if(val >= 0) {
                this._age = val
            }
        }

    //     TS 中设置 getter 方法的方式
    //    此时再使用 per.name 时，实际上时调用了 get name()方法
    //     get name() {
    //         console.log("get name()执行了");
    //         return this._name;
    //     }
    //    TS 中设置 setter 方法的方式
    //    此时在使用 per.name = xxx 时，实际上是调用 set name()方法
    //     set name (val) {
    //         this._name = val;
    //     }

        // get age() {
        //     return this._age;
        // }

        // set age(val) {
        //     this._age = val
        // }
    }

    const per = new Person('rose',15);

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
        protected num:number;
        constructor(num:number) {
            this.num = num;
        }
    }
    class B extends A {
        test () {
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
        name:string;
        age:number;

        constructor(name:string,age:number) {
            this.name = name;
            this.age = age;
        }
    }

    class C1 {
        // 可以直接将属性定义在构造函数中
        constructor(public name:string,age:number) {

        }
    }

    const c = new C ('xxx',111);
    console.log(c)
})()
