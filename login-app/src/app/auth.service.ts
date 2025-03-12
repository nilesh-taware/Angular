import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Hardcoded credentials for demonstration
    if (username === 'admin' && password === 'admin123') {
      this.isLoggedIn = true;
      this.router.navigate(['/home']); // Redirect to home on successful login
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']); // Redirect to login on logout
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
