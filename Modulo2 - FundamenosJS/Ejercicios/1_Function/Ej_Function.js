function calculatePrice(producto, precio){
    let costoEnvio = (precio/100)*5;
    let precioTotal = precio*1.05;
    console.log('El producto '+producto+' cuesta $'+precio+'. Su costo de envío es de '+costoEnvio+'. Por lo tanto, el precio final es de '+precioTotal+'.');
}
console.log(calculatePrice("Tablet", 100));