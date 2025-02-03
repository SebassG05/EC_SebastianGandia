import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { NotificationSystemComponent } from '../../shared/notification-system/notification-system.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NotificationSystemComponent]
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  isLoginForm = false; // Inicialmente mostramos el formulario de registro
  emailError: string | null = null;
  usernameError: string | null = null;
  notificationMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  checkEmailDuplication() {
    const email = this.registerForm.get('email')?.value;
    this.authService.checkEmailDuplication(email).subscribe(isDuplicate => {
      this.emailError = isDuplicate ? 'El correo ya está en uso.' : null;
    });
  }

  checkUsernameDuplication() {
    const username = this.registerForm.get('username')?.value;
    this.authService.checkUsernameDuplication(username).subscribe(isDuplicate => {
      this.usernameError = isDuplicate ? 'El nombre de usuario ya está en uso.' : null;
    });
  }

  toggleForm(isLogin: boolean) {
    this.isLoginForm = isLogin;
  }

  onSubmit() {
    const passwordControl = this.registerForm.get('password');
    if (passwordControl?.invalid) {
      this.notificationMessage = 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un símbolo.';
    } else if (this.registerForm.valid) {
      // Handle form submission
      console.log('Form is valid', this.registerForm.value);
      this.notificationMessage = 'Registro exitoso. Redirigiendo al inicio de sesión...';
      setTimeout(() => {
        this.toggleForm(true); // Switch to login form
      }, 2000);
    }
  }
}
