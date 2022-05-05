// cuadrado
console.group("cuadrado")

function perimetroCuadrado (lado) {
    return lado * 4 + "cm";
}

function areaCuadrado (lado){
  return lado * lado + "cm";
}

console.groupEnd();

//triangulo

console.group("triangulos")

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base + "cm";
}


function areaTriangulo (base, altura){
    return (base * altura) / 2 + "cm";
}

console.groupEnd();

// circulo
console.group("circulos")

//radio
function radioCirculo(radio){
    return radio + "cm";
}

//diametro

function diametroCirculo(radio) {
    return radio * 2;
}

//Pi
const Pi = 3.1415;

//circunferencia

function perimetroCirculo(radio) {
    const dinametro = diametroCirculo (radio);
    return dinametro * Pi;
}
//area

function areaCirculo(radio){
    return (radio * radio) * Pi +"cm";
}

console.groupEnd();

// union html

fuction calcularperimetrocuadrado() {
    
}