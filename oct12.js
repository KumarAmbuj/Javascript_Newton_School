//setTimeout(() => {
//  console.log("A");
//}, 1000);
//
//setTimeout(() => {
//  console.log("B");
//}, 2000);
//
//setTimeout(() => {
//  console.log("C");
//}, 3000);

//setTimeout(()=>{
//    console.log("A");
//    setTimeout(()=>{
//        console.log("B");
//        setTimeout(()=>{
//            console.log("C")
//        },1000)
//    },1000)
//},1000)

//function fun(){
//    console.log("heyyy");
//}
//
//function fun2(){
//    this.fun=function(){
//        console.log("hiiiiiiiii");
//    }
//}
//fun();
//const a=new fun2();
//a.fun();

//function fun1() {
//  console.log("fun1");
//}
//function fun2() {
//  console.log("fun2");
//}
//
//function funnnn(callback1, callback2) {
//  callback1();
//  callback2();
//}
//function fun(callback) {
//  callback(fun1, fun2);
//}
//
//fun(funnnn);

//const promise = new Promise((resolve, reject) => {
//  resolve("hi");
//});
//
//console.log(promise);
//const promise1 = new Promise((resolve, reject) => {
//  reject("hi");
//});

//console.log(promise1);

//console.log("hiiii");

//const promise3 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve("resolved after 2sec");
//  }, 2000);
//});
//
////console.log(promise3);
////setTimeout(() => {
////  console.log(promise3);
////}, 2004);
//
//const promise4 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    reject("rejected after 2sec");
//  }, 2000);
//});
//console.log(promise4);

//const promise5 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve("heyyyy this is resolved");
//  }, 2000);
//});
//
//promise5.then((value) => {
//  console.log(value);
//});

//const promise6 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    reject("heyyyy this is rejected");
//  }, 3000);
//});
//
//promise6.catch((value) => {
//  console.log(value);
//});

//const a = 3;
//const promise7 = new Promise((resolve, reject) => {
//  if (a === 2) {
//    setTimeout(() => {
//      resolve("hey this is resolved after 2 sec");
//    }, 2000);
//  } else {
//    setTimeout(() => {
//      reject("hey this is reject after 3 sec");
//    }, 3000);
//  }
//});
//
//promise7
//  .then((value) => {
//    console.log(value);
//  })
//  .catch((value) => {
//    console.log(value);
//  });

//const a = 3;
//const promise8 = new Promise((resolve, reject) => {
//  if (a === 3) {
//    setTimeout(() => {
//      resolve("hey this is resolved after 2 sec");
//    }, 2000);
//  } else {
//    setTimeout(() => {
//      reject("hey this is reject after 3 sec");
//    }, 3000);
//  }
//});
//
//promise8
//  .then((value) => {
//    console.log(value);
//  })
//  .catch((value) => {
//    console.log(value);
//  })
//  .finally(() => {
//    console.log("hey this is finally");
//  });

// promise chaining

//then-> then
//catch-> catch
//finally not possible

//const promise9 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve("hey this is resolved");
//  }, 1000);
//});
//promise9
//  .then((value) => {
//    console.log(value);
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        resolve(value + " aaaaaaaaaaaa");
//      }, 1000);
//    });
//  })
//  .then((value) => {
//    console.log(value);
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        resolve(value + " bbbbbbbbb");
//      }, 1000);
//    });
//  })
//  .then((value) => {
//    console.log(value);
//  });

//const promise10 = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve("A");
//  }, 1000);
//});
//
//promise10
//  .then((value) => {
//    console.log(value);
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        resolve("B");
//      }, 1000);
//    });
//  })
//  .then((value) => {
//    console.log(value);
//    return new Promise((resolve, reject) => {
//      setTimeout(() => {
//        resolve("C");
//      }, 1000);
//    });
//  })
//  .then((value) => {
//    console.log(value);
//  });
////const obj={x:9}
//
//function Constructor() {
//  this.x = 9;
//
//}
//
//const a = new Constructor();
//console.log(typeof a);

//fetch

//const res = fetch("https://dummyjson.com/products");
//res
//  .then((value) => {
//    console.log(value);
//  })
//  .catch((value) => {
//    console.log(value);
//  });
//
//console.log("hi");

//const res = fetch("https://dummyjson.com/products");
//res
//  .then((value) => {
//    console.log(value);
//    return value.json();
//  })
//  .then((value) => {
//    console.log(value);
//  });

//async and await

//async function findresult() {
//  console.log("start");
//  let response = await fetch("https://dummyjson.com/products");
//  let data = await response.json();
//  console.log("res", response);
//  console.log("data", data);
//
//  console.log("end");
//}
//findresult();

async function getData() {
  //loader active
  console.log("loader active");
  let response = await fetch("https://dummyjson.com/products/categories");
  let data = await response.json();
  console.log("loader inactive");

  console.log(data);
}
getData();
