const products = [1, 1, 1];
const stock = products.map(product => product**1);

console.log(stock);

const articleOne = products.includes(1);
const articleTwo = products.includes(1);
const articleThree = products.includes(1);

console.log(articleOne);
console.log(articleTwo);
console.log(articleThree);

const product = {
    product: "Babysec - Ultrasec",
    price: 3200,
    content: 60
}

const entradas = Object.entries(product)

for(const [key, value] of entradas){
    console.log(`${key}: ${value}`);
}

const values = Object.values(product);
console.log(values); 


const keys = Object.keys(product);
console.log(keys);

const arr1 = ['Pampers - Premium care, piel delicada', 'Babysec - Ultrasec'];
const arr2 = ['Pampers - Premium care, recién nacido hipoalergénico'];

const combineArray = [...arr1, ...arr2];
console.log(combineArray);

console.log(`Orden de productos por precio`);

function add(...numbers){
    let total = 0;
    for(const number of numbers){
        total += number;
    }
    return total;
}

console.log(add(3200, 5900, 2420));
console.log(`Agrego el precio total de lo que seria la suma de los 3 productos`);

const sales = [
    {
        BabysecUltrasec: 2,
        PampersPremiumcarepieldelicada: 1,
        PampersPremiumcarereciénnacidohipoalergénico:2
    },
    {
        Chelino: 2,
        QSOFTPremiumhipoalergénicas: 2,
        PampersPremiumcareReciennacido: 3
    }
    ];
    
    const typesOfProducts = [];
    
    sales.forEach(sale => {
        const type = Object.keys(sale);
        type.forEach(type =>{
            if(!typesOfProducts.includes(type)){
                typesOfProducts.push(type);
            }
        });
    });
    
    console.log('Productos:', typesOfProducts);
    
    let totalOfProductsSales = 0;
    
    sales.forEach(sale => {
        const quantities = Object.values(sale);
        quantities.forEach(aumount => {
            totalOfProductsSales += aumount;
        });
    })
    
    console.log('Total de productos vendidos:', totalOfProductsSales);

    const message = "Bienvenido a la pañalera LA PLACITA";
    const message1 = "Usted esta viendo los productos de la tienda";

    /*console.log(message.replace(/\s/g,"")*/ 
    console.log(message.trim());
    console.log(message1.trim());

    const arrayAnidado = [
        ['Babysec - Ultrasec', 'Pampers - Premium care, piel delicada'],
        ['Pampers - Premium care, recién nacido hipoalergénico', 'Pampers - Premium care, Recien nacido'],
        ['Chelino', 'Q-SOFT Premium hipoalergénicas']
    ]

    console.log(arrayAnidado);
    console.log(arrayAnidado.flat());

    const type = "Babysec";

    const typeOfProduct = type ?? "Marca";

    console.log(typeOfProduct);

    const product1  ={
        nombre: "Ultrasec",
    }

    const nameOfProduct = product1?.type;

    console.log(nameOfProduct);

const resultadoCompra = new Promise((resolve, reject) => {
    const exito = false; // Cambiar a false para probar el caso de rechazo
      
    if (exito) {
    // Caso de resolución
    resolve("Resultado");
    } else {
    // Caso de rechazo
    reject("La operación falló");
    }
    });
      
// Utilizamos la promesa
resultadoCompra
    .then((resultado) => {
         console.log("Este es el resultado de todos los producos:", resultado);
    })
    .catch((error) => {
         console.error("No se puede poner en pantalla el resultado de los productos sumados:", error);
     });

     const dividir = (dividendo, divisor) => {
        return new Promise((resolve, reject) => {
            if (divisor === 0) {
                // Si el divisor es 0, rechazamos la promesa con un mensaje de error
                reject('No se pueden hacer divisiones entre cero');
            } else {
                // Si el divisor no es 0, resolvemos la promesa con el resultado de la división
                resolve(dividendo / divisor);
            }
        });
    }
    
    // Llamamos a la función dividir con 6 como dividendo y 2 como divisor
    dividir(6, 2)
        .then((resultado) => {
            // El método then se ejecuta cuando la promesa se resuelve con éxito
            console.log('Resultado:', resultado); // Resultado: 3
        })
        .catch((error) => {
            // El método catch se ejecuta cuando la promesa es rechazada
            console.error('Error:', error); // No se ejecutará en este caso
        });