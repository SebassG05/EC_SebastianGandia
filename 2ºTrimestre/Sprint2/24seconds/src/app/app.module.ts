import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { HeroSectionComponent } from './components/home/hero-section/hero-section.component';
import { ForgotPassFromComponent } from './components/auth/forgot-pass-from/forgot-pass-from.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    HeroSectionComponent,
    ForgotPassFromComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'results', component: HeroSectionComponent, data: { type: 'results' } },
      { path: 'forgot-password', component: ForgotPassFromComponent },
      { path: 'shoe-selection', loadComponent: () => import('./components/shoe-selection/shoe-selection.component').then(m => m.ShoeSelectionComponent) },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
