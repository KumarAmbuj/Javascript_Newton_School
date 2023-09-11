//const promiseObject = new Promise((resolved, reject) => {
//    setTimeout(() => {
//      resolved("Success");
//    }, 5000);
//  });
//  promiseObject
//    .then((value) => {
//      console.log(value);
//    })
//    .catch((error) => {
//      console.log("error", error);
//    })
//    .finally(() => {
//      console.log("HEY I WILL CALL ALWAYS");
//    });
//  


const promiseObject1 = new Promise((resolved, reject) => {
    setTimeout(() => {
      reject("OOPS ERROR!!");
    }, 5000);
  });
  //console.log("promiseObject1", promiseObject1);
  //promiseObject1
  //  .then((value) => {
  //    console.log(value);
  //  })
  //  .catch((error) => {
  //    console.log("error", error);
  //  })
  //  .finally(() => {
  //    console.log("this will call always");
  //  });
  
  
  function callbackFunc1(value) {
    // any code
    console.log("run if promise success");
  }
  function callbackfun2(error) {
    // any code
    console.log("run if promise rejected");
  }
  
  function callbackfun3() {
    console.log("run evcerytim");
  }
  promiseObject1.then(callbackFunc1).catch(callbackfun2).finally(callbackfun3);