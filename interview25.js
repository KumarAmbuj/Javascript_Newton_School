console.log("interview");

function fun(callback) {
  callback();
}

function func() {
  console.log("this is callback functio");
}

fun(func);

function A() {
  let a = 10;
  return function () {
    console.log(a);
  };
}

const a = A();
a();

async function getData() {
  let x = await fetch("https://gorest.co.in/public/v2/users");
  x = await x.json();
  console.log(x);
}

getData();
