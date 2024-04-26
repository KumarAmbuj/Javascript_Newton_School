const pr1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("Pr1 resolved");
  }, 1000);
});

const pr2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("pr2 rejected");
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

Promise.myallSettled = function (promises) {
  // here promises params is the type of array
  const resultPromise = [];
  return new Promise((resolved, rejected) => {
    promises.forEach((promise, index) => {
      if (typeof promise?.then == "function") {
        promise
          .then((result) => {
            // somewhere i need to store
            resultPromise.push({ status: "fullFilled", reason: result });
          })
          .catch((error) => {
            resultPromise.push({ status: "rejected", reason: error });
          });
      } else {
        resultPromise.push({ status: "fullFilled", reason: promise });
      }
      if (index === promises.length - 1) {
        resolved(resultPromise);
      }
    });
  });
};

const promise = Promise.allSettled([pr1, pr2, pr3, pr4, pr5]);
promise
  .then((result) => {
    console.log(result);
  })
  .catch((val) => {
    console.log(val);
  });
console.log("hello");
