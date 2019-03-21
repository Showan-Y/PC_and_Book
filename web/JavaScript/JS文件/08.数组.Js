/**
 *  数组 Array
 * 
 * 封装 type 方法
 */
// var ary = [12,2,3,,,,,5,8];         //  稀松数组

var arr = [1, 2, 3];

/*
Array.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];               //      arr调用 push。  this 指向 数组
    }
    return this.length;
}

Array .prototype.pop = function(){

}

*/


/**
 *  1.必须写两形参
 *  2  看返回值 1)  当返回值为负数时，那么前面的数放在前面
 *              2)  为正数， 那么后面的数在前
 *              3)   为0， 不要动
 */



var arr1 = [1, 3, 5, 4, 10, 11];         //      sort 默认按照 Ascll码排序
arr1.sort(function (a, b) {
    // if (a > b) {
    //     return -1;
    // }
    // else{
    //     return 1;
    // }    

    //return a - b;       //  降序
    //return a - b;         //    升序

})


/*
//  给一个有序的数组乱序

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2.sort(function () {
    return Math.random() - 0.5;
})

*/

/*
function result(str) {
    var num = str.length
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) < 255) {
            num++;
        }
    }
}

*/



/**
 *  类数组
 *  1  利用属性名模拟数组的特性
 *  2 可以动态增长数组的长度
 *  3 如果数组强行调用push方法，则会根据length的属性值的位置进行属性的扩充
 * 
 *  4 属性要为索引(数字)属性，必须有length属性，最好加上push好处
 */

/*
   类数组
function test(){
   console.log(arguments);        
}

test(1,2,5,8,6);
*/

/*
var obj = {
    "0": "a",
    "1": "b",
    "2": "c",
    "length": 3,
    "push": Array.prototype.push,
    "splice": Array.prototype.splice
}

Array.prototype.push = function (target) {
    obj[obj.length] = target;
    obj.length++;
}
*/


var obj = {
    "2":"a",
    "3":"b",
    "length":2,
    "push":Array.prototype.push
}
obj.push('c');
obj.push('d');








