import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../service/auth.service';
import { NotificationSystemComponent } from '../notification-system/notification-system.component';

@Component({
  selector: 'app-validation-system',
  templateUrl: './validation-system.component.html',
  styleUrls: ['./validation-system.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ValidationSystemComponent {
  validationForm: FormGroup;
  emailError: string | null = null;
  usernameError: string | null = null;
  notificationMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.validationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  checkEmailDuplication() {
    const email = this.validationForm.get('email')?.value;
    this.authService.checkEmailDuplication(email).subscribe(isDuplicate => {
      this.emailError = isDuplicate ? 'El correo ya está en uso.' : null;
    });
  }

  checkUsernameDuplication() {
    const username = this.validationForm.get('username')?.value;
    this.authService.checkUsernameDuplication(username).subscribe(isDuplicate => {
      this.usernameError = isDuplicate ? 'El nombre de usuario ya está en uso.' : null;
    });
  }

  onSubmit() {
    const passwordControl = this.validationForm.get('password');
    if (passwordControl?.invalid) {
      this.notificationMessage = 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un símbolo.';
    } else if (this.validationForm.valid) {
      // Handle form submission
      console.log('Form is valid', this.validationForm.value);
    }
  }
}
