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

console.log(product1.getInformation());
console.log(product2.getInformation());
console.log(product3.getInformation());

Product.dates();