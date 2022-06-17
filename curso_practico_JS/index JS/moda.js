const lista1 = [
    1,
    2,
    3,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    5,
    1,
    2,
    4,
    3,
    1,
    2,
    2,
    3,
    1
];

const lista1count = {};

lista1.map(
    function(elemento){
        if (lista1count[elemento]) {
            lista1count[elemento] += 1; //esto sumara cada vez que pase por el elemento de los arrys

        } else {
            lista1count[elemento] = 1;
        }
    }
);
const lista1array = Object.entries(lista1count).sort(
    function (valoracumulado, nuevovalor) {
        return valoracumulado[1] - nuevovalor[1];
    }
);

const moda = lista1array[lista1array.length - 1];

const array = [
    {carros: "toyota", price: 2500},
    {carros: "ford", price: 4500},
    {carros: "honda", price: 1250}];

array.forEach(item => console.log(item), console.log(item.carros));