import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HeroSectionComponent } from './components/home/hero-section/hero-section.component';
import { ForgotPassFromComponent } from './components/auth/forgot-pass-from/forgot-pass-from.component';
import { ShoeSelectionComponent } from './components/shoe-selection/shoe-selection.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'results', component: HeroSectionComponent, data: { type: 'results' } },
  { path: 'forgot-password', component: ForgotPassFromComponent },
  { path: 'shoe-selection', component: ShoeSelectionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
