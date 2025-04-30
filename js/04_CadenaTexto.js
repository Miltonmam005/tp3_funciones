/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que
 indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

 function ParImpar(num) {
    return `El número ${num} es ${num % 2 === 0 ? 'par' : 'impar'}`;
  }
  const num = prompt("Por favor, ingresa un número entero:");
  

  if (num === null || num === "") {
    alert("No ingresaste ningún número");
  } else if (isNaN(num)) {
    alert("El valor ingresado no es un número válido");
  } else {

    const numEntero = parseInt(numero);
    const resultado = ParImpar(numEntero);
    alert(resultado);
  }