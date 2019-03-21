/**
 *              继承的发展史
 * 
 * 
 * 1.传统形式 -----> 原型链
 *      过多继承没用的属性
 * 
 * 2.借用构造函数
 *      不能继承借用构造函数的原型
 *      每次构造函数都要多走一个函数
 * 
 * 3，共享原型
 *      不能随便改动自己的原型
 * 
 * 4.圣杯模式
 */


 // 3   Shared Prototype
 /*
Test.prototype.lastName = 'quitt';
function Test() {

}

Test2.prototype = Test.prototype;
function Test2() {

}
var test2 = new Test2();
*/



/*
    圣杯模式
Father.prototype.lastName = 'quitt';
function Father(){
    var gender = 'male';
}

function Son(){

}

function inherit(Target,Origin){
    Target.prototype = Origin.prototype;
}
inherit(Son,Father);

var son = new Son();
var father = new Father();
*/



Father.prototype.lastName = 'quitt';
function Father(){
    this.gender = 'male';
}

function Son(){

}

function inherit(Target,Origin){
    function F(){};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.construct = Target;
}
inherit(Son,Father);

var son = new Son();
var father = new Father();