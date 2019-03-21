// window    就是全局


//   AO (Activation Object 执行期上下文)
// function fn(a) {
//     console.log(a);
//     console.log(b);
//     var a = 123;
//     console.log(a);
//     function a() { }
//     console.log(a);


//     var b = function () { }
//     function d() { }
// }

// fn(1);


// function test(a, b) {
//     console.log(a);
//     c = 0;
//     var c;
//     a = 3;
//     b = 2;
//     console.log(b);
//     // function a(){}
//     function b(){}
//     function d(){}
//     console.log(b);
// }

// test(1);


// function fun(a,b){
//     console.log(b);
//     var a=123;
//     console.log(a);

//     function a(){}
//     function b(){}
//     var b=258;
//     b=function b(){};

//     console.log(b);
// }
// fun(5,4);

/*
Ao{
     b: function b(){};
    a: 123;
    b: function b(){};
}
*/

// console.log(test);

// function test(test) {    
//     console.log(test);
//     var test=24;
//     console.log(test);
//     function test(){}
// }
// test(1);
// var test=123;

// function test() {
//     console.log(b);
//     if (a) {
//         var b = 100;                
//     }
//     console.log(b);
//     c = 234;
//     console.log(c);
// }
// var a;
// test();
// a = 10;
// console.log(c);



// function fun() {
//     f = 111;
// }
// fun();
// console.log(f);

// function bar() {
//     return foo;
//     foo=10;

//     function foo(){

//     }
//     var foo=11;
// }
//console.log(bar());


// console.log(bar());
// function bar() {
//     foo = 10;
//     function foo() {

//     }

//     var foo = 20;
//     return foo;
// }


// var str = false + 1;
// document.write(str);    //  1
// var demo = false == 1;
// document.write(demo);   //  Nan
// if (typeof (a) && -true + (+undefined) + "") {              //  console.log(typeof (a)); 默认是 string类型  "undefined" && (-1+ Nan +"")=("Nan")===true
//     document.write('基础扎实');     
// }
// if (11 + "11" * 2 == 33) {
//     document.write('基础还可以');
// }
// !!"" + !!""-!!false||document.write("嘿嘿");


//  console.log((window.h || (window.h = "bar")));


/*

// 内部函数保存到了外部，一定会形成闭包。
// 闭包会导致原有的作用域链不释放，造成内存泄漏。

function a() {                        
    function b() {
        var bbb = 234;
        document.write(aaa);
    }
    var aaa = 123;
    return b;
}

var glob = 100;
var demo = a();
demo();
*/



/*
function a() {
    var num = 100;
    function b() {
        num++;
        console.log(num);
    }
    return b;
}

var s = a();        s();试一下
s();
s();
*/



/*
贼难
*/

/*
function test() {
    var num = 100;
    function a() {
        num++;
        console.log(num);
    }
    function b() {
        num--;
        console.log(num);
    }
    return [a, b];
}
var myArr = test();
myArr[1]();
myArr[0]();
*/

/*
function eater() {
    var food = "";
    var obj = {
        eat: function () {
            console.log("i am eating" + food);
            food = "";
        },
        push: function (myfood) {
            food = myfood;
        }
    }
    return obj;
}
var eater1 = eater();
eater1.push("Apple");
eater1.eat();
*/



function test() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        (function(j){
            arr[j] = function () {
                console.log(j);
            }
         }(i))
    }
    return arr;    //   最后返回。
}

var myArr = test();
for (var j = 0; j < 10; j++) {
    myArr[j]();
}


/*
var num = (function (a, b) {
    return a + b;
}(1, 2))       //  一个括号是一个立即执行符,  初始化数据
*/

/*
var num = function () {
    console.log("hello world");
}

num();
*/