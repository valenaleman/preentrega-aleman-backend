const type = "Babysec";

const typeOfProduct = type ?? "Marca";

console.log(typeOfProduct);

const product  ={
    nombre: "Ultrasec",
}

const nameOfProduct = product?.type;

console.log(nameOfProduct);