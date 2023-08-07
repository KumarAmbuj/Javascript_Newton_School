
  Function.prototype.mycall = function (obj, ...args) {
    //this =>checker
  
    //obj = {
    //   name: "Vishal Sharma",
    // };
  
    obj.callFunc = this;
  
    //obj = {
    //   name: "Vishal Sharma",
    // callFunc: function () {
    //   console.log(this.name);
    // }
    // };
  
    obj.callFunc(...args); //method call
  };

  const obj = {
       name: "Vishal Sharma",
     
  
     };

  function checker(){
    console.log(this.name);
  }

  checker.mycall(obj);