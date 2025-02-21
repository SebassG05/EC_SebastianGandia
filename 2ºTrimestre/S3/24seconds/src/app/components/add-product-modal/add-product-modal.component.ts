import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService, Shoe } from '../../service/service.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AddProductModalComponent implements OnInit {
  shoes: Shoe[] = [];
  @Output() productSelected = new EventEmitter<Shoe>();
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getShoes().subscribe(shoes => {
      this.shoes = shoes;
    });
  }

  selectProduct(shoe: Shoe): void {
    this.productSelected.emit(shoe);
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
