//console.log("array every some");
//const arr=[1,2,3,4,5,5,6,7,9];
//
//const ans=arr.every((val,index,arr)=>{
//    return val>0;
//});
//console.log(ans);
//
//
//const ans1=arr.every((val,index,arr)=>{
//    return val>3;
//});
//console.log(ans1);
//
//
//console.log("some function in array");
//const arr1=[1,2,3,4,5,5,6,7,9];
//
//const ans2=arr1.some((val,index,arr)=>{
//    return val>7;
//});
//console.log(ans2);
//
//
//const ans3=arr1.some((val,index,arr)=>{
//    return val>90;
//});
//console.log(ans3);


const arr=[1,2,3,4,5,6,7,8,9];
const ans=findsum(arr,fun,0);
console.log(ans);

function findsum(arr,callback,acc){
    for(x of arr){
        acc=callback(x,acc);
    }
    return acc;
}
function fun(x,acc){
    return x+acc;
}