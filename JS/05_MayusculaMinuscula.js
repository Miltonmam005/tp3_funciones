/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

function AnalizarCadenas(Cadenas) {
    if (Cadenas.length === 0) {
        return ' La cadena esta vacia';
    }

    const Mayusculas = Cadenas === Cadenas.toUpperCase();
    const Minusculas = cadenas === cadenas.toLowerCase();

    if (Mayusculas) {
        return 'La cadena esta formada solo por mayusculas';
    } else if (Minusculas) {
        return 'La cadena esta formada solo por minusculas';
    } else {
        return 'La cadena es una MEZCLA de mayusculas y minusculas';
    }
}
 