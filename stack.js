var arr = [1, 2, 3, 4, 5];
var newar = arr.map((val) => {
  const obj = {};
  obj[val] = val;
  return obj;
});
console.log(newar);
