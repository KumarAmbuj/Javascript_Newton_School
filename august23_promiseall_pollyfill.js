console.log("hello");

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("dekh bhai  resolved p1");
  }, 1000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("dekh bhai resolve p2");
  }, 2000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("dekh bhai reject p3");
  }, 3000);
});

const p4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("dekh bhai resolve p4");
  }, 3000);
});

/// myall
//Promise.myall = function (promises) {
//  // here promises params is the type of array
//  const resultPromise = [];
//  return new Promise((resolved, rejected) => {
//    promises.forEach((promise, index) => {
//      promise
//        .then((result) => {
//          // somewhere i need to store
//          resultPromise.push(result);
//          if (index === promises.length - 1) {
//            resolved(resultPromise);
//          }
//        })
//        .catch((error) => {
//          rejected(error);
//        });
//      //else {
//      //resultPromise.push(promise);
//      //if (index === promises.length - 1) {
//      //  resolved(resultPromise);
//      //}
//      //}
//    });
//  });
//};
//
//const checker = Promise.myall([p1, p2, p3, p4]);
//
//checker
//  .then((result) => {
//    console.log("checker", result);
//  })
//  .catch((error) => {
//    console.log(error);
//  });
//

// for handling all edge cases
Promise.myall = function (promises) {
  // here promises params is the type of array
  const resultPromise = [];
  return new Promise((resolved, rejected) => {
    promises.forEach((promise, index) => {
      if (typeof promise?.then == "function") {
        promise
          .then((result) => {
            // somewhere i need to store
            resultPromise.push(result);
            if (index === promises.length - 1) {
              resolved(resultPromise);
            }
          })
          .catch((error) => {
            rejected(error);
          });
      } else {
        resultPromise.push(promise);
        if (index === promises.length - 1) {
          resolved(resultPromise);
        }
      }
    });
  });
};

const checker = Promise.myall([p1, p2, p3, p4]);

checker
  .then((result) => {
    console.log("checker", result);
  })
  .catch((error) => {
    console.log(error);
  });

const checker1 = Promise.myall([1, "two", "3", "ambuj"]);

checker1
  .then((result) => {
    console.log("checker", result);
  })
  .catch((error) => {
    console.log(error);
  });
