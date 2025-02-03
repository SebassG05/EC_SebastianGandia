import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { SurveyComponent } from '../../survey/survey.component';

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent, FooterComponent, HeroSectionComponent, ProductFilterComponent, SurveyComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  showSurvey = false;

  onFilterChange(filters: any) {
    console.log('Filtros aplicados:', filters);
    // Aquí puedes manejar los filtros y actualizar la vista según sea necesario
  }

  openSurvey() {
    this.showSurvey = true;
  }

  closeSurvey() {
    this.showSurvey = false;
  }
}
