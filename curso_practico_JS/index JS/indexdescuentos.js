//const preciooriginal = 120;
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

    const inputdiscount = document.getElementById ("inputdiscount");
    const discountvalue = inputdiscount.value;
    const preciocondescuento = calcularpreciocondescuento (pricevalue, discountvalue)

    const resultp = document.getElementById("resultp");
    resultp.innerText = "el precio total con descuento es: $" + preciocondescuento;

    const inputcupon = Document.getElementById("inputcupon");
    const cuponvalue = inputcupon.value;

    let descuento;

    switch(cuponvalue) {
        case cupons [0]:
            descuento = 15;
        break;
        case cupons [1]:
            descuento = 25;
        break;
        case cupons [2]:
            descuento = 30;
        break;
    }
    const preciocondescuentos = calcularprecioconcupon (pricevalue, cuponvalue);
    const result = document.getElementById("result");
    resultp.innerText = "el precio total con descuento es: $" + precioconcupon;
    
}
const cupons = [
    "cupon_juan",
    "cupon_mania",
    "miercoles15"
];
function calcularprecioconcupon ( precio, cupons) {
    const porcentajepreciocupon = 100 - cupons;
    const precioconcupon = (precio * porcentajepreciocupon) / 100; 

    return precioconcupon;
}
