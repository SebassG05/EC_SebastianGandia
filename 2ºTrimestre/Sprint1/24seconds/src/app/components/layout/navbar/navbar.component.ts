import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService, Shoe } from '../../../service/service.service';
import { CartPreviewComponent } from '../../home/cart-preview/cart-preview.component';
import { LoginFormComponent } from '../../auth/login-form/login-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, CartPreviewComponent, LoginFormComponent] // Import CartPreviewComponent and LoginFormComponent
})
export class NavbarComponent implements OnInit {
  cartItems: Shoe[] = [];
  showCart = false; // Define showCart property
  showLoginModal = false; // Define showLoginModal property

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getCart().subscribe(items => {
      this.cartItems = items;
    });
  }

  toggleCart(): void { // Define toggleCart method
    this.showCart = !this.showCart;
  }

  toggleLoginModal(): void { // Define toggleLoginModal method
    this.showLoginModal = !this.showLoginModal;
  }
}
