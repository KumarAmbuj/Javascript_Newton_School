console.log('function');
console.log(isNaN("12"));
console.log(isNaN(""));
console.log(isNaN("   "));
console.log(isNaN("12kkkk"));
console.log(isNaN("k333"));

console.log("****************");

function isNumber(value) {
    if (isNaN(value)) {
      return false;
    } else if (value) {
      return true;
    } else {
      return false;
    }
  }


console.log(isNumber("hello"));//false
console.log(isNumber("")); // false
console.log(isNumber("hello"))//false
console.log(isNumber(1234));//true

console.log(isNumber("       "));//false
console.log(isNumber('1233'));//false



