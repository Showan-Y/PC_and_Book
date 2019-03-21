/**
 *          原型
 * 1.定义：原型是 function 对象的一个属性，它定义了构造函数
 * 制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承
 * 该原型的属性和方法。原型也是对象
 * 
 * 2.利用原型的特点和概念，可以提取共有属性。
 * 
 * 3.对象如何查看原型 ---> 隐士属性 _proto_
 * 
 * 4.对象如何查看对象的构造函数 ---->  constructor
 */


 /**
  *     Call 和 Apply 
  *   改变 this 指向，参数列表不同
  * 
  */

// Person.prototype = {
//     name : 'quitt'
// }
// function Person(){
//     /**
//      * var this = {     //  可以经过修改
//      *  _proto_ : Person
//      * 
//      * }     
//      * 
//      */
// }
// var obj = {
//     name : 'sunny'
// }

// var person = new Person();


/*
Grand.prototype.lastName = 'quitt';
function Grand(){

}
var grand = new Grand(); 

Father.prototype = grand;
function Father(){

}
var father = new Father();

Son.prototype = father;
function Son(){

}
var son = new Son();
*/


/*
Person.prototype = {
    name: 'a',
    sayName: function () {
        console.log(this.name);
    }
}
function Person() {

}
var person = new Person();
*/


Person.prototype = {
    toString : function (){
        return 'hehehhe';           //  方法重写
    }
}
function Person(){

}
var person = new Person();