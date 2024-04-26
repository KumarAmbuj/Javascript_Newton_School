//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function callback(acc, val, index, arr) {
//   return acc + val;
// }

// Array.prototype.MyReduce = function (call, acc) {
//   let arr = this;
//   //let initial = acc;
//   for (let i = 0; i < arr.length; i++) {
//     acc = call(acc, arr[i], i, arr);
//   }
//   return acc;
// };

// const value = arr.MyReduce(callback, 0);
// console.log(value);

// let XObj = { xValue: 6 };
// Array.prototype.myMap = function (callback, obj) {
//   let newarr = [];
//   for (let i = 0; i < this.length; i++) {
//     newarr.push(callback.call(XObj, this[i], i, this));
//   }
//   return newarr;
// };
// function fun(val, index, arr) {
//   return this.xValue * val;
// }

// let arr1 = [1, 2, 3, 4, 5];
// let newarr = arr1.myMap(fun, XObj);

// console.log(newarr);

// let obj = { name: "ambuj" };

// function A() {
//   console.log(this.name);
// }
// A.call(obj);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function fun(val, index, arr) {
//   console.log(val);
// }

arr.forEach((val, index, arr) => {
  console.log(val);
});

let newarr = arr.map((val, index, arr) => {
  const obj = {};
  obj[index] = val;
  return obj;
});
console.log(newarr);
