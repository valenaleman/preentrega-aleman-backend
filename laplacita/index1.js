/*let valoresOriginales = [690, 2420, 3200, 3200, 5900, 7600];

const evaluarNumero = valor =>{
    if(valor >= 3200){
        return `${valor}: Es mayor o igual a 3200`;
    } else {
        return `${valor}: Es menor a 3200`;
    }
}

const evaluacionDeNumeros = valoresOriginales.map(evaluarNumero);

console.log(evaluacionDeNumeros);*/

const fn_callback = n1 =>{
    console.log(`Babysec - Ultrasec = ${n1}`);
}

const inicio = (param1, callback)=>{
    if(param1 === 1){
        callback(param1);
    } else {
        console.log(`${param1}: este es el precio final`);
    }
}

inicio(1, fn_callback);

function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Función que ejecuta una operación utilizando un callback
function operacion(a, b, callback) {
    return callback(a, b);
}

console.log(operacion(3200, 5900, 2420, 3200, 7600, 690, sumar)); // Resultado: 8
console.log(operacion(3200, 5900, 2420, 3200, 7600, 690, restar)); // Resultado: 2
console.log(operacion(3200, 5900, 2420, 3200, 7600, 690, multiplicar)); // Resultado: 15
console.log(operacion(3200, 5900, 2420, 3200, 7600, 690, dividir)); // Resultado: 3