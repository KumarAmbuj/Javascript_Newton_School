console.log("hello");
const object = {
  name: "Vishal",
  address: {
    city: {
      name: "Kanpur",
    },
  },
  education: {
    year: 2020,
  },
  orgInfo: {
    orgId: 123,
    orgName: "something",
    adress: {
      city: {
        name: "bangalore",
      },
    },
  },
};

let newobj = {};
//console.log(Object.keys(object));
function flatten(x, obj) {
  if (typeof obj !== "object") {
    newobj[x] = obj;
    return;
  }
  for (let z of Object.keys(obj)) {
    flatten(x + "." + z, obj[z]);
  }
}
flatten("", object);
console.log(newobj);

let arr = [
  3,
  [4, [6, [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[2]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
];
let newarr = [];
function reduce(arr) {
  if (typeof arr !== "object") {
    newarr.push(arr);
  } else {
    for (let x of arr) {
      if (typeof x === "object") {
        reduce(x);
      } else {
        newarr.push(x);
      }
    }
  }
}
reduce(arr);
console.log(newarr);
