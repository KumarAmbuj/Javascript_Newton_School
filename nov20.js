// const arr = [1, 2, 3];

// console.log(arr);

// const obj = { a: 40 };
// console.log(obj);

// console.log(typeof arr);
// console.log(typeof obj);

// console.log(Array.isArray(arr));

// console.log(arr.toString());

// arr.unshift(34);
// console.log(arr);

// let x = arr.shift();
// console.log(arr);

// //join means converts arr to string

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let ans = arr1.join("*");
// console.log(ans);

// //
// //splice
// const a = [1, 2, 3, 4, 5, 6];

// const b = a.splice(2, 0, "a", "b");
// console.log(b);
// console.log(a);

// //forEach

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(b);
// function callback(val, index, arr) {
//   console.log(val, index);
// }

//b.forEach(callback);

// b.forEach((val, index, arr) => {
//   console.log(val, index);

// });

//map
//always returns an array
// it is used for modification of array

// const c = b.map((val, index, arr) => {
//   //console.log(val);
//   return val * 2;
// });

// console.log(c);

// const arr = [{ a: 40 }, { a: 40 }, { a: 50 }];

// const newarr = arr.map((val, index, arr) => {
//   //val["a"] = val["a"] / 2;
//   val.a = val.a / 2;
//   return val;
// });
// console.log(newarr);

//reduce
// reduce to single data

//higher order function
//first argument callback function
//second argument accumulator
// function callback1(acc, val, index, arr) {
//   return acc + val;
// }
// let x = b.reduce(callback1, 0);

// console.log(x);

// const a = [
//   { name: "A", salary: 40000 },
//   { name: "b", salary: 30000 },
//   { name: "c", salary: 20000 },
//   { name: "d", salary: 10000 },
//   { name: "d", salary: 30000 },
//   { name: "d", salary: 9000 },
//   { name: "d", salary: 1345 },
// ];

// function callback(acc, val) {
//   return acc + val.salary;
// }
// let ans = a.reduce(callback, 0);

// console.log(ans);

//filter
//higher order functio
// first argument callback function
// always returns an array

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newarr1 = arr1.filter((val, index, arr) => {
//   return val % 2 == 1;
// });
// console.log(newarr1);

// const a = [
//   { name: "A", salary: 40000 },
//   { name: "b", salary: 30003 },
//   { name: "c", salary: 20001 },
//   { name: "d", salary: 10000 },
//   { name: "e", salary: 30000 },
//   { name: "f", salary: 9000 },
//   { name: "g", salary: 1345 },
// ];

// let newarr3 = a.filter((val) => {
//   return val.salary % 2 == 0;
// });
// console.log(newarr3);
//22-03-1992
//sorting

// let d = [100, 9, 2, 45, 1000, 4, 10000];
// // let f = d.sort((a, b) => parseInt(a) - parseInt(b));
// let g = d.sort((a, b) => {
//   return b - a;
// });
// console.log(g);

// kal ka timing batao ?? fix matlb fix 5 mtlb mainsamjhta hoon 5
// kal pollyfill karenge

// mere ko sach me nhi pata tha tumhara js sahi nhi hai
// var a = 1;
// console.log(b)
// let b = 2;
let abc = 5;
// console.log(this.a, this.b);
function xyzz() {
  let abc = 5;
  console.log(this.abc);
}
xyzz();

const x = {
  abc: 10,
  fn: function () {
    const a = () => {
      console.log(this.abc);
    };
    a();
  },
};
x.fn();
