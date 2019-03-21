//  对象的创建方法
/*
1. var obj = {} plainObject 对象字面量 / 对象直接量

2.  构造函数
    1) 系统自带的构造函数  new Object()
    2)  自定义      参数才能使一个函数发生变化 。变为自定义的环节

*/

/*
function Car() {
    // var this={};
    this.name = "BMW";
    this.height = "1400";
    this.lang = "4900";
    this.weight = 1000;




    //  return this;        
}
//    new Car()时就会加上  隐示加上  this 
*/


/*
function ident(name, height) {
    //var that = {};
    this.Name = name;
    this.Height = height;
    //return that;
    return 1232;        // 如果用了 new 构造函数的话。return 必须返回一个对象值(function number string ...)   不能是原始值

}
var person = new ident("xiaowang", 180);
var person2 = new ident("xiaowang", 180);
*/

/*
var num = new Number(1222);   //  xxx类型的对象

*/

/*
var num = 4;
num.len=3;    //  = new Number(4).len=3;  delete


console.log(num);   // = new Number(4).len

*/

/*
var str = "abcd";
str.length = 2;
// new String('abcd').length = 2; delte;

//  new String('abcd').length
console.log(str.length);
*/


var str = "abc";
str += 1;
var test = typeof (str);    // test == "string"
if (test.length == 6) {
    test.sign = "typeof的返回结果可能为String";

}

// new String(test).sign

console.log(test.sign);



// var arr=new Array();

console.log(typeof (arr));




var x = 1;              

if (function abc(){}) {

    x += typeof abc;
}

console.log(x);

//  1undefined

