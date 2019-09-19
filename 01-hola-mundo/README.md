# Sección 3: Aplicación #1: Hola Mundo

## ¿Qué aprenderemos en esta sección?

Este es un breve resumen de todo lo que veremos a continuación:

1. ¿Qué son los componentes?

Son clases normales con un decorador específico

2. ¿Qué son las directivas estructurales?

Son instrucciones que agregan, eliminan o reemplazan elementos HTML en el template, como ejemplo están las directivas *ngIf y *ngFor.

3. Uso de plunker para nuestra primera interacción con Angular.
4. Trabajando de forma local un proyecto en Angular.
5. Una breve introducción sobre todos los archivos usados en el QuickStart de Angular.
    - Carpeta e2e
        -  Esta carpeta es básicamente para correr las pruebas automáticas
    - node_modules:
        - Todos los módulos de node, estos en sí nos ayudan a montar el live reload server, escuchar los cambios, etc.
        - Unicamente se usan con el fin de desarrollo.
        - En la generación del proyecto no se mudan estos archivos
    - src:
        - Carpeta donde está nuestra aplicación de Angular.
    - .editorconfig
        - Configuración del editor
    - .gitignore
        - Archivo git que se usa para ignorar ciertos archivos que no queremos que se versionen.
    - angular.json
        - Archivos que le dice a Angular cómo es nuestra aplicación y cómo funcionan. Se modificará muy poco.
    - package-lock.json
        - Al instalar cosas en nuestra aplicación deja un rastro en estos archivos, eso no lo tocaremos.
    - package.json
        - Archivo muy importante, se modificará muy poco y con cuidado.
    - README.md
        - Descripción acerca de Angular que se crea de manera automática.
    - tsconfig.json
        - Configuración del compilador de TypeScript.
    - tslint.json
        - Ayudas para escribir código más limpio.

6. Uso de Bootstrap 4 para nuestros estilos.
7. Crear archivos .HTML para que se encarguen de la estructura visual de nuestros componentes.
8. Crearemos una aplicación con 3 componentes re-utilizables.
9. *ngFor y el *ngIf.
- *ngFor.- Directiva que trabaja en base a arreglos (iteración)
- *ngIf.- Directiva que trabaja en base a expresiones que den como resultado un verdadero y un falso.
Al finalizar tendremos un examen teórico para afianzar los conocimientos.


<!-- Información de Angular -->
# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
