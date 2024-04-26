function getEmployeeSalary(variable, tds) {
  console.log(this, variable, tds);
}

const emp1 = {
  firstName: "Vishal",
  increment: "30%",
  salary: 10000,
};
const emp2 = {
  firstName: "Timo",
  increment: "10%",
  salary: 100000,
};
const emp3 = {
  firstName: "Rimo",
  increment: "20%",
  salary: 200000,
};
getEmployeeSalary.call(emp1, 400000, 30);
getEmployeeSalary.apply(emp1, [400000, 300]);
getEmployeeSalary.call(emp1, 20000, 30);
getEmployeeSalary.apply(emp1, [300000, 30]);

let obj = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

let greet = obj.greet;
greet();
greet.call(obj);
