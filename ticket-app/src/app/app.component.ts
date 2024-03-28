import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ticket-app';
  booking = {
    name: '',
    address: '',
    contactNo: '',
    gender: '',
    bookingDate: '',
    journeyDate: '',
    passengerName: ''
  };

  onSubmit(form: NgForm) {
    console.log('Booking Details:', this.booking);
    // Here you can implement logic to print the e-ticket or save the booking details
  }
}
