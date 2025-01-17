import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.css'],
  standalone: true,
  imports: [CommonModule, ContentCardComponent]
})
export class ContentlistComponent {
  @Input() shoes: any[] = [];
}
