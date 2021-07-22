const player = {
  name: "Allen  Iverson",
  [Symbol("birthday")]: "1975/06/07",
};
Object.defineProperties(player, {
  isHallofFame: {
    enumerable: false,
    value: true,
  },
  [Symbol("ScoreKingTime")]: {
    enumerable: false,
    value: 4,
  },
});
Object.defineProperties(player.__proto__, {
  university: {
    enumerable: true,
    value: "Georgetown",
  },
  team: {
    enumerable: false,
    value: "76ers",
  },
  [Symbol("country")]: {
    enumerable: true,
    value: "USA",
  },
  [Symbol("hometown")]: {
    enumerable: false,
    value: "Virginia",
  },
});

console.log("打印自身可枚举类型: ", player);
console.log("打印原型中的可枚举类型: ", player.__proto__);

console.log("\n --- for...in... --- ");
console.log("包含自身以及原型上所有可以枚举的类型，不包含 Symbol 类型");
for (const name in player) {
  console.log(name);
}
console.log(
  "包含自身所有可以枚举的类型，不包含 Symbol 类型和原型上的可枚举类型"
);
for (const name in player) {
  if (Object.prototype.hasOwnProperty.call(player, name)) {
    console.log(name);
  }
}

console.log("\n --- Object.keys --- ");
console.log("包含自身所有可以枚举的类型，不包含 Symbol 类型和原型上的任何属性");
const keys = Object.keys(player);
console.log(keys);

console.log("\n --- Object.getOwnPropertyNames --- ");
console.log(
  "包含自身所有可枚举，不可枚举属性，但不包含 Symbol 类型和原型上的任何属性"
);
const ownPropertyNames = Object.getOwnPropertyNames(player);
console.log("ownPropertyNames:", ownPropertyNames);

console.log("\n --- Object.getOwnPropertySymbols --- ");
console.log(
  "包含自身所有 Symbol 属性，包括不可枚举的，但不包含原型上的任何属性"
);
const ownPropertySymbols = Object.getOwnPropertySymbols(player);
console.log("ownPropertySymbols:", ownPropertySymbols);

console.log("\n --- Reflect.ownKeys ---");
console.log(
  "包含自身所有属性，包含 Symbol 和所有不可枚举的类型，不包含原型上的任何属性"
);
const ownKeys = Reflect.ownKeys(player);
console.log("ownKeys:", ownKeys);

console.log("\n --- Object.values ---");
console.log("包含自身所有可枚举属性值，不包含 Symbol 属性和原型上的任何属性");
const values = Object.values(player);
console.log("values:", values);

console.log("\n --- Object.entries ---");
console.log(
  "包含自身所有可枚举属性 Key-Value，不包含 Symbol 属性和原型上的任何属性"
);
const entries = Object.entries(player);
console.log("entries:", entries);
