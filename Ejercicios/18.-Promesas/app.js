"use strict";
let prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Promesa Terminada");
        // Termina bien
        resolve();
        //Termina mal
        // reject();
    });
});
prom1.then(function (res) {
    console.log("Ejecutarme cuando se termina bien!");
})
    .catch(function (error) {
    console.error("Ejecutarme cuando termina mal");
});
