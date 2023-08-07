// The value __proto__ should not be value apart from null and Object;
//There should not  be cyclic chaining
// Every object have only one protoype

// __proto__  setter or getter  // deprceated

// Object.getPrototypeOf(args1); // it will have one parameter, it will return the protoype for the parameter // getter
// Object.setPrototypeOf(args1 , args2); // it will have two parameter where first is object where we need to set proto and second is protoype object



const stud = {
  college: "Newton",
  city: "Remote",
};

const stud1 = {
  name: "Vishal Sharma",
};

// we want to set the stud as a protoype object for stud1 (stud1=> child , stud=>parent)

Object.setPrototypeOf(stud1, stud);

console.log("stud1", Object.getPrototypeOf(stud1));

//console.log(Object.getPrototypeOf(stud));

console.log(stud1.college);