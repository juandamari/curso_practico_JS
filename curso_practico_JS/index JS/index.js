// cuadrado
console.group("cuadrado")
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el permimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();
// triangulo
console.group("triangulos")
const baseTriangulo = 4;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const alturaTriangulo = 5.5;

console.log("los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm.")
console.log("la altura del triangulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo es: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log ("are del triangulo es: " + areaTriangulo + "cm");

console.groupEnd();

// circulo
console.group("circulos")

//radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//Pi
const Pi = 3.1415;

//circunferencia
const perimetroCirculo = diametroCirculo * Pi;
console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

//area
const areaCirculo = (radioCirculo * radioCirculo) * Pi
console.log("El area del circulo es: " + areaCirculo + "cm");

console.groupEnd();