class Counter {
    constructor(name){
        this.name = name;
        this.worth = 0;
        Counter.counterGlobal++;
    }

    increase(){
        this.worth++;
    }

    getValue(){
        return this.worth;
    }

    static getCounterGlobal(){
        return Counter.counterGlobal;
    }
}

Counter.counterGlobal = 0;

const counter1 = new Counter("Producto 1");
const counter2 = new Counter("Producto 2");

counter1.increase();
counter2.increase();
counter2.increase();

console.log(`${counter1.name}: ${counter1.getValue}`);
console.log(`${counter2.name}: ${counter2.getValue}`);

console.log(`Contador global: ${Counter.counterGlobal}`)