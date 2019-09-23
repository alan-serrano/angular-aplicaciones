import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar: boolean = true): string {
    if (activar) {

      return value;

    } else {
      let salida = '';

      for (const i of value) {
        salida += '*';
      }

      return salida;
    }
  }

}
