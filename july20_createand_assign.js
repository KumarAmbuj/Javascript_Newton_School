console.log("dekh bhai aaj create and assign padhenge");

const human = {
  place: "earth",
};
human.place = "Moon";

const user = {
  fname: "vishal",
  id: 47,
};

// creation of null object
const obj12 = Object.create(null);
console.log("obj12", obj12);
obj12.fname = "vishal";
console.log("obj12", obj12);

const obj = Object.create(user);
console.log(obj); // o/p {}
console.log(obj.fname); // o/p vishal because it is getting inherited

// // Object.assign

const sourceObject = {
  collegeName: "LPU",
  onlinePortal: "Newton",
};

const targetObject = {};

const resultObject = Object.assign(targetObject, sourceObject);
console.log("aaaaa", targetObject);
console.log(resultObject);

console.log(resultObject === targetObject);
