console.log("helloooo");

console.log("classes");

class Employee {
    // this => {}
    constructor(name) {
      this.name = name;
    }
  
    set setNmae(value){
        this.name=value;
    }
    get getName(){
        return this.name;
    }
  }
  
  const emp1 = new Employee("Vishal");
  const emp2 = new Employee("Vishal12", 200000);
  
  //console.log(emp1);
  //console.log("emp2=>", emp2);
  //console.log(typeof Employee); // function

  emp1.setNmae="Ambuj";
  console.log(emp1.getName);