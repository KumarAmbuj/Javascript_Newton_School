const array = [1234];
const array1 = [1234, 12];
// we are adding property to the Array prototype
Array.prototype.printWithMessage = function () {
  console.log("Hey I am print, with message");
};
array.printWithMessage();
const a = [];
//console.log(a);

Array.prototype.cityOfDeviPurnima = "Chhatisgarh";

const array123 = ["devi"];

console.log(array123);
console.log(array123.cityOfDeviPurnima);

Array.prototype.printsituation=function (){
    console.log("mast hai bhai");
}

console.log(array.printsituation());