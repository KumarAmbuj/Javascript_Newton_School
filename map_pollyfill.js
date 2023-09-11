const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function callback(val, index, arr) {
  return { val: val, index: index };
}

Array.prototype.MyMap = function (call) {
  let arr = this;
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(call(arr[i], i, arr));
  }
  return newarr;
};

const newarr = arr.MyMap(callback);
console.log(newarr);
