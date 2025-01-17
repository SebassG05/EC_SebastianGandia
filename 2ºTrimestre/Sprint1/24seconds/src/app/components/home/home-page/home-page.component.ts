import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ProductFilterComponent } from '../product-filter/product-filter.component';

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, FooterComponent, HeroSectionComponent, ProductFilterComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  onFilterChange(filters: any) {
    console.log('Filtros aplicados:', filters);
    // Aquí puedes manejar los filtros y actualizar la vista según sea necesario
  }
}
