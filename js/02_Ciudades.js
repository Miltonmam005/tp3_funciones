/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

/*Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

Output:
*/

function gestionarCiudades() {
    const ciudades = ["París, Francia",
  "Londres, Reino Unido",
  "Nueva York, Estados Unidos",
  "Tokio, Japón",
  "Roma, Italia",
  "Sídney, Australia",
  "Berlín, Alemania",
  "Madrid, España",
  "Moscú, Rusia",
  "El Cairo, Egipto",
  "Dubái, Emiratos Árabes Unidos",
  "Buenos Aires, Argentina",
  "Río de Janeiro, Brasil",
  "Toronto, Canadá",
  "Pekín, China",
  "Ciudad de México, México",
  "Ámsterdam, Países Bajos",
  "Estambul, Turquía",
  "Bangkok, Tailandia",
  "Seúl, Corea del Sur"];
    let ciudad;
  
    document.writeln("<h1>Arreglo de Ciudades</h1>");
    
    while (true) {
      ciudad = prompt("Ingrese una ciudad o presione Cancelar para terminar:");
      
      if (ciudad === null || ciudad.trim() === "") {
        break;
      }
      
      ciudades.push(ciudad.trim());
    }
  
    document.writeln("<div style='margin: 20px; padding: 15px; border: 1px solid #ccc; border-radius: 5px;'>");
    
    document.writeln("<h2>Arreglo de ciudades:</h2>");
    document.writeln("<pre>" + JSON.stringify(ciudades, null, 2) + "</pre>");
  
    if (ciudades.length > 0) {
      document.writeln("<p><strong>Longitud del arreglo:</strong> " + ciudades.length + "</p>");
      
      document.writeln("<p><strong>Posiciones específicas:</strong></p>");
      document.writeln("<ul>");
      document.writeln("<li>Primera posición: " + (ciudades[0] || "No existe") + "</li>");
      document.writeln("<li>Tercera posición: " + (ciudades[2] || "No existe") + "</li>");
      document.writeln("<li>Última posición: " + ciudades[ciudades.length - 1] + "</li>");
      document.writeln("</ul>");
  
      ciudades.push("París");
      document.writeln("<p><strong>Con París añadido:</strong></p>");
      document.writeln("<pre>" + JSON.stringify(ciudades, null, 2) + "</pre>");
  
      if (ciudades.length >= 2) {
        document.writeln("<p><strong>Segunda posición (original):</strong> " + ciudades[1] + "</p>");
        ciudades[1] = "Barcelona";
        document.writeln("<p><strong>Segunda posición (modificada):</strong> " + ciudades[1] + "</p>");
      }
  
      document.writeln("<h3>Arreglo final:</h3>");
      document.writeln("<pre>" + JSON.stringify(ciudades, null, 2) + "</pre>");
    } else {
      document.writeln("<p>No se ingresaron ciudades.</p>");
    }
    
    document.writeln("</div>");
    document.writeln("<p>Proceso completado.</p>");
  }
  gestionarCiudades();