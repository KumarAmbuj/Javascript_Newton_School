//const call1224 = (callback) => {
//    //     callback  = (a, b) => {
//    //   return a + b;
//    // };
//  
//    return callback(1, 2); // 3
//  };
//  
//  const sum = (a, b) => {
//    return a + b;
//  };
//  
//  // call1224(sum(5, 6)); // call1224(11)
//  
  //const data = call1224(sum); // here i am passing function as a reference , i am not calling the function
  //console.log(data);
  
  // IIF
  
  // The function invoked at the time of declaration
  
  (function IIF() {
    console.log("Hey I am IIf");
  })();
  
  //console.log(IIF()); // this will throw error
  
  
  // (
  //     callme123
  // )() this is not iif becuuse here we are using callme123 which is already declared
  
  (() => {
    console.log("Hey Arrow , iif");
  })();
  
  (function () {
    console.log("Hey I am anonymousx");
  })();