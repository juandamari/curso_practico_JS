function capacidadDeuda (ingreso, egreso,porcentaje) {
    const capacidad = (ingreso - egreso) * porcentaje;
    return capacidad;
};

function clickboton() {
    const inputprice = document.getElementById("input1");
    const enteringreso = inputprice.value;

    const inputdiscount = document.getElementById ("input2");
    const enteregreso = inputdiscount.value;

    const inputporcentaje = document.getElementById ("opciones");
    const enterporcentaje = inputporcentaje.value

    const resultCoupon = document.getElementById("resultp")
    
    let capacidad = capacidadDeuda (enteringreso,enteregreso,enterporcentaje)
    resultCoupon.innerText =`capacidad de endeudamiento es de: $${capacidad} pesos`
};

function capacidadAhorro (ingreso, porcentajeahorro) {
    const ahorro = (ingreso / 100) * porcentajeahorro;
    return ahorro;
}
function clickboton2() {
    const inputingreso = document.getElementById("input3");
    const ahorroIngreso = inputingreso.value;

    const inputPorcent = document.getElementById("opciones2");
    const porcentajeahorro = inputPorcent.value;

    const resultCouponn = document.getElementById("resultpp")

    let capacidadAhoro = capacidadAhorro(ahorroIngreso,porcentajeahorro)
    resultCouponn.innerText =`capacidad de endeudamiento es de: $${capacidadAhoro} pesos`
console.log(clickboton2);
}

