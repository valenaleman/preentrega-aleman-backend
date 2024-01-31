function add(...numbers){
    let total = 0;
    for(const number of numbers){
        total += number;
    }
    return total;
}

console.log(add(3200, 5900, 2420));
console.log(`Agrego el precio total de lo que seria la suma de los 3 productos`);