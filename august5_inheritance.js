console.log("inheitance");


class Vehicle {
    //   constructor(brand, name, color, tyre) {
    //     this.brand = brand;
    //     this.name = name;
    //     this.color = color;
    //     this.tyre = tyre;
    //   }
    //   getVehicleName() {
    //     return this.name;
    //   }
    //   getVehicleColor() {
    //     return this.color;
    //   }
    //   getVehicleTyre() {
    //     return this.tyre;
    //   }
    constructor(brand, name, color, tyre) {
      this.brand = brand;
      this.name = name;
      this.color = color;
      this.tyre = tyre;
    }
    getVehicleName() {
      return this.name;
    }
    getVehicleColor() {
      return this.color;
    }
    getVehicleTyre() {
      return this.tyre;
    }
    speed(value) {
      console.log("this is the speed", value);
    }
  }
  
  class FourWheeler extends Vehicle {
    constructor(...args) {
      // args  =>
  
      super(...args);
    }
    getMileage(value) {
      console.log("this is the mileage", value);
    }
    // overriding
    getVehicleTyre() {
      return super.getVehicleTyre();
    }
  }
  
  
  const four = new FourWheeler("mahindra", "xuv700", "black", 4);
  four.speed(200);
  four.getMileage(400);
  
  const vehicle = new Vehicle("mahindra", "xuv700", "black", 4);
  console.log(vehicle);
  console.log(four);