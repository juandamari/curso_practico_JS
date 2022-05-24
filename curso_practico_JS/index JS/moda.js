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