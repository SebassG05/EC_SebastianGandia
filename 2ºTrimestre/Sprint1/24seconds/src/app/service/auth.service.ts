import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly validPassword = '4dA1Ts_2425';

  constructor() { }

  validateCredentials(email: string, password: string): boolean {
    return password === this.validPassword;
  }

  checkEmailDuplication(email: string): Observable<boolean> {
    const duplicateEmails = ['duplicate@example.com'];
    return of(duplicateEmails.includes(email)).pipe(delay(1000));
  }

  checkUsernameDuplication(username: string): Observable<boolean> {
    const duplicateUsernames = ['duplicateUser'];
    return of(duplicateUsernames.includes(username)).pipe(delay(1000));
  }

  register(data: any): Observable<void> {
    return of().pipe(delay(1000)); // Simula una respuesta exitosa
  }

  sendPasswordResetLink(email: string): Observable<boolean> {
    const registeredEmails = ['user@example.com', 'test@example.com'];
    return of(registeredEmails.includes(email)).pipe(delay(1000));
  }

}
