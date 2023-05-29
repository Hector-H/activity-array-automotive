//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle


//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers =  5;
        this.passengers = 0; 
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false; 
    }




start() {
    if(this.fuel > 0) {
        console.log('engine has started');
        return this.started = true;
    } else {
        console.log('no fuel');
        return this.started = false;
    }
}

scheduledService() {
    if(this.mileage > 30000) {
        this.scheduleService = true;
        return this.scheduleService;
    }
}

loadPassenger(num) {
    if (this.passengers < this.maximumPassengers) {
        if((num + this.passengers) <= this.maximumPassengers) {
            this.passengers;
            return this.passengers;
        } else {
            console.log(this.model + " " + this.make + " has enough space to take all passengers.");
        }
    } else  {
        console.log(this.model + ' ' + this.make + " is full");
    }
}

}

let newCar = new Car('mercury', 'A28 sedan', '2023', 'dark grey', '66')

newCar.start()
newCar.loadPassenger()
newCar.scheduledService()
console.log(newCar)







//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
