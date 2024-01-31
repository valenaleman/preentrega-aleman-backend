const sales = [
{
    BabysecUltrasec: 2,
    PampersPremiumcarepieldelicada: 1,
    PampersPremiumcarereciénnacidohipoalergénico:2
},
{
    Chelino: 2,
    QSOFTPremiumhipoalergénicas: 2,
    PampersPremiumcareReciennacido: 3
}
];

const typesOfProducts = [];

sales.forEach(sale => {
    const type = Object.keys(sale);
    type.forEach(type =>{
        if(!typesOfProducts.includes(type)){
            typesOfProducts.push(type);
        }
    })
});

console.log('Productos:', typesOfProducts);

let totalOfProductsSales = 0;

sales.forEach(sale => {
    const quantities = Object.values(sale);
    quantities.forEach(aumount => {
        totalOfProductsSales += aumount;
    });
})

console.log('Total de productos vendidos:', totalOfProductsSales);