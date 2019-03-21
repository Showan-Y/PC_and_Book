/*
    对象的创建方法
    1。var obj = {}     plainObject    对象字面量/对象直接量
    2.构造函数
            1） 系统自带的构造函数  new Object();
            2)  自定义

    大驼峰命名规则            
*/



/*
var wang = {
    name: 'quitt',
    age: 20,
    gender: 'male',
    health: 100,
    drink: function () {
        console.log('i am drinking');
        this.health--;
    },
    read: function () {
        console.log('i am reading');
        this.health++;
    }
}

delete wang.name;


function abc(){
    console.log()
}
*/


/*
function Car() {
    this.name = 'GTR';
    this.name = '1400';
    this.lang = '4900';
    this.weight = 1000;
    this.health = 100;
    this.run = function () {
        console.log('hello world');
    }
}
*/

/*
var s = new Object();
s.name = 'wang';
*/




/**
 *      构造函数内部原理 
 */

// function Method() {
//     //  var this = {};

//     this.name = 'quitt';
//     this.age = 20;
//     this.gender = 'male';
//     this.drink = function () {
//         console.log('i am drinking');
//     };

//     return this;
//     // return 1232;
//     // return {};       不能返回原始值
// }

// var method = new Method();



/**
 *      包装类
 */



/*
var str = 'abcd';
//  new String('abcd').length = 2;  delete

str.length = 2;
console.log(str.length);
*/


/*
var str = 'abc';
str += 1;
var test = typeof(str);
if(test.length ==6){
    test.sign = 'typeof的返回结果可能为String';
}
console.log(test.sign);
*/

// result of opreta test() and new test() 
/*
var a = 5;
function test(){
    a = 0;
    console.log(a);
    console.log(this.a);
    var a;
    console.log(a);
}

 test();
*/

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





