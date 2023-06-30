console.log("rest operator");

function restOperator(a,...d){
    console.log("variable ",a);
    console.log("array ",d);
    d.push("hi");
}

restOperator(1,2,3,4,"Kumar","Ambuj","hello");

var arr=[1,2,3,4];
console.log(arr);//it will print like [1,2,3,4]
console.log(...arr);// it will print like spreading the element like 1 2 3 4

function Chimpangee(a, b, c, d,e) {
    console.log("spread", a, b, c, d);
    console.log(a * b * c * d ); // NaN
    console.log(a*b*c*d*e);
  }
  
  Chimpangee(...arr); //it will take array element as a single single variable input