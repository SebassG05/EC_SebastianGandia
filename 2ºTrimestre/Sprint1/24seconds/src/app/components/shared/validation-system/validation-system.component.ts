import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validation-system',
  templateUrl: './validation-system.component.html',
  styleUrls: ['./validation-system.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ValidationSystemComponent {

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
