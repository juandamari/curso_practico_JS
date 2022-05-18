

function calcularpreciocondescuento (precio, descuento) {
    const porcentajepreciocondescuento = 100 - descuento;
    const preciocondescuentos = (precio * porcentajepreciocondescuento) / 100;

    return preciocondescuentos;
}
function clickbotonpreciodescuento () {
    const inputprice = document.getElementById("inputprice");
    const pricevalue = inputprice.value;

    const inputdiscount = document.getElementById ("inputdiscount");
    const discountvalue = inputdiscount.value;
    const preciocondescuentos = calcularpreciocondescuento (pricevalue, discountvalue)

    const resultp = document.getElementById("resultp");
    resultp.innerText = "el precio total con descuento es: $" + preciocondescuentos;
}


function calcularprecioconcupon (precio, descuentos) {
    const porcentajeprecioconcupon = 100 - descuentos;
    const precioConDescuento = (precio * porcentajeprecioconcupon) / 100;

    return precioConDescuento;
}
function clickbotoncupon() {
    const inputprice = document.getElementById("inputprice");
    const priceValue = inputprice.value;

    const inputcupon = document.getElementById ("inputcupon");
    const cupon = inputcupon.value;

    const result = document.getElementById("result");

    let descuentos;
    let precioConDescuento; 
  
    switch(true) {
      case precioconcupon === "JuanDC_es_Batman":
        descuentos = 15;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuentos);
        result.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolares`
      break;
      case precioconcupon === "pero_no_le_digas_a_nadie":
        descuentos = 30;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuentos);
        result.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolares`
      break;
      case precioconcupon === "esun":
        descuentos = 25;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuentos);
        result.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} dolares`
      break;
      default:
        result.innerText = "el cupón ingresado no es valido"
    }
}