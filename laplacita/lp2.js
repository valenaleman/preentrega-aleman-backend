function openList(list){
    if(list.length === 0){
         console.log("No existe la lista");
    } else {
        list.forEach((element, index) => {
            console.log(`${index + 1}: ${element}`)
        });
    }
    console.log(`La lista contiene la siguiente cantidad de productos: ${list.length}`)
}

const emptyList = [];
const listWithElements = ["Babysec - Ultrasec", "Pampers - Premium care, piel delicada", "Pampers - Premium care, recién nacido hipoalergénico"];

console.log(openList(listWithElements));