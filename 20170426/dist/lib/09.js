"use strict";

var _slicedToArray = function () {
    function sliceIterator(arr, i) {
        var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;_e = err;
        } finally {
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }return _arr;
    }return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
}();

/**
 * Created by sks on 2017/4/26.
 */

// var [x,y]=getVal(),//函数返回值的解构
//     [name,,age]=['zf','male','secrect'];//数组解构

// function getVal() {
//     return [ 1, 2 ];
// }

// console.log('x:'+x+', y:'+y);//输出：x:1, y:2
// console.log('name:'+name+', age:'+age);//输出： name:zf, age:secrect


// 数组的解构赋值
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo); // 1
// console.log(bar); // 2
// console.log(baz); // 3

// 对象的解构赋值
var _foo$bar = { foo: "aaa", bar: "bbb" },
    foo = _foo$bar.foo,
    bar = _foo$bar.bar;

console.log(foo); // "aaa"
console.log(bar); // "bbb"

// 字符串的解构赋值

var _hello = 'hello',
    _hello2 = _slicedToArray(_hello, 5),
    a = _hello2[0],
    b = _hello2[1],
    c = _hello2[2],
    d = _hello2[3],
    e = _hello2[4];

console.log(a + b + c + e); // 'hello'
//# sourceMappingURL=09.js.map