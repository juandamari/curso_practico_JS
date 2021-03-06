const salariosCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

//mediana general

const salariosColsorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularmediaAritmetica (lista) {
    const sumalista = lista.reduce(
        function (valoracumulado = 0, nuevoelemento) {
            return valoracumulado + nuevoelemento;
        }
    ); 
    const promediolista = sumalista / lista.length;
return promediolista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length /2);
    if (esPar(lista.length)) {
        const personitamitad1 = lista[mitad - 1];
        const personitamitad2 = lista[mitad];
        const mediana = calcularmediaAritmetica([personitamitad1, personitamitad2]);
        return mediana;
    }
    else {
        const personitamitad = lista[mitad];
        return personitamitad;
    }
};
const medianageneral = medianaSalarios(salariosColsorted);

//top10


const splicestar = (salariosColsorted.length * 90) / 100;
const splicecount = salariosColsorted.length - splicestar;

const salrioscoltop10 = salariosColsorted.splice(
splicestar,
splicecount,
);

const medainatop10col = medianaSalarios(salrioscoltop10);

console.log({ 
    medianageneral,
    medainatop10col,
});