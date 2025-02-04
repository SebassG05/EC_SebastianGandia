import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HeroSectionComponent } from './components/home/hero-section/hero-section.component';
import { ForgotPassFromComponent } from './components/auth/forgot-pass-from/forgot-pass-from.component';
import { ProductComparisonComponent } from './components/product-comparison/product-comparison.component';
import { VoteComponent } from './components/vote/vote.component';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { ResultsComponent } from './components/results/results.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'forgot-password', component: ForgotPassFromComponent },
  { path: 'compare', component: ProductComparisonComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
