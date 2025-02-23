import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TournamentCardComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() startDate!: Date;
  @Input() endDate!: Date;
  @Input() isActive!: boolean;
  @Input() image!: string;
  @Output() enroll = new EventEmitter<void>();
}
