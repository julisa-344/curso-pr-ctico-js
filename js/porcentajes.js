function mostrar(){
    document.getElementById('contentCupon').style.display = 'block';
    }

// function precioPagar(descuento, precio){
//     const porcentajeDescuento = 100 - descuento
//     return (porcentajeDescuento/100)*precio
// }
// function onClickButtonPriceDiscuento(){
//     const inputPrecio = document.getElementById("inputPrice");
//     const valuePrecio = inputPrecio.value;
//     const inputDecount = document.getElementById("inputDescuento");
//     const valueDecount = inputDecount.value;

//     const precioFinal = precioPagar(valueDecount, valuePrecio)
//     document.getElementById('calculado').innerHTML= "$" + precioFinal;
// }

const coupons = [
    {
        name: "LEO",
        discount: 15,
    },
    {
        name: "FAMILIA",
        discount: 30,
    },
    {
        name: "MAMÁ",
        discount: 25,
    },
    {
        name: "VEGAN",
        discount: 80,
    },
];
function precioPagar(descuento, precio){
     const porcentajeDescuento = 100 - descuento
     return (porcentajeDescuento/100)*precio
 }
function onClickButtonPriceCupon() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputCupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;
  
    let descuento;
  
    switch(cuponValue) {
      case "LEO":
        descuento = 15;
      break;
      case "FAMILIA":
        descuento = 30;
      break;
      case "MAMÁ":
        descuento = 25;
      break;
      case "VEGAN":
        descuento = 80;
      break;
    }
    const precioCupon = precioPagar(descuento, priceValue);
    document.getElementById('calculado').innerHTML= "$" + precioCupon;
}

//forma con más legibilidad

// const coupons = [
//     {
//         name: "JuanDC_es_Batman",
//         discount: 15,
//     },
//     {
//         name: "pero_no_le_digas_a_nadie",
//         discount: 30,
//     },
//     {
//         name: "es_un_secreto",
//         discount: 25,
//     },
// ];

// function calcularPrecioConDescuento(precio, descuento){
//     const porcentajeDelPrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
//     return precioConDescuento;
  
//   }

//   function onClickButtonPriceDiscount() {
//            const inputPrice = document.getElementById("InputPrice");
//            const priceValue = inputPrice.value;
          
//            const inputCoupon = document.getElementById("inputCoupon");
//            const couponValue = inputCoupon.value;

//            const isCouponValueValid = function (coupon) {
//             return coupon.name === couponValue;
//         };
        
//         const userCoupon = coupons.find(isCouponValueValid);
        
//         if (!userCoupon) {
//             alert("El cupón " + couponValue + " no es válido");
//         } else {
//             const descuento = userCoupon.discount;
//             const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
//             const resultP = document.getElementById("ResultP");
//             resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//         }

//     }   