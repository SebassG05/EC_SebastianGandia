import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeService } from '../../service/shoe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResultsComponent {
  idealShoe: any;
  recommendations: any[] = [];

  constructor(private shoeService: ShoeService, private router: Router) {
    this.idealShoe = this.shoeService.getIdealShoe();
    if (this.idealShoe) {
      this.recommendations = this.shoeService.getRecommendations();
    } else {
      this.recommendations = [];
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
