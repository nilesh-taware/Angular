import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  isLoggedIn = false;
  message = '';

  constructor(@Inject(PLATFORM_ID)private platformId:object) {
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem('key','value');
    }
    // Check if the user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.username = storedUser;
      this.isLoggedIn = true;
    }
  }

  login() {
    if (this.username === 'admin' && this.password === 'pass123') {
      localStorage.setItem('user', this.username);
      this.isLoggedIn = true;
      this.message = '';
    } else {
      this.message = 'Invalid username or password';
    }
  }


  logout() {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
    this.message = 'You have been logged out successfully!';
  }

}
