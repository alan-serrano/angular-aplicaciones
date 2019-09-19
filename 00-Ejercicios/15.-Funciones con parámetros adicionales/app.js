"use strict";
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
}
/*
- quien es un parámetro obligatorio,
- objeto es un parámetro obligatorio y con un valor por defecto
- momento es un parámetro opcional (como lo hace cualquier parámetro en javascript)
 */
activar("Gordon");
