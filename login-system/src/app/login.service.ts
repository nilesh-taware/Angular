import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string = 'admin';
  password:string="admin";

  logged: boolean = false;

  constructor() { }
}
