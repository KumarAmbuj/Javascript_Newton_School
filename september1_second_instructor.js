//function Person(name, mobile) {
//  this.name = name;
//  this.mobile = mobile;
//}
//Person.prototype.myfun = function () {
//  console.log("hello");
//};
//function Manager(name, mobile, salary) {
//  Person.call(this, name, mobile);
//  this.salary = salary;
//}
//
//const m1 = new Manager("Ambuj", 45678, 5666);
//console.log(m1);
//m1.myfun();

setTimeout(() => {
  console.log("A");
}, 500);

setTimeout(() => {
  console.log("B");
}, 1000);

setTimeout(() => {
  console.log("C");
}, 1500);
setTimeout(() => {
  console.log("D");
}, 2000);
