import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
  standalone: true
})
export class TestPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    return 123;
  }

}
