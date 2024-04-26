// console.log(a);
// const a = 10;

console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN("Hello")); // true (can't be converted to a number)
console.log(isNaN(undefined)); // true (can't be converted to a number)
console.log(isNaN(null)); // false (null is treated as 0)
console.log(isNaN(true)); // false (true is treated as 1)
console.log(isNaN(false));

console.log(Number("2dd"));
console.log(parseFloat("30.3"));
console.log("*********");
//console.log({ a: 20 } === { a: 20 });
const a = { a: 30 };
const b = a;
console.log(a === b);

console.log("*********");
console.log(isNaN(" aa"));

console.log("*********");

console.log(d);

if (true) {
  var d = 20;
  console.log(d);
}

console.log("*********");
function fun() {
  let p = (q = r = 30);
  console.log(p);
}
fun();
console.log(q);
console.log(r);
