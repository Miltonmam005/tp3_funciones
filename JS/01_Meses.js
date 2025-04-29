/* 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
 Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

const Meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "diciembre",
];

console.log(Meses);

document.writeln(Meses + `<br>`);
document.writeln("<br>" + Meses.length);

document.writeln(`<h1> Lista de meses </h1>`);
document.writeln(`<ul>`);
for (let i = 0; i < Meses.length; i++) {
  document.writeln(`<li>${Meses[i]}</li>`);
}
document.writeln(`</ul>`);
