

function add(num1,num2,...numbers){
    let total = 0;
    for(const number of numbers){
        total += number;
    }
    return total;
}

console.log(sumar(3200, 5900, 2420));