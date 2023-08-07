const st = {
    name: "Vishal Sharma",
  };
  
  function checker(a, b, c, d) {
    console.log(this.name);
  }
  
  // checker.call(st); //  Vishal Sharma
  
  
  Function.prototype.myapply = function (obj, args) {
    obj.callFunc = this;
    obj.callFunc(...args);
  };
  
  checker.myapply(st, [1, 2, 3, 4]);