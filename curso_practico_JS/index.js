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

function perimetroTriangulo (inputladoA, inputladoB, inputbase) {
    return inputladoA + inputladoB + inputbase;
}

function areaTriangulo (base, altura){
    return (base * altura) / 2 + "cm";
}
const raiz = Math.sqrt

function alturatriangulo (inputladoA, inputladoB, inputbase){
    return raiz ((inputladoA * inputladoB) - ((inputbase * inputbase) / 4))
}

//function alturatriangulo (ladoA, ladoB, base){
    //if (ladoA != ladoB) {
        //console.error ("los lados a y b no son iguales");
    //}
//}


console.groupEnd();

// circulo

console.group("circulos");

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
//cuadrado

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

//triangulo

function calcularperimetrotriangulo(){
    const input = document.getElementById("inputtriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}
