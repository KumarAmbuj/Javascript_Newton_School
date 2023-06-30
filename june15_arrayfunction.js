//console.log('for each loop');
//const random = [1, 2, 3, "hey", "chill", 5, "relax"];
//
////const call1 = (value, index, array) => {
////  console.log("value=>", value, "index=>", index);
////};
//
//// random.forEach(call1);
//
////random.forEach((value, index, array) => {
////  console.log("value=>", value, "index=>", index);
////});
//const callme=(value,index,array)=>{
//    console.log(value,index,array);
//}
//random.forEach(callme);


//const employee = [40000, 300000, 400000, 23000, 450000, 45000, 600000, 80000];
//
//const modifyEmployeeArray = (value, index, array) => {
//  if (index == 4) {
//    return;
//  }
//  const obj = {
//    salary: value,
//  };
//  return obj;
//};
//const randomwArray = employee.map(modifyEmployeeArray);
//console.log(randomwArray);

//const call=(value,index,arr)=>{
//    if(value%2==0){
//        return {isEven:true};
//    }
//    else{
//        return {isEven:false};
//    }
//}
//const numbers=[3,4,5,6,8,9,10,15,16];
//const numbers2=numbers.map(call);
//console.log(numbers2);

//shift and unshift

const numbers = [3, 4, 5, 6, 8, 9, 10, 15, 16];
// result

// opposite of shift is pop
// shift and unshift in javascript array
// it will use to remove the element of array from starting

//const value = numbers.shift();
//console.log(value, numbers);
//
//// push is use for adding the element at the end
//// unshift is use for adding the element at the initial and return the lenght if modified array
//const updatedLen = numbers.unshift("unshift"); //
//console.log("updatedArray", updatedLen);

function findvalue(val){
    return val%2==1;
}
function customfunction(arr,callback){
    var newarr=[];

    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            newarr.push(arr[i]);
        }
    }
    return newarr;

}

var arr=[2,3,5,8,9,10,19];
var newarr=customfunction(arr,findvalue);
console.log(newarr);