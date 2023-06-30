console.log("find pollyfills");
function func(x,val){
    return x===val;
}

var arr=[1,2,3,4,5,5,5,6,7,8,9,10];
function myfind(arr,value,callback){
    var ans=-1;
    for(var x in  arr){
        if(callback(arr[x],value)){
            ans=x;
            break;
        }
    }
    return ans;

}

console.log(myfind(arr,5,func));
console.log(myfind(arr,14,func));

