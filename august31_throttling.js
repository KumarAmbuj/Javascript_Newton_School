const btn = document.getElementById("throttle");

const func = (fun, delay) => {
  let prev = 0;
  return function (...args) {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;

      return fun(...args);
    } else {
      console.log("clicked but wont be executed");
    }
  };
};
btn.addEventListener(
  "click",
  func(() => {
    console.log("clicked and executed");
  }, 1000)
);
