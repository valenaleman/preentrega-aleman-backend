let valoresOriginales = [690, 2420, 3200, 3200, 5900, 7600];

const evaluarNumero = valor =>{
    if(valor >= 3200){
        return `${valor}: Es mayor o igual a 3200`;
    } else {
        return `${valor}: Es menor a 3200`;
    }
}

const evaluacionDeNumeros = valoresOriginales.map(evaluarNumero);