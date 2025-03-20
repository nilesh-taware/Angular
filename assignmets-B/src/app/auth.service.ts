import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private staticUsername = 'faculty123';
  private staticPassword = 'password123';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === this.staticUsername && password === this.staticPassword) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  //constructor() { }
}
