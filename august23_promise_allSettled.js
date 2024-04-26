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
const promise = Promise.allSettled([pr1, pr2, pr3, pr4]);

promise
  .then((result) => {
    console.log("inside then", result);
  })
  .catch((error) => {
    console.log("inside catch", error);
  });
