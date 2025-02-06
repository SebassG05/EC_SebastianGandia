import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // ✅ Importa HttpClientModule
import { WeatherDisplayComponent } from '../weather-display/weather-display.component';
import { WeatherSearchComponent } from '../weather-search/weather-search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, WeatherDisplayComponent, WeatherSearchComponent]  // ✅ Usa HttpClientModule
})
export class HomeComponent {}
