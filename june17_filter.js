console.log("map function and filter function");
var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//=> [false , true , false , true , false , true , false , true , false , true]

function mymap(callbackfunc, array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = callbackfunc(array[i], i, array);
  }
  return result;
}

const func = (v, index, array) => {
  return v % 2 === 0;
};

const mapExample2 = mymap(func, number1);

const mapExample = number1.map(func);

console.log("mapExample", mapExample);
console.log("mapExample2", mapExample2);

// higher order function

var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

number1.map(func);


// how filter work

// filter will be only applied on the
//filter is declrative way to iterate throught the array
// filter function is provided by javascript
// filter function is higher order function of javascript array
// filter function takes first argument as func , if first argument is not function code will not work
// as name suggest filter use to filter out the data from array and give the new array with filtered data//
// filter hof always return the array/
// if condition match its return that element else its return empty array
