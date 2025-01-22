import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HeroSectionComponent } from './components/home/hero-section/hero-section.component';
import { ForgotPassFromComponent } from './components/auth/forgot-pass-from/forgot-pass-from.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'results', component: HeroSectionComponent, data: { type: 'results' } },
  { path: 'forgot-password', component: ForgotPassFromComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

