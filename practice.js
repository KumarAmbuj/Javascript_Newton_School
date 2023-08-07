function Animal(name) {
    this.name = name;
   }
   
   Animal.prototype.getName = function() {
    return this.name;
   }
   
   const cat = new Animal("Fluffy");
   
   console.log(cat.getName());