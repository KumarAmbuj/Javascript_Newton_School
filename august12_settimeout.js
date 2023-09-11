//console.log('settimeout');
//
//console.log("hey");
//
//let waitingTime = 5000;
//
//const callbackFunc = () => {
//  console.log("I am calling after", waitingTime, "ms");
//};
//setTimeout(callbackFunc, waitingTime);
//
//console.log("code after setTimeOut");
function fun(){
    console.log("hello after some time");
}

function mytimeout(callback,time){
    const t= Date.now();
    while(Date.now()<t+time){

    }
    callback();
}

mytimeout(fun,5000);