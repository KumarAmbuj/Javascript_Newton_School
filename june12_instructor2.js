console.log("june 12")

function func(){
    let obj={'key1':10, 'key2':20};
    return obj;
}

//const {a,b}=func();
//console.log(a);//undefined
//console.log(b);//undefined

//const {key1,key2}=func();
//console.log(key1);//10
//console.log(key2);//20

//const {key2,key1}=func();
//console.log(key1);//10
//console.log(key2);//20

const {key3,key1,key2}=func();
console.log(key1);//10
console.log(key2);//20
console.log(key3);//undefined


