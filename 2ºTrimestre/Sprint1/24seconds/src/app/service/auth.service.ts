import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly validPassword = '4dA1Ts_2425';

  constructor() { }

  validateCredentials(email: string, password: string): boolean {
    // For simplicity, assume any email is valid if the password matches
    return password === this.validPassword;
  }
}
