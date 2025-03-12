import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByRate'
})
export class FilterByRatePipe implements PipeTransform {
  transform(products: any[], rate: number): any[] {
    if (!products || !rate) {
      return products;
    }
    return products.filter(product => product.rate === rate);
  }
}
