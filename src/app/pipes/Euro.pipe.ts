import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro',
})
export class EuroPipe implements PipeTransform {
  transform(value?: number): any {
    if (value) {
      return `${value}€`;
    }
  }
}
