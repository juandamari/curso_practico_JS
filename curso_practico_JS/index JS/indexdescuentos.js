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


/* 
function calcularprecioconcupon ( precio, cupons) {
        const porcentajepreciocupon = 100 - cupons;
        const precioconcupon = (precio * porcentajepreciocupon) / 100; 
    
        return precioconcupon;
}

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
    
const cupons = [
    "cupon_juan",
    "cupon_mania",
    "miercoles15"
];

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
    const precioconcupon = calcularprecioconcupon (pricevalue, cuponvalue);

    const result = document.getElementById("result");
    result.innerText = "el precio total con descuento es: $" + precioconcupon;
}
    */ 

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  }

function clickbotonpreciodescuento() {
      const inputprice = document.getElementById("inputprice");
      const priceValue = inputprice.value;

      const inputdiscount = document.getElementById ("inputdiscount");
      const discountvalue = inputdiscount.value;
      
      const inputcupon = document.getElementById("inputcupon");
      const couponValue = inputcupon.value;
  
      const resultCoupon = document.getElementById("resultp")
    
    
      let descuento;
      let precioConDescuento; 
    
      switch(true) {
        case couponValue === "juan_01":
          descuento = 15;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón de 15%, el precio con descuento es de: $${precioConDescuento} dolares, descuento no acumulables `
        break;
        case couponValue === "juan_02":
          descuento = 30;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es de 30%, el precio con descuento es de: $${precioConDescuento} dolares, descuento no acumulables`
        break;
        case couponValue === "juan_03":
          descuento = 25;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es de 25%, el precio con descuento es de: $${precioConDescuento} dolares, descuento no acumulables`
        break;
        default:
            precioConDescuento = calcularPrecioConDescuento(priceValue,discountvalue);
            resultCoupon.innerText = `El precio con descuento es de: $${precioConDescuento} dolares, descuento no acumulables con cupones`
      }
}
/* function clickbotonpreciodescuento () {
    const inputprice = document.getElementById("inputprice");
    const pricevalue = inputprice.value;

    const inputdiscount = document.getElementById ("inputdiscount");
    const discountvalue = inputdiscount.value;
    const preciocondescuento = calcularPrecioConDescuento (pricevalue, discountvalue)

    const resultp = document.getElementById("resultp");
    resultp.innerText = "el precio total con descuento es: $" + preciocondescuento;
} */