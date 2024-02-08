import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyExchange' })
export class CurrencyExchangePipe implements PipeTransform {
  exchangeRate = 74.83; // USD to INR exchange rate

  transform(value: number): string {
    return `₹${(value * this.exchangeRate).toFixed(2)}`;
  }
}