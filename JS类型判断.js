//JS类型判断
//原文: https://www.jianshu.com/p/1452cc324455

// Typeof
console.log( "typeof 123: " ,typeof 123)
console.log( "typeof '123': " ,typeof '123')
console.log( "typeof true: " ,typeof true)
console.log( "typeof undefined: " ,typeof undefined)
console.log( "typeof null: " ,typeof null) //返回bject
console.log( "typeof function() {}: " ,typeof function() {})
console.log( "typeof {}: " ,typeof {})
console.log( "typeof []: " ,typeof [])

//Instance Of
console.log("123 instanceof Number: ", 123 instanceof Number)
console.log("'123'  instanceof String: ", '123'  instanceof String)
//下面两个会报错 (Instance Of 不能判断undefined和null)
// console.log("undefined instanceof undefined: ", undefined instanceof undefined)
// console.log("null instanceof null: ", null instanceof null)
console.log("[] instanceof Array: ", [] instanceof Array)
console.log("{} instanceof Object: ", {} instanceof Object)
console.log("function(){} instanceof Function", function(){} instanceof Function)

//Object.prototype.toString() --返回字符串类型
console.log("Object.prototype.toString({})", Object.prototype.toString({}))
console.log("Object.prototype.toString.call({})", Object.prototype.toString.call({}))
console.log("Object.prototype.toString.call([])", Object.prototype.toString.call([]))
console.log("Object.prototype.toString.call(true)", Object.prototype.toString.call(true))
console.log("Object.prototype.toString.call(true)", Object.prototype.toString.call(true))
console.log("Object.prototype.toString.call(null)", Object.prototype.toString.call(null))
console.log("Object.prototype.toString.call(undefined)", Object.prototype.toString.call(undefined))
console.log("Object.prototype.toString.call(function(){})", Object.prototype.toString.call(function(){}))
console.log("Object.prototype.toString.call('122')", Object.prototype.toString.call('122'))
console.log("Object.prototype.toString.call(123)", Object.prototype.toString.call(123))
console.log("Object.prototype.toString.call(Symbol(1))", Object.prototype.toString.call(Symbol(1)))
// console.log("Object.prototype.toString.call(document)", Object.prototype.toString.call(document))
// console.log("Object.prototype.toString.call(window)", Object.prototype.toString.call(window))

//整合方法
function getType(value) {
    //普通数据类型由typeof 来判断
  if (typeof value !== "object") return typeof value;
  var type = Object.prototype.toString.call(value);
  console.log("Type: ", type)
  return type.slice(8, type.length - 1).toLowerCase();
}

console.log("整合方法: ",getType(null))

