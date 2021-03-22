//JS柯里化
//原文: https://www.jianshu.com/p/2975c25e4d71

// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}
console.log("柯里化实例: ")
console.log("add(1, 2)=== curryingAdd(1)(2): ",add(1, 2)=== curryingAdd(1)(2))

//Currying的好处:
//1. 参数复用

// 正常正则验证字符串 reg.test(txt)

// 函数封装后
function check(reg, txt) {
    return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// Currying后
function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false

console.log("参数复用: ")
console.log("check(/\d+/g, 'test1') === hasNumber('test1'): ", check(/\d+/g, 'test1') === hasNumber('test1'))
console.log("check(/[a-z]+/g, 'testtest') === hasNumber('testtest'): ", check(/[a-z]+/g, 'testtest') === hasNumber('testtest'))
console.log("check(/[a-z]+/g, '21212') === hasLetter('21212'): ", check(/[a-z]+/g, '21212') === hasLetter('21212'))

//2. 提前确认
// var on = function(element, event, handler) {
//     if (document.addEventListener) {
//         if (element && event && handler) {
//             element.addEventListener(event, handler, false);
//         }
//     } else {
//         if (element && event && handler) {
//             element.attachEvent('on' + event, handler);
//         }
//     }
// }

// var on = (function() {
//     if (document.addEventListener) {
//         return function(element, event, handler) {
//             if (element && event && handler) {
//                 element.addEventListener(event, handler, false);
//             }
//         };
//     } else {
//         return function(element, event, handler) {
//             if (element && event && handler) {
//                 element.attachEvent('on' + event, handler);
//             }
//         };
//     }
// })();

// //换一种写法可能比较好理解一点，上面就是把isSupport这个参数给先确定下来了
// var on = function(isSupport, element, event, handler) {
//     isSupport = isSupport || document.addEventListener;
//     if (isSupport) {
//         return element.addEventListener(event, handler, false);
//     } else {
//         return element.attachEvent('on' + event, handler);
//     }
// }


//3. 延迟运行
Function.prototype.bind = function (context) {
    var _this = this
    var args = Array.prototype.slice.call(arguments, 1)
 
    return function() {
        return _this.apply(context, args)
    }
}