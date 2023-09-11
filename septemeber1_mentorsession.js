//function debounce(func, delay) {
//  let timer;
//  return function (...args) {
//    clearTimeout(timer);
//    timer = setTimeout(() => {
//      func.apply(this, args);
//    }, delay);
//  };
//}
//function change(val) {
//  console.log(val);
//}
//function handle(e) {
//  if (e.target.value.length >= 1) {
//    const fun = debounce(change, 1000);
//    fun(e.target.value);
//  }
//}
let timer;
function handle(e) {
  if (e.target.value.length >= 1) {
    clearTimeout(timer);
    let x = e.target.value;
    timer = setTimeout(() => {
      console.log(x);
    }, 1000);
  }
}

//const inputElement = document.getElementById("myInput");
//
//let timeoutId;
//
//inputElement.addEventListener("keyup", function (event) {
//  clearTimeout(timeoutId); // Clear any previously scheduled function call
//
//  timeoutId = setTimeout(function () {
//    const inputValue = event.target.value;
//
//    console.log("Input value:", inputValue);
//
//    // You can perform any actions or logic based on the input value here
//  }, 500); // Adjust the debounce time (in milliseconds) as needed
//});
