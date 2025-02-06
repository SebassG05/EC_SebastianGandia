import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home/home.component';

@Component({
  selector: 'app-root',
  template: '<app-home></app-home>', // ✅ Usa HomeComponent en el template
  standalone: true,
  imports: [HomeComponent]
})
export class AppComponent {}
