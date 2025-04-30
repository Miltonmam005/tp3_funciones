/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)*/

function calcularPerimetro(ladoA, ladoB) {
    return 2 * (ladoA + ladoB);
  }
  
  
  const lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del rectángulo:"));
  const lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del rectángulo:"));
  
  
  if (isNaN(lado1) || isNaN(lado2) || lado1 <= 0 || lado2 <= 0) {
    alert("Por favor ingrese valores numéricos válidos y mayores que cero");
  } else {
  
    const perimetro = calcularPerimetro(lado1, lado2);
    alert(`El perímetro del rectángulo es: ${perimetro.toFixed(2)}`);
  }