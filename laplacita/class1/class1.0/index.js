const _ = require("lodash");

function generateRandomPrice(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomPrices = [];
const NumberOfRandomPrice = 7600;

for (let i = 0; i < NumberOfRandomPrice; i++) {
    const randomPrice = generateRandomPrice(1, 690);
    randomPrices.push(randomPrice);
}

const countByNumber = _.countBy(randomPrices);

console.log('Resultados:');

for (let number in countByNumber) {

    console.log(`Número ${number}: ${countByNumber[number]} veces.`);
}