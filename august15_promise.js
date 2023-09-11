const promise = new Promise((resolve, reject) => {
  if (2 === 2) {
    resolve("Success");
    console.log("heyyyyyy");
  } else {
    reject("Failure");
  }
});
console.log(promise);

const promise1 = new Promise((resolve, reject) => {
  if (2 != 2) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});
console.log(promise1);
