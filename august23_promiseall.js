// const p1 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     resolved("P1 fulfilled");
//   }, 5000);
// });

// const p2 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     resolved("p2 fulfilled");
//   }, 1000);
// });

// const p3 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     resolved("p3 fulfilled");
//   }, 2000);
// });

// const p4 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     resolved("p4 fulfilled");
//   }, 5000);
// });
// const array = Promise.all([p1, p2, p3, p4]);

// // // if all promise is fullfilled than it will give you the result of all promise in array else it will  return the value of first rejected promise

// // //console.log(array, "promise.all"); pending because all the promise takes time to aither resolve or reject

// array
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("error::", error);
//   });

// if any rejeced
const pr1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("Pr1 resolved");
  }, 1000);
});

const pr2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("pr2 resolved");
  }, 2000);
});

const pr3 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("pr3 resolved");
  }, 3000);
});

const pr4 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("pr4 rejected");
  }, 4000);
});

const pr5 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("pr4 rejected");
  }, 5000);
});
const promise = Promise.all([pr1, pr2, pr3, pr4, pr5]);

// if all promise is fullfilled than it will give you the result of all promise in array else it will  return the value of first rejected promis
//console.log(promise, "promise.all");

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("error::", error);
  });

// // api1 , api2 , api3 , api4
//
// const res1 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     resolved("res1 resolved");
//   }, 1000);
// });
//
// const res2 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     rejected("res2 rejected");
//   }, 2000);
// });
//
// // const pr3 = new Promise((resolved, rejected) => {
// //   setTimeout(() => {
// //     rejected("pr3 rejected");
// //   }, 2000);
// // });
//
// // const pr4 = new Promise((resolved, rejected) => {
// //   setTimeout(() => {
// //     rejected("pr4 rejected");
// //   }, 5000);
// // });
//
//
//   // pr1 => fullfilled
//   // result.push(pr1value)
//   // // pr2 => fullfilled
//   // // result.push(pr2value)
//   // return result
//
//
//

// if we pass array of values instead of array of promises, then it will be solved in then and it wont throw any error

// const array = Promise.all([1, 2, 3, 4]);
// array
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((val) => {
//     console.log(val);
//   });
