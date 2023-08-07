function multiply(num1,num2){
    if(num2){
        return num1*num2;
    }
    else{
        return function(a){
            return num1*a;
        }
    }
}
console.log(multiply(10,20));

console.log(multiply(4,4));

const double=multiply(2);
console.log(double(10));
console.log(double(30));

