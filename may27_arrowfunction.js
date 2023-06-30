console.log("Arrow function");

//defininig
var arrowFunction = ()=>{
    console.log("this is arrow function");
};

//calling
arrowFunction();


var arrowFunction1 = (message)=>{
    console.log(message);
};

//calling
arrowFunction1("this is arrow function with argument");

console.log("*************normal function***************");

var normalFunction = function(){
      console.log("normal function");
};

normalFunction();


var normalFunction1 = function(message){
    //console.log(message);
    console.log(typeof arguments);
};

normalFunction1("hey this is normal function with argument");

var normalFunction2 = function(message){
    //console.log(message);
    //console.log(arguments);
    console.log(typeof arguments);
};

normalFunction2("hey this is normal function with argument and there is one more keyword arguments");


 



