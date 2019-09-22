import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): any {
        value = value.toLowerCase();
        if (todas) {
            let palabrasArr = value.split(' ');

            palabrasArr = palabrasArr.map((word: any) => {
                return word[0].toUpperCase() + word.slice(1);
            });

            return palabrasArr.join(' ');
        } else {

            return value[0].toUpperCase() + value.slice(1);

        }

    }
}
