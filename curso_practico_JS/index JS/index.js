// cuadrado
console.group("cuadrado")

function perimetroCuadrado (lado) {
    return lado * 4 + "cm";
}
perimetroCuadrado()

function areaCuadrado (lado){
  return lado * lado + "cm";
}
areaCuadrado()

console.groupEnd();

// 

console.group("triangulos")

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base + "cm";
}
perimetroTriangulo()

function areaTriangulo (base, altura){
    return (base * altura) / 2 + "cm";
}
areaTriangulo()

console.groupEnd();

// circulo
console.group("circulos")

//radio
function radioCirculo(radio){
    return radio + "cm";
}
radioCirculo()

//diametro

function diametroCirculo (radio) {
    return radio * 2 + "cm";}
diametroCirculo()

//Pi
const Pi = 3.1415;

//circunferencia

function circunferencia(diametro){
    return diametro * Pi + "cm";
}
circunferencia()
//area

function areaCirculo(radio){
    return (radio * radio) * Pi +"cm";
}
areaCirculo()

console.groupEnd();

