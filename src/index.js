class Auto{

    constructor(brand, model,year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    showAuto(){
    
       return console.log(`This Car is ${this.brand}${this.model}${this.year}`)

    }
}

const oneCar = new Auto(`Toyota`,`Corolla`,2024);
const twoCar = new Auto(`Hiunday`,`Elantra`,2024);

console.log (oneCar.showAuto());

console.log (twoCar.showAuto());