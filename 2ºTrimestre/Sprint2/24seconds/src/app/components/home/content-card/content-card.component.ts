import { Component, Input, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService, Shoe } from '../../../service/service.service';
import { NotificationSystemComponent } from '../../shared/notification-system/notification-system.component';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
  standalone: true,
  imports: [CommonModule, NotificationSystemComponent]
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
    rating: 0,
    sizes: []
  };

  @ViewChild(NotificationSystemComponent) notificationSystem!: NotificationSystemComponent;

  constructor(@Inject(ServiceService) private serviceService: ServiceService) {}

  addToCart(shoe: Shoe) {
    this.serviceService.addToCart(shoe);
    console.log(`✅ ${shoe.name} agregado al carrito.`);
  }

  removeFromCart(shoe: Shoe) {
    this.serviceService.removeFromCart(shoe);
    console.log(`❌ ${shoe.name} eliminado del carrito.`);
  }

  compareShoe(shoe: Shoe) {
    this.serviceService.addToComparison(shoe);
    this.notificationSystem.showNotification(`${shoe.name} añadido para comparación.`);
    console.log(`Comparando: ${shoe.name}`);
  }
}
