console.log('dekh bhai aaj getter aur setter padhenge');

const vehicle={
    type:"Car",
    tyre:4,
    get getTyre(){
        return this.tyre;
    },
    set setTyre(count){
        this.tyre=count;
    },
    
}
console.log(vehicle.getTyre);
vehicle.setTyre=8;
console.log(vehicle.getTyre);
console.log(vehicle['getTyre'])