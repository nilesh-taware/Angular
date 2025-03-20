import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    name: 'Dr. A. Patel',
    email: 'apatel@jgu.edu',
    department: 'Computer Science',
    role: 'Faculty',
  };

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }

}
