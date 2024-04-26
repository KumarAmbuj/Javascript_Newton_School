const girl = {
  firstName: "Barbie Girl",
  printName: function () {
    function nestedPrintFucntion() {
      // this  ==> girl  => object
      console.log("this", this.firstName); //  udefined => Barbie Girl
    }
    nestedPrintFucntion.call(girl);
    // nestedPrintFucntion.call(this); this is equal to the line 175
    //this.nestedPrintFucntion(); error
    //girl.nestedPrintFucntion(); error
  },
};

girl.printName();

const doctor = {
  firstName: "Vishal",
  lastName: "Sharma",
  age: 27,
  printFullName: function () {
    console.log(this.firstName, this.age, this.lastName);
  },
};

const doctor1 = {
  lastName: "Timo",
  firstName: "Rimo",
};
doctor.printFullName();

doctor.printFullName.call(doctor1); //
