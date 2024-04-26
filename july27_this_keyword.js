// console.log("this keyword");

// const employee123 = {
//   name: "Vishal",
//   lastName: "Sharma",
//   printName: function () {
//     // this =>employee123
//     const innerFunction = () => {
//       console.log("innerFunction", this); // ?? employee123
//     };
//     innerFunction();
//     function normalInnerFunction() {
//       console.log("normalInnerFunction", this); // ?? window
//     }
//     normalInnerFunction();
//     return this.name + this.lastName;
//   },
// };

//const fullName1 = employee123.printName(); // method invocation
//console.log(fullName1); //?
const students = {
  name: "Vishal",
  lastName: "Sharma",
  college: "Newton",
  printCollegeName: () => {
    console.log("a", this.college); //
  },
  printName: function () {
    console.log("1==>", this.name, this.lastName); //
    function Func1() {
      console.log("2==>", this.name);
      function func2() {
        console.log("3==>", this.name); //
        const fun3 = () => {
          console.log("4==>", this.name); //
        };
        fun3();
      }
      func2();
    }
    Func1();
  },
};

students.printName();
students.printCollegeName();
