import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceLongString',
  standalone: true,
})
export class SliceLongStringPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    let separator: string = args[0] ? args[0] : ' > '; // Якщо знадобіться розділити стоку за іншим символом
    let splitedArray: string[] = value.split(separator);
    if (splitedArray.length > 2) {
      return `${splitedArray[0]} > ... > ${splitedArray[splitedArray.length - 1]}`;
    }
    return value;
  }
}
