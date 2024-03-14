let product = [
    { id: 1, name: 'Babysec - Ultrasec', price: 3200, content: 60 },
    { id: 2, name: 'Pampers - Premium care, piel delicada', price: 5900, content: 58 },
    { id: 3, name: 'Pampers - Premium care, recién nacido hipoalergénico', price: 2420, content: 36 },
    { id: 4, name: 'Pampers - Premium care, Recien nacido', price: 3200, content: 20 },
    { id: 5, name: 'Chelino', price: 7600, content: 27 },
    { id: 6, name: 'Q-SOFT Premium hipoalergénicas', price: 690, content:50 }
]

let listproduct = product.find(p=>{
    let listproduct;
    listproduct = p.id===3;
    return listproduct;
})

console.log(listproduct)

const foo = (n1,n2)=>n1+n2;

let total = foo(2,3);

console.log(total)

function openList(list){
    if(list.length === 0){
         console.log("No existe la lista");
    } else {
        list.forEach((element, index) => {
            console.log(`${index + 1}: ${element}`)
        });
    }
    console.log(`La lista contiene la siguiente cantidad de productos: ${list.length}`)
}

const emptyList = [];
const listWithElements = ["Babysec - Ultrasec", "Pampers - Premium care, piel delicada", "Pampers - Premium care, recién nacido hipoalergénico"];

console.log(openList(listWithElements));

class Product {
    constructor(name, price, content){
        this.name = name;
        this.price = price;
        this.content = content;
    }

    getInformation(){
        return `Datos del producto: Nombre:${this.name} - Precio:${this.price} - Canidad de pañales que viene en el paquete:${this.content}`;
    }

    static dates(){
        console.log("Estos son los datos de los productos");
    }
}

const product1 = new Product("Babysec - Ultrasec", 3200, 60);
const product2 = new Product("Pampers - Premium care, piel delicada", 5900, 58);
const product3 = new Product("Pampers - Premium care, recién nacido hipoalergénico", 2420, 36);
const product4 = new Product("Pampers - Premium care, Recien nacido", 3200, 20);
const product5 = new Product("Chelino", 7600, 27);
const product6 = new Product("Q-SOFT Premium hipoalergénicas", 690, 50);

console.log(product1.getInformation());
console.log(product2.getInformation());
console.log(product3.getInformation());
console.log(product4.getInformation());
console.log(product5.getInformation());
console.log(product6.getInformation());

Product.dates();

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

console.log("Inicio de la cuenta");

function procesoSincrono() {
  for (let i = 0; i < 3200; i++) {
    console.log(`Primer paso síncrono ${i}`);
  }

  for (let i = 0; i < 5900; i++) {
    console.log(`Segundo paso síncrono ${i}`);
  }
  for (let i = 0; i < 2420; i++) {
    console.log(`Tercer paso síncrono ${i}`);
  }

  for (let i = 0; i < 3200; i++) {
    console.log(`Cuarto paso síncrono ${i}`);
  }
  for (let i = 0; i < 7600; i++) {
    console.log(`Quinto paso síncrono ${i}`);
  }

  for (let i = 0; i < 790; i++) {
    console.log(`Sexto paso síncrono ${i}`);
  }
}

procesoSincrono();

console.log("Fin del programa");