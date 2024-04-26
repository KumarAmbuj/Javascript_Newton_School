// // function Animal(name) {
// //     this.name = name;
// //    }

// //    Animal.prototype.getName = function() {
// //     return this.name;
// //    }

// //    const cat = new Animal("Fluffy");

// //    console.log(cat.getName());

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function fun(val, index, array) {
//   console.log(val);
// }

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };
// arr.myForEach(fun);

// function mapCallback(val, index, arr) {
//   return val * 3;
// }

// Array.prototype.myMap = function (callback) {
//   let newarr = [];
//   for (let i = 0; i < this.length; i++) {
//     newarr.push(callback(this[i], i, this));
//   }
//   return newarr;
// };
// let narr = arr.myMap(mapCallback);
// console.log(narr);

// function filterCallback(val, index, arr) {
//   return val.a > 5 ? true : false;
// }

// Array.prototype.myFilter = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// let arr1 = [
//   { a: 2, b: 5 },
//   { a: 3, b: 2 },
//   { a: 8, b: 7 },
//   { a: 33, b: 1 },
//   { a: 23, b: 17 },
//   { a: 8, b: 19 },
// ];

// let narr1 = arr1.myFilter(filterCallback);
// console.log(narr1);

// function reduceCallback(acc, val, index, arr) {
//   return acc + val;
// }

// Array.prototype.myReduce = function (callback, acc) {
//   for (let i = 0; i < this.length; i++) {
//     acc = callback(acc, this[i], i, this);
//   }
//   return acc;
// };

// let val = arr.myReduce(reduceCallback, 0);
// console.log(val);

// Function.prototype.myCall = function (obj, ...args) {
//   obj.func = this;
//   obj.func(...args);
// };

// Function.prototype.myApply = function (obj, args) {
//   obj.func = this;
//   obj.func(...args);
// };

// Function.prototype.myBind = function (obj, ...args1) {
//   const func = this;
//   return function () {
//     func.call(obj, 2, 4);
//   };
// };

// const obj = { name: "ambuj", age: "23" };

// function printName(a, b) {
//   console.log(this.name, this.age, a, b);
// }

// function printNameApply(a, b, c, d) {
//   console.log(this.name, this.age, a, b, c, d);
// }

// printName.call(obj, 2, 5);
// printName.myCall(obj, 2, 5);

// printNameApply.myApply(obj, [1, 2, 3, 5]);

// let func = printName.bind(obj, 2, 3);
// func();

// console.log("********");
// const func1 = printName.myBind(obj, 2, 3);
// func1();

Promise.myAll = function (promises) {
  let promiseArray = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index, arr) => {
      promise
        .then((result) => {
          promiseArray.push(result);
          if (index === arr.length - 1) {
            resolve(promiseArray);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

Promise.myAllSettled = function (promises) {
  let promiseArray = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index, arr) => {
      promise
        .then((result) => {
          promiseArray.push({ status: "fullfilled", value: result });
          if (index === arr.length - 1) {
            resolve(promiseArray);
          }
        })
        .catch((error) => {
          promiseArray.push({ status: "rejected", value: error });
          if (index === arr.length - 1) {
            resolve(promiseArray);
          }
        });
    });
  });
};

const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is resolved at 0 second");
  }, 0);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is resolved at 1 second");
  }, 1000);
});

const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is resolved at 2 second");
  }, 2000);
});

const pr4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("this is reject at 4 second");
  }, 4000);
});
// const pr5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("this is reject at 5 second");
//   }, 5000);
// });

// const prom = Promise.all([pr1, pr2, pr3, pr4]);
// prom
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//console.log("my all");

// let promi = Promise.myAll([pr1, pr2, pr3, pr4]);
// promi
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let promiseAllSettled = Promise.allSettled([pr1, pr2, pr3, pr4]);
// promiseAllSettled
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("my all settled");
let promiseAllSettled1 = Promise.myAllSettled([pr1, pr2, pr3, pr4]);
promiseAllSettled1
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
