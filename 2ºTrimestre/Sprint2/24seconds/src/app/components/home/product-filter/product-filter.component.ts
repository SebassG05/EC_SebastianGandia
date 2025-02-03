import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ProductFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<any>();
  filterForm: FormGroup;

  categories = ['Basketball', 'Running', 'Casual'];
  brands = ['Nike', 'Adidas', 'Under Armour', 'Puma', 'Jordan', 'New Balance', 'Anta', 'Li-Ning', 'Reebok'];
  ratings = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder, private router: Router) {
    this.filterForm = this.fb.group({
      category: [''],
      brand: [''],
      rating: [0],
      minPrice: [0],
      maxPrice: [500]
    });
  }

  ngOnInit() {}

  applyFilters() {
    const filters = this.filterForm.value;

    const queryParams = {
      category: filters.category || null,
      brand: filters.brand || null,
      rating: filters.rating > 0 ? filters.rating : null,
      minPrice: filters.minPrice || 0,
      maxPrice: filters.maxPrice || 500
    };

    console.log('Filtros aplicados:', queryParams);

    this.filterChange.emit(filters);
    this.router.navigate(['/results'], { queryParams: queryParams });
  }


}
