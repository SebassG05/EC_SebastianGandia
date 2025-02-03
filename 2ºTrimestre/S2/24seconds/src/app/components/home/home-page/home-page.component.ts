import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ProductFilterComponent,
    HeroSectionComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class HomePageComponent {
  constructor(private router: Router) {}

  onFilterChange(filters: any) {
    console.log('Filtros aplicados:', filters);
    // Aquí puedes manejar los filtros y actualizar la vista según sea necesario
  }

  navigateToVote() {
    this.router.navigate(['/vote']);
  }
}
