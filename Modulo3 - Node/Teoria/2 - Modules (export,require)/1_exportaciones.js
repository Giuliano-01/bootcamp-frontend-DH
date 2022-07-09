function uno(a,b){
    return a+b;
}
function dos(a,b){
    return a+b;
}
function tres(a,b){
    return a+b;
}

/*
distintas formas de exportar:

*/module.exports = uno;               // 1 exporta la funcion
/*
module.exports = [uno,dos,tres];      // 2 exporta array de funciones

exports.one = uno;                    // 3 objeto literal con el atributo "one" con el valor funcion uno

const Exportaciones = {};
Exportaciones.one = uno;
Exportaciones.two = dos;
Exportaciones.three = tres;           // 4 exporta el objeto literal agregando esos atributos con las funciones
module.exports = Exportaciones;

*/