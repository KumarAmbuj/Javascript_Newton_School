const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function callback(val, index, arr) {
  console.log(val, index, arr);
}
Array.prototype.myForEach = function (fn) {
  let newarr = this;
  for (let i = 0; i < newarr.length; i++) {
    fn(newarr[i], i, newarr);
  }
};
arr.myForEach(callback);
