import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
  standalone: true,
  imports: [CommonModule]  // ❌ Elimina HttpClientModule
})
export class WeatherDisplayComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.weatherData$.subscribe(data => {
      this.weather = data;
    });
  }
}
