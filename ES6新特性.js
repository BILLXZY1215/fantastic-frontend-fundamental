// ES6 新特性
// 原文： https://www.jianshu.com/p/87008f4f8513

// 模版字变量
const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
}
  
const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
}

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
console.log("模版字变量: ", message);

// 解构
const point = [10, 25, -34];
const [x, y, z] = point;
console.log("解构: ", x, y, z);

const gemstone = {
    type: 'quartz',
    color: 'rose',
    karat: 21.29
};
const {type, color, karat} = gemstone;
console.log("解构对象: ", type, color, karat);

// 对象字面量简写法
let type2 = 'quartz';
let color2 = 'rose';
let carat2 = 21.29;
const gemstone2 = {type2,color2,carat2};
console.log("对象字面量简写法: ", gemstone2);


// 循环
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (const index in digits) {
//   console.log("For...In 循环: ", digits[index]);
// }
for (const digit of digits) {
    // For..Of循环: 不需要知道index
    console.log("For...Of 循环: ", digit);
  }
  

// 展开运算符
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log("展开运算符: ",...books);
const obj = {data:"1", name:"Zeyu", id: "20125831"}
console.log("展开运算符： ", {...obj});

// 箭头函数
const greet = name => `Hello ${name}!`;
console.log("箭头函数: ", greet('Asser'));

//默认值与解构函数
function createSundae({scoops = 1, toppings = ['Hot Fudge']}={}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }
  console.log("默认值与解构函数: ", createSundae({scoops:3, toppings:["A", "B", "C"]}));

// Super & Extend
class Tree {
    constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
      this.size = size;
      this.leaves = leaves;
      this.leafColor = null;
    }
  
    changeSeason(season) {
      this.leafColor = this.leaves[season];
      if (season === 'spring') {
        this.size += 1;
      }
    }
  }
  
  class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves) {
      super(size, leaves); //super用作函数
      this.syrupQty = syrupQty;
    }
  
    changeSeason(season) {
      super.changeSeason(season);//super用作对象
      if (season === 'spring') {
        this.syrupQty += 1;
      }
    }
  
    gatherSyrup() {
      this.syrupQty -= 3;
    }
  }

  var maple = new Maple(10, 100, 100);
  console.log("size: ", maple.size, "syrupQty: ", maple.syrupQty, "leaves", maple.leaves);
  maple.changeSeason('spring');
  console.log("size: ", maple.size, "syrupQty: ", maple.syrupQty, "leaves", maple.leaves);
  maple.gatherSyrup();
  console.log("size: ", maple.size, "syrupQty: ", maple.syrupQty, "leaves", maple.leaves);
