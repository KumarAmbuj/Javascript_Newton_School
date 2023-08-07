let animal12 = {
    walk() {
      console.log("I can walk");
      console.log("animal12", this);
    },
    eat() {
      console.log("I can walk");
    },
  };
  
  const cow123 = {
    name: "apni gaye",
    callMe() {
      console.log("cow", this);
    },
    __proto__: animal12,
  };
  
  cow123.callMe(); // cow
  cow123.walk(); //
  animal12.walk();