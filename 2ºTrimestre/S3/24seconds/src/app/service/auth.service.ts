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
    console.log(`El usuario ${data.username} ha sido registrado.`);
    return of().pipe(delay(1000)); // Simula una respuesta exitosa
  }

  sendPasswordResetLink(email: string): Observable<boolean> {
    const registeredEmails = ['user@example.com', 'test@example.com'];
    const isRegistered = registeredEmails.includes(email);
    if (!isRegistered) {
      console.log(`El correo ${email} no está registrado.`);
    } else {
      console.log(`El email ${email} ha intentado recuperar su contraseña.`);
    }
    return of(isRegistered).pipe(delay(1000));
  }

  registerUser(data: any): Observable<void> {
    if (data.username && data.email && data.password) {
      console.log(`El usuario ${data.username} ha sido registrado con éxito.`);
      return of().pipe(delay(1000)); // Simula una respuesta exitosa
    } else {
      console.log('Datos de registro inválidos.');
      return of().pipe(delay(1000)); // Simula una respuesta fallida
    }
  }
}
