//class Newton {
//    #studentCount = 0; // class member and field
//    set setStudentCount(value) {
//      this.#studentCount = value;
//    }
//    get studentCount() {
//      return this.#studentCount;
//    }
//  }
//  
//  const obj = new Newton();
//  // console.log(obj.#studentCount); error
//  obj.setStudentCount = 30;
//  console.log(obj.studentCount);



class Newton {
    // we use #
    #studentCount = 0; // class member and field
    _instrutorCount = 0;
    get instrutorCount() {
      return this._instrutorCount;
    }
    set setStudentCount(value) {
      this.#studentCount = value;
    }
    // proctecting route
    set setInstructorCount(count) {
      if (count <= 0) {
        return 0;
      }
      return count;
    }
    publicPrint() {
      this.#printData();
    }
    get studentCount() {
      return this.#studentCount;
    }
    #printData() {
      console.log("hey", this.#studentCount);
    }
  }
  
  class Org extends Newton {
    // can i get private member of Newton inside this class (no.)
  }
  
  const obj = new Newton();
  // console.log(obj.#studentCount); error
  console.log(obj.instrutorCount); //
  // obj.instrutorCount = 40;
  obj.setStudentCount = 30;
  console.log(obj.studentCount);
  // console.log(obj.#printData()); error
  console.log(obj.printName());
  
  

