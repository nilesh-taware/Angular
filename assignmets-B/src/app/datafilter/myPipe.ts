import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name:'myCase',
})
export class myClassPipe implements PipeTransform{
  transform(value: string):string {
    return value.toLowerCase().replace(/ /g, '-');
  }

}

