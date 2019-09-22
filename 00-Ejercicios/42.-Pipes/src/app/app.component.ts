import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'pipes';
    nombre = 'Ricardo';
    nombreCompleto = 'aLan RiCardo Serrano pucheta';
    arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    PI = 3.14159265359;
    proporcion = 0.45679;
    precio = 150000.5;

    heroe = {
        nombre: 'Logan',
        clave: 'Wolverine',
        edad: 500,
        direccion: {
            calle: 'Primera',
            casa: '19'
        }
    };
    valorDePromesa = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Llegó la data'), 3500);
    });
    fecha = new Date();
}

