console.log('hello');

//const student={
//    fname:"Ambuj",
//    city:'Ranchi',
//
//};

//console.log(student.fname);
//console.log(student['fname']);
//
//console.log(student.city);
//console.log(student['city']);

//deleting the key\

//delete student.fname;
//console.log(student);

//delete student['city'];
//console.log(student);

//adding key dynamically

//student.state="Jharkhand";
//student['pin']='834005';
//
//console.log(student);


//shorthand property

//let fname="Ambuj";
//let marks=90;
//const obj={fname,marks};
//
//
//console.log(obj);


//const student1={
//    const:40,
//    let:"50",
//    "number of objects":"3",
//}
//console.log(student1);

// creating function inside object
const employee={
    firstNmae:"Chim",
    lastName:"Rim",
    getFullName:function(){
        return this.firstNmae+" "+this.lastName;
    },
    salary:300000,
    increment:30,
    getIncrementSalary:function(){
        console.log(this);
        return (this.salary*this.increment)/100+this.salary;
    },
}

console.log(employee.getFullName());
console.log(employee.getIncrementSalary());
