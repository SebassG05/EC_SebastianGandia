import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService, Shoe } from '../../../service/service.service';
import { CartPreviewComponent } from '../../home/cart-preview/cart-preview.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, CartPreviewComponent] // Import CartPreviewComponent
})
export class NavbarComponent implements OnInit {
  cartItems: Shoe[] = [];
  showCart = false; // Define showCart property

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getCart().subscribe(items => {
      this.cartItems = items;
    });
  }

  toggleCart(): void { // Define toggleCart method
    this.showCart = !this.showCart;
  }
}
