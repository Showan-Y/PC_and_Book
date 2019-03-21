//  立即执行函数    执行完后，立马销毁
//  针对初始化功能的函数
//  可以有返回值
//    (function (){}()); W3C 建议第一种
//    (function (){})();
//     只有表达式才能被执行符号执行
//     函数执行完后，内存释放
//     执行一次，立即销毁。


//  document.write("hello world");

// var num = (function faster(a, b, c) {
//     //document.write("hello world");
//     a = 1;
//     b = 2;
//     c = 3;
//     return a * b * c;
// }())

// alert(num);


// var result = function (){
//     console.log("i'm quitt");
// }();
// console.log(result);

/*
+ function test() {
    console.log("i'm not quitt");
}();*/

// 阿里面试题
/*自我认为,可能报错                        -function test(a, b, c, d) {
                                                 console.log(a + b + c + d);                                                         
                                              } (1, 2, 3, 4);*/
/*系统认为 */

// function test(a,b,c,d){
//     console.log(a+b+c+d);
// }

// (1,2,3,4);                                        


a = 100;
function demo(e) {
    function e() { }
    arguments[0] = 2;
    console.log(e);
    if (a) {
        var b = 145;
        function c() {
            console.log("hello world");
        };
        c();
    }
    var c;
    a = 10;
    var a;
    console.log(a);
    console.log(b);
    f = 123;
    console.log(c);
    console.log(a);
}
var a;
demo(1);
console.log(a);
console.log(f);
