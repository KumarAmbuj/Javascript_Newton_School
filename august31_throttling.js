const btn = document.getElementById("throttle");
function clickHandler() {
  console.log("clicked");
}
const throttle = (fun, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fun.call(this, ...args);
    }, delay);
  };
};
const throttleFunction = throttle(clickHandler, 500);
btn.addEventListener("click", throttleFunction);

//btn.addEventListener("click", clickHandler);

function handleInputChange(event) {
  console.log(event.target.value);
}

function debounce(fun, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.call(this, ...args);
    }, delay);
  };
}

const debounceSearch = debounce(handleInputChange, 300);
document.querySelector("input").addEventListener("input", debounceSearch);
