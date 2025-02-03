import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-system',
  templateUrl: './notification-system.component.html',
  styleUrls: ['./notification-system.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NotificationSystemComponent {
  @Input() message: string | null = null;
  @Input() errorMessage: string | null = null;

  showNotification(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }
}
