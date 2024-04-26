async function getUserData(searchValue) {
  const res = await fetch(
    `https://dummyjson.com/users/search?q=${searchValue}`
  );
  const result = res.json();
  result.then((resp) => {
    console.log(resp);
  });
}
function handleInputChange(event) {
  console.log(event.target.value);
  getUserData(event.target.value);
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

const debounceSearch = debounce(handleInputChange, 600);
document.querySelector("input").addEventListener("input", debounceSearch);
