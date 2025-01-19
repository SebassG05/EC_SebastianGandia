import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService, Shoe } from '../../../service/service.service';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.css'],
  imports: [CommonModule]
})
export class CartPreviewComponent implements OnInit {
  cartItems: Shoe[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getCart().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(shoeId: number): void {
    this.serviceService.removeFromCart(shoeId);
  }
}
