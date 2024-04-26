let animal12 = {
  a: 4,
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
console.log("heyyy");
cow123.walk(); //
console.log("heyyy");
animal12.walk();
