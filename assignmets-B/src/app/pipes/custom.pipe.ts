import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: string, userProperty:string=''): string {
    return userProperty+value.toUpperCase();
  }

}
