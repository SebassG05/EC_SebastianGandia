import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [CommonModule, FormsModule],  // ❌ Elimina HttpClientModule
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent {
  province: string = '';

  @Output() search = new EventEmitter<string>();

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    this.search.emit(this.province);
  }
}
