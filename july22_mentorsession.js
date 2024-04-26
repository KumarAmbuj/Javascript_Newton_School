const person = { name: "John", age: 30 };
const copy = Object.assign({}, person);
copy.age = 40;
console.log(person.age);
console.log(copy.age);
