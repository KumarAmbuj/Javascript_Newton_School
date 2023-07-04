console.log("hello");

let arr=[{key:'a',value:20},{key:'b',value:20}];

function callback(acc,val){
    
    const {key,value}=val;
    acc[key]=value;
    
    return acc;
}

let arr2=arr.reduce(callback,{});
console.log(arr2);
