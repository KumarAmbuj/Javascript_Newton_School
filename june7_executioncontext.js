//console.log(a);
//var a = 30;
//
//// console.log(c);
//const c = 30;
//
//function call(a, b, c) {
//  var result = a + b + c;
//
//  console.log("helo0");
//
//  return result;
//}
//
//// console.log(result);
//let result = call(10, 20, 30);
//
//console.log(result);
var x = 10;
function test() {
  if (x > 5) {
    let x = 30;
  }
  console.log(x);
}
test();

console.log("helooo");

let promise = new Promise((resolve, reject) => {
  console.log("inside promise");
  resolve("resolved");
});

console.log("outside promise");

promise.then((res) => {
  console.log(res);
});

console.log("after resolved");
