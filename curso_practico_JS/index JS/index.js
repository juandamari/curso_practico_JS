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

const raiz = Math.sqrt

function alturatriangulo (lado, base){
    return raiz ((lado * lado) - ((base * base) / 4))
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

function calcularperimetrocuadrado() {
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularareacuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}