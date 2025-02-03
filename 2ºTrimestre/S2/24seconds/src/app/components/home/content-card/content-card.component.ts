import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService, Shoe } from '../../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ContentCardComponent {
  @Input() shoe: Shoe = {
    id: 0,
    name: '',
    brand: '',
    price: 0,
    image: '',
    description: '',
    bestSeller: false,
    category: '',
    rating: 0
  };

  constructor(private serviceService: ServiceService, private router: Router) {}

  addToCart(shoe: Shoe) {
    this.serviceService.addToCart(shoe);
    console.log(`✅ ${shoe.name} agregado al carrito.`);
  }

  addToComparison(shoe: Shoe) {
    this.serviceService.addToComparison(shoe);
    this.router.navigate(['/compare']);
  }
}
