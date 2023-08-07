console.log('hello');

//const newtonStudents = ["Tim", "Tom", "Chim", "Chom"];
//
//const deepCopy = [...newtonStudents];
//deepCopy.push("deepak");
//console.log(deepCopy, "print deep copy details");
//console.log(newtonStudents, " after deep copy original  array");
//
//// shallow copy
//const newtonStudentsShallowCopy = newtonStudents;
//
//newtonStudentsShallowCopy.push("Rim");
//
//console.log(newtonStudentsShallowCopy, "Shallow copy");
//console.log(newtonStudents, " after shallow copy original  array");


const user = {
    name: "Vishal",
    id: "64wsdcsbssdd",
  };
  // passing null
  const obj12 = Object.create(null); // this will create new object
  obj12.name = "Vishal";
  console.log(obj12);
  // passing existing object
  
  const obj123 = Object.create(user); // THIS WILLL CREATE A DEEP COPY OBJECT
  
  console.log(obj123);
  
  console.log(obj123.name);
  
  obj123.college = "LPU";
  
  console.log(obj123, user);
  console.log(obj123, user, " checlking whether shallow copy or deep copy");
  
  console.log(" obj123 this object is created using Object.create", obj123);
  