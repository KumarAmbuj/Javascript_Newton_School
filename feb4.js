// console.log("hello");
// //synchronous

// console.log(1);
// console.log(2);

// //asynchrnous

// //micro task queue

// //setTimeout(callback function, time)

// let id = setTimeout(() => {
//   console.log("inside set time out");
// }, 2000);

// setTimeout(() => {
//   clearTimeout(id);
// }, 2001);

// console.log(3);
// console.log(4);

//setInterval

// two argument
// first call back function
// second time
// let x = 0;
// function callback() {
//   x++;
//   console.log("inside time out " + x);
//   if (x > 5) {
//     clearInterval(id);
//   }
// }
// var id = setInterval(callback, 1500);

// print A B C D in interval of 1 second

// setTimeout(() => {
//   console.log("AAAAAAAAAAA");
// }, 0);

// setTimeout(() => {
//   console.log("BBBBBBBBBB");
// }, 1000);

// setTimeout(() => {
//   console.log("CCCCCCCCCCCCCCCC");
// }, 2000);

// setTimeout(() => {
//   console.log("DDDDDDDDDD");
// }, 3000);

// callback hell
setTimeout(() => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
      }, 1000);
    }, 1000);
  }, 1000);
}, 0);

// to resolve callback hell they introduce promises
