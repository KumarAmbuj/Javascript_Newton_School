// checker.call(st); //  Vishal Sharma

Function.prototype.mybind = function (object, ...args1) {
  const func = this;
  return function (...arg2) {
    // func.mycall(object, ...args, ...arg2);
    func.apply(object, [...args1, ...arg2]);
  };
};

const st = {
  name: "Vishal Sharma",
};

function checker(a, b, c, d, e, f, g, h) {
  console.log(this.name, a, b, c, d, e, f, g, h);
}

const checkerinstance = checker.mybind(st, 1, 2, 3, 4, 5); // args1
checkerinstance(6, 7, 8); // args2
