import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService, Shoe } from '../../service/service.service';

@Component({
  selector: 'app-shoe-selection',
  templateUrl: './shoe-selection.component.html',
  styleUrls: ['./shoe-selection.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ShoeSelectionComponent implements OnInit {
  shoe: Shoe = {
    id: 0,
    name: '',
    brand: '',
    price: 0,
    image: '',
    description: '',
    bestSeller: false,
    category: '',
    rating: 0,
    sizes: []
  };
  comparisonItems: Shoe[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getComparisonItems().subscribe(items => {
      this.comparisonItems = items;
    });
  }

  addToCart(shoe: Shoe) {
    this.serviceService.addToCart(shoe);
  }

  compareShoe(shoe: Shoe) {
    this.serviceService.addToComparison(shoe);
  }
}
