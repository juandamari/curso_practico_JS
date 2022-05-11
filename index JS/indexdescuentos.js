//const descuento = 18;

//onst porcentajepreciocondescuento = 100 - descuento;
//const preciocondescuento = (preciooriginal * porcentajepreciocondescuento) / 100;

//console.log({
    //preciooriginal,
    //descuento,
    //porcentajepreciocondescuento,
    //preciocondescuento,
//});

function calcularpreciocondescuento (precio, descuento) {
    const porcentajepreciocondescuento = 100 - descuento;
    const preciocondescuento = (precio * porcentajepreciocondescuento) / 100;

    return preciocondescuento;
}
function clickbotonpreciodescuento () {
    const inputprice = document.getElementById("inputprice");
    const pricevalue = inputprice.value;

    const inputdiscount = document.getElementById("inputdiscount");
    const discountvalue = inputdiscount.value;

    const preciocondescuento = calcularpreciocondescuento(pricevalue, discountvalue);
    console.log(preciocondescuento)

    //const resultp = document.getElementById("resultp");
    //resultp.innerText = "el precio total con descuento es: $" + preciocondescuento;

}
