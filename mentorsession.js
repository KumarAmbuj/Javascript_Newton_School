// console.log('hello');

// //currying

// function fun(a){
//      return function (b){
//         return function (c){
//             return function (d){
//                 return a*b*c*d;
//             }
//         }
//      }
// }

// const val=fun(2)(3)(4)(5);
// console.log(val);


//function fun(a){
//    return (b)=>{
//        if(b){
//            return fun(a+b);
//        }
//        return a;
//    }
//}
//
//console.log(fun(1)(2)(3)(8)());

let op="+";
function fun(a){
    if(a=="+" || a=='-' || a=='*' || a=='/'){
        op=a;
        return fun(0);
    }
    else{

    return (b)=>{
        if(b){
        if(typeof b === 'number'){

            if(op==="+"){
                return fun(a+b);
            }
            else if(op==='-'){
                return fun(a-b);

            }
            else if(op==='*'){
                return fun(a*b);

            }
            else if(op==='/'){
                return fun(a/b);

            }
            
        }
        else{
            op=b;
            return fun(a);

        }
    }
    else{
        return a;
    }
    }
}
}

console.log(fun('+')(1)("+")(3)(7)(5)('*')(4)(7)());

//console.log(fun('+')("+")('*')('/')());

//console.log(fun(1)("/")()());




