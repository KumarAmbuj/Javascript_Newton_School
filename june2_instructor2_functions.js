console.log("functions");
//function isEven(number){
//    console.log('here');
//}
//isEven();
//console.log(isEven());

//function isEven(number){
//    return number%2===0;
//}
//console.log(isEven(4));//true
//console.log(isEven());//false
//console.log(isEven(3));//false
// same output for == or ===


//var isEven=(number)=>{
//    return number%2===0;
//}
//console.log(isEven(4)); //true
//console.log(isEven());  //false
//console.log(isEven(5)); //false

//var isEven=(number)=>number%2==0;
//console.log(isEven(2)); //true
//console.log(isEven());  //false
//console.log(isEven(5)); //false

//var isEven=(number)=>10;
//console.log(isEven(3)); //10
//console.log(isEven());  //10

//var sample=()=>{
//    return 'sample';
//}
//
//function abcd(){
//    console.log('abcd');
//    function def(){
//        console.log('def');
//    }
//    def();
//    return ()=>{
//        console.log('first');
//        //return 3;
//    }
//}

//console.log(abcd());//it will get a function
//var a=abcd(); //a will get a function
//console.log(a()); // it will print first then undefined as ()=> this function do not returning anything
//but if we retrun 3 it will print 3

//(
//    function iife(){
//        console.log("iife function");
//    }
//)();



var sample=()=>{
    return 'sample';
}
function abcd(){
    console.log('abcd');
    function def(){
        console.log('def');
    }
    def();
    //return sample //this will return function
    return sample(); // this will return output sample

}

console.log(abcd());






