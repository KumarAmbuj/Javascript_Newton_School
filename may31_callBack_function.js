console.log("callBack function");

function addThreeNumber(func,c){
    var addthreenumber =func();
    return addthreenumber+c;
}

function addTwonumber(){
    return 20+30;
}
console.log(addThreeNumber(addTwonumber,40));//90

const arrow=()=>{
    return 40+50;
}
//callBack using arrow function
console.log(addThreeNumber(arrow,70));//160

//callBack function using anonymous function

const a=addThreeNumber(()=>{
    return 100+200;
},300);
console.log(a);//600