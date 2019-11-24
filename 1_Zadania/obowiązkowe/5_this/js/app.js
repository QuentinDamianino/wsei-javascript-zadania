// zadanie 0 

const car = {
    brand: 'ford',
    color: 'red',
    numbersOfKilometers: 0,

    printCarInfo: function () {
        console.log(this.color + " " + this.brand + ", " + this.numbersOfKilometers + "km");
        return this.color + " " + this.brand + ", " + this.numbersOfKilometers + "km";
    },

    drive: function (km) {
        this.numbersOfKilometers += km;        
    }
}

car.printCarInfo();
car.drive(10);
car.printCarInfo();

//zadanie 1


car.services = ["2019", "2020"];
car.addService = function (data) {
    this.services.push(data);
}

car.showServices = function () {
    return this.services;
}

//zadanie 3

const stairs = { 
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--
    },
    printStep: function() {
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep()