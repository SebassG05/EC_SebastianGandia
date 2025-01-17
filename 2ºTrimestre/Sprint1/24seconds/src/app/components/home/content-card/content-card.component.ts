import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ContentCardComponent {
  @Input() shoe: any;

}
