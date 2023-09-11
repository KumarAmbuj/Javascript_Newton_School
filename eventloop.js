console.log("start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("resolve");
});
console.log("end");
const promise = new Promise((resolve, reject) => {
  console.log(1);

  setTimeout(() => {
    console.log("timerStart");

    resolve("success"); //

    console.log("timerEnd");
  }, 0);

  console.log(2);
});
promise.then((res) => {
  console.log(res);
});

setTimeout(() => {
  console.log("Are!!");
}, 0);

console.log(4);
