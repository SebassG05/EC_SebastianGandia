import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService, Shoe } from '../../service/service.service';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-product-comparison',
  templateUrl: './product-comparison.component.html',
  styleUrls: ['./product-comparison.component.css'],
  standalone: true,
  imports: [CommonModule, AddProductModalComponent]
})
export class ProductComparisonComponent implements OnInit {
  selectedProducts: Shoe[] = [];
  showModal: boolean = false;

  constructor(private serviceService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.serviceService.getComparisonItems().subscribe(products => {
      this.selectedProducts = products;
    });
  }

  removeProductFromComparison(product: Shoe): void {
    this.serviceService.removeFromComparison(product.id);
  }

  openAddProductModal(): void {
    this.showModal = true;
  }

  closeAddProductModal(): void {
    this.showModal = false;
  }

  onProductSelected(shoe: Shoe): void {
    this.serviceService.addToComparison(shoe);
    this.closeAddProductModal();
  }
}
