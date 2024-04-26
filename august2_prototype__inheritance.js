const robot = {
  speak: () => {
    console.log("hey I am speaking");
  },
  isPublicUse: false,
  walk: () => {
    console.log("hey I am speaking");
  },
  owner: "Robot pvt ltd.",
};

const robotBio = {
  command: "Medicines prescription",
  __proto__: robot,
  //   __proto__: dentistRobot
};

const dentistRobot = {
  name: "Dentist Leela",
  work: "Clean teeth  , remove teeth , break teeh",
  __proto__: robotBio,
};

console.log(dentistRobot.name);
console.log(dentistRobot.command);
console.log(dentistRobot.owner);
dentistRobot.speak();
