// Write a ploffill for below given function

// call
// bind
// apply
// map
// filter
// reduce
// Promise.all
// Promise.allSettled

function callMe() {
    console.log("hey I am function");
  }
  
  // if i create any function i can access call bind and apply this in any functionm
  
  // Function.prototype.mycall = function () {
  
  // };
  
  // Array.prototype.myFilter = function  () {
  
  // }
  
  // String.prototype.myFilter = function  () {
  
  // }
  // Object.prototype.myFilter = function  () {
  
  // }
  
  // Number.prototype.myFilter = function  () {
  
  // }
  function Employee(name) {
    this.name = name;
  }
  Employee.prototype.printData = function () {
    console.log("hey just demo");
  };
  
  const emp1 = new Employee("Vishal1");
  const emp2 = new Employee("Vishal2");
  const emp3 = new Employee("Vishal3");
  emp1.printData();
  emp2.printData();
  emp3.printData()

  
