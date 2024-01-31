const products = [1, 1, 1]
;
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