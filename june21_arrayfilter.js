console.log("array filter");


//const student = undefined;
//const student2 = null;
//const student3 = "";
//const student4 = 0;
//const student5 = false;
//const student6 = "vishal";
//
//// if (student) {
////   console.log(student);
//// }
//
//student && console.log("student2", student);
//student2 && console.log("student2", student2);
//student3 && console.log("student3", student3);
//student4 && console.log("student4", student4);
//student5 && console.log("student5", student5);
//student6 && console.log("student6", student6);
//
//student &&
//  student.forEach(() => {
//    console.log("IT WILL NOT RUN");
//  });
//
//const student7 = [1, 2];
//Array.isArray(student6) &&
//  student6.forEach(() => {
//    console.log("HEY");
//  });
//
//// if(Array.isArray(student7)) {
////   student7.forEach((data) => {
////     console.log("student7", data);
////   });
//// }
//
//Array.isArray(student7) &&
//  student7.forEach((data) => {
//    console.log("student7", data);
//  });
//
//const student8 = {};
//
//student8.forEach(() => {});


//const companyEmployee = [
//    { name: "Vishal", salary: 20000 },
//    { name: "tiro", salary: 100000 },
//    { name: "verr", salary: 30000 },
//    { name: "tom", salary: 200000 },
//    { name: "rim", salary: 10000 },
//    { name: "chim", salary: 30000 },
//  ];
//  
//  companyEmployee[0]; //  { name: "Vishal", salary: 20000 },
//  companyEmployee[0].name; // 'Vishal'
//  
//  let totalSum = 0;
//  const sum = (employee, index, array) => {
//    ///console.log(employee);
//    totalSum = totalSum + employee.salary;
//  };
//  
//  companyEmployee.forEach(sum);
//  
//  //console.log(totalSum);
//  
//  let employeeSum = 0;
//  for (let i = 0; i < companyEmployee.length; i++) {
//    employeeSum = employeeSum + companyEmployee[i].salary;
//  }
//  //console.log(employeeSum);
//  
//  const reduceCallback = (acc, value) => {
//    return acc + value.salary;
//  };
//
//  let totalSalary = companyEmployee.reduce(reduceCallback, 0);
//  console.log(totalSalary);


//const companyEmployee = [
//       { name: "Vishal", salary: 20000 },
//       { name: "tiro", salary: 100000 },
//       { name: "verr", salary: 30000 },
//       { name: "tom", salary: 200000 },
//       { name: "rim", salary: 10000 },
//       { name: "chim", salary: 30000 },
//     ];
//const employeedFinder = (value, index) => {
//    return value.salary === 20000;
//  };
  
  // const selectedEmloyeee = companyEmployee.find((value, index) => {
  //   return value.salary === 20000;
  // });
  
  //const selectedEmloyeee = companyEmployee.find(employeedFinder);
  //console.log(selectedEmloyeee);
//

  //function takeMultipleNumbersAndAdd (...a){
//
  //  let sum=0;
  //  
  //  for(let i=0;i<a.length;i++){
  //  
  //  sum+=a[i];
  //  
  //  }
  //  
  //  return sum;
  //  
  //  }

  const arr=[1,5,3,4,5,6,7,8,5,10];
  const ans=arr.find(func);
  console.log(ans);

  const ans1=arr.find(func1);
  console.log(ans1);



  function func(val,index,arr){
    return val==5;
  }

  function func1(val,index,arr){
    return val==512;
  }