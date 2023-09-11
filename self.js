Function.prototype.mybind = function (object, ...args1) {
  const func = this;
  return function () {
    // func.mycall(object, ...args, ...arg2);
    func.apply(object, [...args1]);
  };
};

//Function.prototype.mybind = function (obj, ...args1) {
//  obj.func = this;
//  return (...args2) => {
//    obj.func(...args1, ...args2);
//  };
//};

const obj={
  name:"ambuj",
  age:"22",
}

function fun(){
  console.log(this.name,this.age);
}

console.log(fun.mybind(obj)());