
//Ejercicio para calcular 

//variables a utilizar

function calcularPrecio() {
    var precioBase = parseFloat(document.getElementById("precio").value);
    var descuento = parseFloat(document.getElementById("descuento").value);
    var resultadoElement = document.getElementById("resultado");
  
    //para cuando los valores ingresados son menores o igual a 0 o el descuento es menor a 0
    //Para cuando el descuento es 0
    //Para cuando el descuento es mayor a 0 y menor o igual a 100, se debe calcular el precio base con descuento
    if (precioBase <= 0 || descuento < 0 || descuento > 100) {
      resultadoElement.textContent = "Los valores ingresados son inválidos";
    } else if (descuento === 0) {
      resultadoElement.textContent = "El precio final sin descuento es $" + precioBase;
    } else {
      var precioFinal = precioBase - (precioBase * descuento / 100);
      resultadoElement.textContent = "El precio final con descuento es $" + precioFinal;
    }
  }