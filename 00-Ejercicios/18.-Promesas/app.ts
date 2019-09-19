let prom1:any = new Promise( function (resolve:any, reject:any) {
    setTimeout(()=>{
        console.log("Promesa Terminada");

        // Termina bien
        resolve();

        //Termina mal

        // reject();
    })
});

prom1.then(function (res:any) {
    console.log("Ejecutarme cuando se termina bien!");
})
.catch(function (error:any) {
    console.error("Ejecutarme cuando termina mal");
})
