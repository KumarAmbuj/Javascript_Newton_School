let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
  console.log(result); //1
  return result * 2;
});

promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

promise.then(function (result) {
  console.log(result); // 1
  return result * 2;
});

const pr = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(200), 10);
});

pr.then(function (result) {
  console.log("1=>", result); // 200 correct
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 1), 5000);
  });
})
  .then(function (result) {
    console.log("2=>", result); // 200
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log("3=>", result); // 400
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(result * 2), 1000);
    });
  })
  .catch((error) => {
    console.log("4=>", error); //  404 error
  });
