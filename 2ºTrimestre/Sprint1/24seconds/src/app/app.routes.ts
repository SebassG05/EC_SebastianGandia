import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HeroSectionComponent } from './components/home/hero-section/hero-section.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'results', component: HeroSectionComponent, data: { type: 'results' } },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirigir cualquier ruta no encontrada a la página principal
];
