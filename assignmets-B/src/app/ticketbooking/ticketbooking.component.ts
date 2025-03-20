import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticketbooking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticketbooking.component.html',
  styleUrl: './ticketbooking.component.css',
})
export class TicketbookingComponent {
  userName: string = '';
  selectedEvent: string = '';
  selectedSeats: number[] = [];
  bookingConfirmation: string = '';

  eventList: string[] = ['Concert', 'Movie', 'Play', 'Sports Match'];
  seatNumbers: number[] = Array.from({ length: 12 }, (_, i) => i + 1);

  toggleSeatSelection(seat: number) {
    if (this.selectedSeats.includes(seat)) {
      this.selectedSeats = this.selectedSeats.filter((s) => s !== seat);
    } else {
      this.selectedSeats.push(seat);
    }
  }

  bookTicket(event: Event) {
    event.preventDefault();
    if (this.userName && this.selectedEvent && this.selectedSeats.length > 0) {
      this.bookingConfirmation = `Thank you, ${
        this.userName
      }. Your booking for seats ${this.selectedSeats.join(', ')} at the ${
        this.selectedEvent
      } is confirmed.`;
    }
  }

  //Bus Booking logic start's here
  availableBuses = [
    { busId: 'B001', busName: 'Express 101', departureTime: '10:00 AM', arrivalTime: '2:00 PM', seatsAvailable: 30, fare: 500 },
    { busId: 'B002', busName: 'Luxury 202', departureTime: '11:00 AM', arrivalTime: '3:00 PM', seatsAvailable: 20, fare: 800 },
    { busId: 'B003', busName: 'Rapid 303', departureTime: '12:00 PM', arrivalTime: '4:00 PM', seatsAvailable: 25, fare: 600 }
  ];

  // Selected bus details
  selectedBus: any = null;

  // Booking form data
  passengerName: string = '';
  passengerAge: number = 0;
  passengerGender: string = 'Male';
  seatNumber: string = '';

  // Select a bus for booking
  selectBus(bus: any) {
    this.selectedBus = bus;
  }

  // Submit booking form
  onSubmit() {
    if (this.selectedBus && this.passengerName && this.passengerAge && this.seatNumber) {
      alert(`Booking confirmed for ${this.passengerName} on ${this.selectedBus.busName}. Seat Number: ${this.seatNumber}`);
      this.resetForm();
    } else {
      alert('Please fill out all fields and select a bus.');
    }
  }

  // Reset the form
  resetForm() {
    this.selectedBus = null;
    this.passengerName = '';
    this.passengerAge = 0;
    this.passengerGender = 'Male';
    this.seatNumber = '';
  }
}
