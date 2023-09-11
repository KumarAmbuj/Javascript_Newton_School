console.log("hello");
function mockAPIResponse(index, cb) {
  const response = ["a", "b", "c"];

  let randomDelay = Math.floor(Math.random() * 3000);

  setTimeout(function () {
    cb(response[index]);
  }, randomDelay);
}

function callMock(index) {
  mockAPIResponse(index, function (a) {
    after(a);
  });
}
let arr = [];
function after(data) {
  arr.push(data);

  if (arr.length == 3) {
    arr.sort();
    for (let x of arr) {
      console.log(x);
    }
  }
}

callMock(0);

callMock(1);

callMock(2);
