let product = [
    { id: 1, name: 'Babysec - Ultrasec', price: 3200, content: 60 },
    { id: 2, name: 'Pampers - Premium care, piel delicada', price: 5900, content: 58},
    { id: 3, name: 'Pampers - Premium care, recién nacido hipoalergénico', price: 2420, content: 36},
]

let listproduct = product.find(p=>{
    let listproduct;
    listproduct = p.id===3;
    return listproduct;
})

console.log(listproduct)