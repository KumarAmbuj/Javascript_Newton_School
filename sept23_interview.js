//const myPromise = new Promise((fulffillled, rejected) => {
//    // fullfilled and rejected are the functions
//    fulffillled([{ name: "Vishal" }]);
//    rejected("Hey I am rejected"); // this code will not run
//  });
//
//  console.log(myPromise, "myPromise");

const mp1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    console.log("Hey");
    rejected("After 2 seconds rejected");
    // resolved("After 2 seconds resolved");
  }, 2000);
});

console.log("mp1", mp1); //

// setTimeout(() => {
//   console.log("after 3 seconds mp1", mp1); //
// }, 3000);

// promise chaining then and catch
// then is higher order function which takes two parameter first parameter is function which will be executed if
// promise is resolved
// Second parameter is also function which will execute if promise is rejected
// catch will take one parameter which is function which will be executed if the promise is rejected

const success = (res) => {
  console.log("then catching", res);
};

const error = (error) => {
  console.log("error", error);
};
// mp1.then(success,error);
mp1
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("error::", error);
  });
