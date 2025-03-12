import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[CommonModule]
})
export class AppComponent {
  title = 'My new Blog!';
  message: string = '';
loginservice: any;

  constructor(public login: LoginService) { }

  logout() {
    this.login.logged = false;
    this.login.username = '';
    this.message = 'Logged out successfully!';
  }

  verify_userpass(username: string, password: string) {
    if (username === 'admin' && password === 'password') {
      this.login.logged = true;
      this.login.username = username;
      this.message = 'Login successful!';
    } else {
      this.message = 'Invalid username or password';
    }
  }
}
