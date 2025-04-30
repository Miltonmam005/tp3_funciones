/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario*/



function mostrarTablaBonita(numero) {
    let resultado = `<table border="1">
                      <caption>Tabla de multiplicar del ${numero}</caption>
                      <tr><th>Multiplicación</th><th>Resultado</th></tr>`;
    
    for (let i = 1; i <= 10; i++) {
      resultado += `<tr><td>${numero} × ${i}</td><td>${numero * i}</td></tr>`;
    }
    
    resultado += "</table>";
    return resultado;
  }
  
  const num = Number(prompt("¿De qué número quieres ver la tabla de multiplicar?"));
  document.writeln(mostrarTablaBonita(num));