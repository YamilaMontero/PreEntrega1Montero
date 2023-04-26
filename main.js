// variable para almacenar el costo total
let costoTotal = 0;

// Se solicita precio de cada producto y los sumamos al costo total
for (let i = 1; i <= 5; i++) {
  let precio = parseFloat(prompt("10% OFF Ingresa el precio del producto " + i));

  // Si el usuario ingresa un precio inválido, volvemos a pedirle que ingrese un precio válido
  while (isNaN(precio)) {
    precio = parseFloat(prompt("Precio inválido. Ingresa el precio del producto " + i));
  }

  costoTotal += precio;
}

// Descuento del 10% 
if (costoTotal > 10) {
  costoTotal *= 0.9;
}

// Costo total 
alert("El costo total de los productos es $" + costoTotal.toFixed(2));