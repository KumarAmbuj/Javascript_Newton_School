console.log("helllo");

function func() {
  console.log("function");
  return 20;
}

//func is reference and func() is calling

function higher(callback) {
  const a = callback();
  console.log(a);
}

higher(func);

const a = () => {
  console.log("arroww");
};
a();