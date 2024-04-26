console.log("slice and splice");

//const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//const slice1 = nums.slice();
//
//console.log("slice1", slice1);
//
//const slice2 = nums.slice(0, 7);
//
//console.log("slice2", slice2); //
//
//const slice3 = nums.slice(2, 2);
//
//console.log("slice2", slice3); //
//
//const slice4 = nums.slice(2, -2);
//
//console.log("slice4", slice4); //
//
//const slice5 = nums.slice(-8, -2); // [3,4,5,6,7,8]
//
//console.log("slice5", slice5); //

console.log("spile");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans1 = nums.splice(2, 4);
console.log(ans1);
console.log(nums);
//
//
//const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//const ans=nums1.splice(4,-2);
//console.log(ans);
//
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans3 = nums3.splice(-8, 3);
console.log(ans3);
console.log(nums3);

//const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//
////
//
//const element = rank.splice(0, 2);
//
////  it will return the effected or deleted element
//
//console.log("element",element);
//console.log('rank',rank); // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//
//const element3 = rank.splice(0, 0);
//console.log(element3);
//
//const element4 = rank.splice(3, 5);
//console.log("element4", element4); //[6, 7, 8, 9, 10]
//console.log(rank); //[3, 4, 5, 11, 12, 13, 14, 15]
//
//// joining the element in array
//
//const animalsCount = [4, 5, 6, 7, 8, 11, 2, 3, 5];
//
//const updatedList = animalsCount.splice(
//  4,
//  2,
//  "hello",
//  "hey",
//  "tit",
//  "tot",
//  "lol"
//);
//
//console.log(updatedList); // [8, 11]
//console.log(animalsCount); // [4, 5, 6, 7, 'hello', 'hey', 'tit', 'tot', 'lol', 2, 3, 5]

//const myEmployee = [
//
//    { name: "Vishal", salary: 20000 },
//
//    { name: "tiro", salary: 100000 },
//
//    { name: "verr", salary: 30000 },
//
//    { name: "tom", salary: 200000 },
//
//    { name: "rim", salary: 10000 },
//
//    { name: "chim", salary: 30000 },
//
//    ];
//
//const myfunc=(a,b)=>{
//    return a.salary-b.salary;
//}
//const newarr=myEmployee.sort(myfunc);
//console.log(newarr);
//
//
//var myArr = ['foo', 'bar', 'baz'];
//myArr[2];
//console.log('2' in myArr);

let user = {
  name: "Karan",
  address: { personal: "Delhi", area: "CivilLines" },
  office: { state: "Mumbai", area: { landmark: "Bandra" } },
};
let resultObj = {};
function findflat(user, obj) {
  if (typeof obj != "object") {
    resultObj[user] = obj;
  } else {
    for (var x in obj) {
      findflat(user + "_" + x, obj[x]);
    }
  }
}
findflat("user", user);
console.log(resultObj);
//Output:
//{
//user_name: 'Karan',
//user_address_personal: 'Delhi',
//user_address_area: 'CivilLines',
//user_office_state: 'Mumbai',
//user_office_area_landmark: 'Bandra'
//}
