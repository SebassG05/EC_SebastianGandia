import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationSystemComponent } from '../../shared/notification-system/notification-system.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NotificationSystemComponent, RegisterFormComponent]
})
export class LoginFormComponent {
  @Input() showLoginModal = false;
  @Output() toggleLoginModal = new EventEmitter<void>();
  loginForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;
  isLoginForm = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onToggleLoginModal() {
    this.toggleLoginModal.emit();
  }

  toggleForm(isLogin: boolean) {
    this.isLoginForm = isLogin;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;
      if (this.authService.validateCredentials(email, password)) {
        // Handle remember me logic
        this.successMessage = 'Inicio de sesión exitoso. Redirigiendo a la página de inicio...';
        setTimeout(() => {
          this.onToggleLoginModal();
          this.router.navigate(['/home']);
        }, 2000);
      } else {
        // Show error message
        this.errorMessage = 'Credenciales inválidas. Por favor, inténtelo de nuevo.';
      }
    }
  }
}
