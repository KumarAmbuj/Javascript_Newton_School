
  
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
  
  function checker() {
    console.log(this.name);
  }
  
  const checkerinstance = checker.mybind(st, 1, 2, 3, 4, 5); // args1
  checkerinstance(1, 2, 3, 4); // args2