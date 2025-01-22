import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-pass-from',
  templateUrl: './forgot-pass-from.component.html',
  styleUrls: ['./forgot-pass-from.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ForgotPassFromComponent {
  forgotPasswordForm: FormGroup;
  message: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      this.authService.sendPasswordResetLink(email).subscribe((success) => {
        if (success) {
          this.message = 'Se ha enviado un enlace de recuperación a tu correo.';
        } else {
          this.message = 'El correo no está registrado.';
        }
      });
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
