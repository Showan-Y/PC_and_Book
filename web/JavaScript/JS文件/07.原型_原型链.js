//  构造函数，大坨峰式面命

//  Person.prototype     ----原型
//  Person.prototype = {}   是组先

//  this.谁调用了this就指向谁
/*
Person.prototype.name = "xiaowang";
function Person(per_name) {
    var name = per_name;
}

var person = new Person("xiaowang");

*/


/*  原型链
Grand.prototype.lastName = 'Wang';
function Grand() {

}

var grand = new Grand();

Father.prototype = grand;
function Father() {
    this.name = 'xiaoxiaowang';
    this.fortune = {
        card1: 'student'
    };
    this.num = 100;
}
var father = new Father();

Son.prototype = father;
function Son() {
    this.hobbit = 'smoke';
}
var son = new Son();
*/


//  var obj = Object.create(原型)  

//  create 里面只能放  null 和 Object.

/*
var obj = { name: "sunny", age: 123 };
var obj1 = Object.create(obj);

*/


/* 
Object.prototype.toString = function () {
    return 'hahaha';
}

Person.prototype = {
    toString: function () {        //  系统方法重写
        return 'hehhe';
    }
}

function Person() {

}

var person = new Person();
*/



/*
Number.prototype.toString
String.prototype.toString
Array.prototype.toString
Boolean.prototype.toString
Object.prototype.toString
*/

/*
Number.prototype.toString = function () {
    return '我是小王';
}
var num = 123;
console.log(num.toString());
*/


/*
var obj = Object.create(null);

doucment.write(obj);    =   doucment.write(obj.toString);

*/


/**
 *  
 * 
 *  Call / Apply
 * 改变 this 指向，传参列表不同
 * 
 * 
 * call 需要把实参按照形参的个数传进去
 * apply    只需要传 一 个 arguments //     数组
 * 
 */


/*
function Person(name, age) {
   this.name = name;
   this.age = age;
}

// var person = new Person('deng',100);    

var obj = {   
}   
Person.call(obj,'wang',300);      // 利用别人的方法实现自己的功能

*/
//  个人需求完全涵盖他人需求

//  test()  ---->   test.call();

// eg

/*
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender
}

function Student(name,age,gender,tel,grade){
    
    Person.call(this,name,age,gender);
//    Person.apply(this,[name,age,gender]);
    
    this.tel = tel;
    this.grade = grade;

}



var student = new Student ('sunny',123,'male',139,2017);
*/

/*
abc.prototype.lastName = 'Datou';
function abc() {

}
var a = new abc();

*/

/*
Father.prototype.lastName = 'quitt';
function Father() {
    this.language = 'PHP';
}

function Son() {
}

var father = new Father();
Son.prototype = father;
// Son.prototype = Father.prototype;

var son = new Son();
*/



// 圣杯模式

/*
function inherit(Target, Origin) {
    function f() {
    }

    f.prototype = Origin.prototype;
    Target.prototype = new f();
    Target.prototype.constuctor = Target;
    Target.prototype.uber = Origin.prototype;
}

Father.prototype.lastName = 'quitt';
function Father() {
    this.language = 'PHP';
}

function Son() {
}

inherit(Son, Father);

var son = new Son();
var father = new Father();
*/

//  雅虎模式


/*
var inherit = (function () {
    var f = function () {};
    return function (Target, Origin) {
        f.prototype = Origin.prototype;
        Target.prototype = new f();
        Target.prototype.constuctor = Target;
        Target.prototype.uber = Origin.prototype;
    };
}())
*/



/*
function Wang(name, language) {

    var preparlanguage = "PHP";          // 私有化变量

    this.name = name;
    this.language = language;

    this.noLrean = function () {
        this.language = preparlanguage;
    }
    this.changePrepareLanguage = function (Target) {
        preparlanguage = Target;
    }
    this.sayPreparLanguage = function () {
        console.log(preparlanguage);
    }
}

var wang = new Wang('quitt','C-Sharp');
*/

/*
百度题目
var x = 1, y = z = 0;
function add(n) {
    return n = n + 1;
}

y = add(x);
function add(n) {
    return n = n + 3;
}

z = add(x);

console.log(x);
console.log(y);
console.log(z);
*/



/*
    Alibaba 的题目

    下面console.log结果为[1,2,3,4,5]的是
*/

/*
//  A
function foo(x){
    console.log(arguments);
    return x;
}
foo(1,2,3,4,5);


//B
function foo(x){
    console.log(arguments);
    return x;
}(1,2,3,4,5);
*/



/*
// c
(function foo(x){
    console.log(arguments);
    return x;
})(1,2,3,4,5)


// D
function foo(){bar.apply(null,arguments)};
function bar(x){console.log(arguments)};
foo(1,2,3,4,5);

*/


// var f=(
//     function f(){
//         return '2';
//     },
//     function g(){
//         return 2;
//     }
// )();

// console.log(typeof(f));


// if (undefined == null) {
//     console.log("hello world");
// }
// else {
//     console.log("No");
// }



// if (isNaN("100")) {
//     console.log("hello world");
// }
// else {
//     console.log("No");
// }


/*
var foo = '123';
function print() {
    var foo = '456';
    this.foo = '789';
    console.log(foo);
}

print();
*/


/*
var name = '123';
var a = {
    name: '123',
    say:function (){
        console.log(this.name);
    }
}

var fun = a.say;
fun()           // 111
a.say()         // 111
var b = {
    name : "333",
    say:function (fun){
        fun();
    }
}
b.say(a.say);           //  123
b.say = a.say;
b.say();    //333
*/


