function capacidadDeuda (ingreso, egreso, porcentaje) {
    const capacidad = (ingreso - egreso) * porcentaje;
    return capacidad;
    console.log(capacidad);
};

function clickboton() {
    const inputprice = document.getElementById("input1");
    const enteringreso = inputprice.value;

    const inputdiscount = document.getElementById ("input2");
    const enteregreso = inputdiscount.value;
    
    const inputcupon = document.getElementById("input3");
    const entercapacidad = inputcupon.value;

    const resultCoupon = document.getElementById("resultp")


let porcentaje
let capacidad;

switch(true) {
    case value === "1":
      porcentaje = 0.20;
      capacidad = capacidadDeuda(enteringreso, enteregreso, entercapacidad);
      resultCoupon.innerText =`Su capacidad de ahorro es de maximo: ${capacidad} pesos, segun su nivel de ahorro conservador`
    break;
    case value === "2":
        porcentaje = 0.30;
        capacidad = capacidadDeuda(enteringreso, enteregreso, entercapacidad);
        resultCoupon.innerText =`Su capacidad de ahorro es de maximo: ${capacidad} pesos, segun su nivel de ahorro moderado`
    break;
    default:
        capacidad = capacidadDeuda(enteringreso, enteregreso, entercapacidad);
        resultCoupon.innerText = `Su capacidad de ahorro es de maximo de ahorro de se puede calcular`;
        break;
};
}