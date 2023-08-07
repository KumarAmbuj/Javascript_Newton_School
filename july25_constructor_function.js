console.log("constructor function");


function Employee(name, city, salary) {
    this.name = name;
    this.city = city;
    this.salary = salary;
  }
  
  // const employee2 = Employee(); normal function called
  const employee = new Employee("Vishal", "Bangalore", 100); // here invoking the function using new keyword
  const employe2 = new Employee("Tim", "Bangalore", 450000);
  
  //console.log("employee", employee, employe2);

function F(){}

  var o = new F();
console.log(o.constructor === F);
  