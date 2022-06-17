/* const lista1 = [
    100, 200, 300, 500,];

let sumlista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumlista1 = sumlista1 + lista1[i];
}

const promediolista1 = sumlista1 / lista1.length
 */
function calcularmediaAritmetica (lista) {
    /* let sumlista = 0;
for (let i = 0; i < lista.length; i++) {
    sumlista = sumlista + lista[i];
} */

const sumalista = lista.reduce(
    function (valoracumulado = 0, nuevoelemento) {
        return valoracumulado + nuevoelemento;
    }
); 

const promediolista = sumalista / lista.length;
return promediolista
}