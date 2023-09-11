function multiply(a){
    return function (b){
        return function (c){
            return a*b*c;
        }
    }
}
console.log(multiply(2)(3)(5));


// infinte currying

function fun(a){
    return function (b){
        if(b){
            return fun(a+b);
        }
        return a;
    
    }
}

console.log(fun(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());


// with operator


let op="+";
function fun1(a){

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

console.log(fun(1)("+")(3)(7)(5)("*")(5)(8)(7)("-")(5)(4)("/")(4471)())
