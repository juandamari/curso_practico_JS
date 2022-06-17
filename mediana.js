const lista1 = [
    100, 200, 500, 40
];

const mitadlista1 = parseInt (lista1.length / 2); /* el parseint quita todos los decimales q pueda contener la formula */

function calcularmediaAritmetica (lista) {
    const sumalista = lista.reduce(
        function (valoracumulado = 0, nuevoelemento) {
            return valoracumulado + nuevoelemento;
        }
    ); 
    const promediolista = sumalista / lista.length;
return promediolista
}

function espar(numerito) {

    if (numerito % 2 === 0) {
        return true;
    }
    else { 
    return false;
    }
}
    let mediana;

    if (espar (lista1.length)){
        const elemento1 = lista1 [mitadlista1 - 1];
        const elemento2 = lista1 [mitadlista1];
        const promedioelemento1y2 = calcularmediaAritmetica ([elemento1, elemento2]);

        mediana = promedioelemento1y2
        
    }
    else {
        mediana = lista1[mitadlista1];
    }
