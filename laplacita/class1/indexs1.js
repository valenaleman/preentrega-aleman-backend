//setTimeout
console.log("1. Inicio de la carga de datos de los productos (setTimeout)");

function cargarDatosDesdeServidor(callback) {
  setTimeout(function() {
    const datos = "Datos de los productos cargados desde el servidor";
    callback(datos);
  }, 2000);
}

function procesarDatos(datos) {
  console.log("4. Procesando datos:", datos);
}

console.log("2. Solicitando datos al servidor");
cargarDatosDesdeServidor(procesarDatos);
console.log("3. Fin de la carga de datos (setTimeout)");