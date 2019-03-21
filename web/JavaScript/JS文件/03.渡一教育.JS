// document.write("hello world");

// var a,
//     b,
//     c,
//     d;

// var array = new Array(10);        // 如果构造函数传递的一个值是数值，则会按照该数值创建包含给定项数的数组，
// alert(array[0]);                // 如果是其他类型的参数，则会创建包含那个值的只有一项的数组。

// var colors = new Array(3);
// var names = new Array("Greg");

// // 先看第一表达式转换成布尔值得结果， 如果结果为真，那么它会看第二个表达式转换为布尔值得
// // 结果，然后如果只有两个表达式的话，只看看到第二个表达式，就可以返回该表达式的值了。
// var a = null && 5;     // undefined  null  ""  NoN  0  false   =  fasle                 短路语句
// console.log(a);

// var a = 0 || false || 1;
// console.log(a);


// div.onclik=function(e){

//     var event= e||window.event;
// }

// var a=1232.4567898;
// document.write(a.toFixed(3));           // 固定的值。四舍五入

// // 高内聚，低耦合

// function theFirstName(){

// }

// var test=function abc(){        // 函数表达式
//     document.write('a');
// }

// var demo=function (){           // 匿名函数表达式
//     document.write("吴美英");
// }

// //  形式参数
// function meimei(a,b){
//     return a+b;
// }

// // 实参
// var sum=meimei(10,20);


// function number(numbers){
//     var str=numbers+"";
//     var result="";
//     for(var i=str.length-1;i>=0;i--)
//     {
//         result+=str[i];
//     }
//     console.log(result);
// }
// var abc=123456
// number(abc);

var n = parseInt(prompt("请输入你要显示的斐波那契数的下标"));
var first = 1;
var second = 1;
var third;

function result(a) {
    third = first + second;
    first = second;
    console.log((first) + "   ");
    second = third;
    console.log((second) + "   ");

    console.log((third) + "   ");    
    if (n == 2) {
        return;
    }
    return result(n - 1);
}

result(n);