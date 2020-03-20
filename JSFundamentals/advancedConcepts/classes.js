
class Car {
    constructor(make, model, year, miles, color, vin) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.color = color;
        this.vin = vin;
    }
}

let myCar = new Car('Infinity', 'g20', 2000, 213219, 'silver', 786742);

console.log(myCar);