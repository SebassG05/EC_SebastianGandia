import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  standalone: true
})
export class NotificationComponent implements OnInit {
  @Input() message!: string;

  ngOnInit(): void {
    setTimeout(() => {
      this.closeNotification();
    }, 3000);
  }

  closeNotification(): void {
    const notification = document.querySelector('.notification');
    if (notification) {
      notification.remove();
    }
  }
}
