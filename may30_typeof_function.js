console.log("heloooooooooooo");
//immediately invoked function
(
    function callmeonce(){
        console.log("immediately invoked function");
    }
)();


(
    function callmeonce(message){
        console.log(message);
    }
)('hey this immediately invoked function with parameter');



const data=(
    function callonce(){
        console.log("call me once function returning somethimg");
        return 234;
    }
)();
console.log(data);

const data1=(
    function callonce(){
        console.log("call me once function returning nothimg");
        
    }
)();
console.log(data1);

//callonce function using arrow function
(
    ()=>{
        console.log("call me once function using arrow function");
    }
)();


const function1 = () => {
    console.log("function1");
  }
  function function2() {
    console.log("function2");
  }
  (
    function1
  )();// this will give you erro
  (
    function2
  )();

  // iife function with parameter

  (
    function callmeonce(message){
        console.log(message);
    }
)('hey this immediately invoked function with parameter');

(
    (a,b,c)=>{
        console.log(a,b,c);
    }
)(2,3,4);
