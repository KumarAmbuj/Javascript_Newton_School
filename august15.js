
//for(var i=0;i<=5;i++){
//    setTimeout(()=>{
//        
//        console.log(i);
//    },0)
//}
//
//
//for(let i=0;i<=5;i++){
//    setTimeout(()=>{
//        console.log(i);
//    },0)
//}


//method 1
//const fun=(a)=>{
//    console.log(a);
//}
//for(var i=0;i<=5;i++){
//    let a=i;
//    setTimeout(()=>{
//        fun(a);
//    });
//}
//method 2

//for(var i=0;i<=5;i++){
//    let a=i;
//    setTimeout(()=>{
//        console.log(a);
//    });
//}

//method 3

for(var i=0;i<=5;i++){
    callMe(i)
    function callMe(a){
    setTimeout(()=>{
        console.log(a);
    });
}
}



