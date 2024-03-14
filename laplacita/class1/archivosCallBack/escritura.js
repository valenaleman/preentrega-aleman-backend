const fs = require('fs');

console.log("Inicio de cambio de archivo");

fs.writeFile('archivo.txt', 'contenido de productos', 'utf-8', (error)=>{
  if(error){
    console.error("Error al agregar un nuevo producto dentro del archivo:", error);
  } else{
    console.log("Producto agregado en el archivo con exito");
  }
});

console.log("Fin del cambio de archivo");