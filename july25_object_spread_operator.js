console.log('spread operatoe');

// employee = {
//   ...employee,
//   user: {
//     ...employee.user,
//     address: {
//       ...employee.user.address,
//       country: {
//         ...employee.user.address.country,
//         state: {
//           ...employee.user.address.country.state,
//           city: {
//             ...employee.user.address.country.state.city,
//             postOffice: {
//               ...employee.user.address.country.state.city.postOffice,
//               pinCode: 560102,
//             },
//           },
//         },
//       },
//     },
//   },
// };
// // employee.user.address.country.state.city.postOffice.pinCode = 560102;

// console.log(employee);

let A = {
    a: 123,
  };
  
  A.b = 2345;
  A["B"] = 234567;
  
  console.log(A);
  // deep copy
  const C = {
    ...A, //  { a: 123}; a:123 , b: 2345 , B: 234567
    operator: "*",
  };
  console.log(C);
  
  // merge two object or multiple object
  
  const studentAdress = {
    city: "Kanpur",
    locality: "Vishnupuri",
    pincode: 208002,
    landmark: "Emerland",
    flatNo: "4/278B-1",
  };
  
  const studentCollegeDetails = {
    college: "Newton School",
    mode: "Online",
    degree: "FSD",
    city: "Bangalore",
  };
  
  const studentDetails = {
    ...studentAdress,
    // Line no 83 code is exactly doing code from 85 to 89
    // city: "Kanpur",
    // locality: "Vishnupuri",
    // pincode: 208002,
    // landmark: "Emerland",
    // flatNo: "4/278B-1",
    ...studentCollegeDetails,
    // Line no 89 code is exactly doing code from 91 to 94
    // college: "Newton School",
    // mode: "Online",
    // degree: "FSD",
    // city: "Bangalore",
  };
  
  //console.log(studentDetails);



  const details={...studentAdress,
    coleege:{...studentCollegeDetails,},
}

console.log(details);