import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ Importación correcta
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // ✅ Asegura que Angular maneja el servicio automáticamente
})
export class WeatherService {
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzZ2FuZGlhZ3V0aWVycmV6QGFkYWl0cy5lcyIsImp0aSI6IjYyYmRjNWMzLWIxNTMtNDY1MC1hMjRjLWQ3Y2QwMGI1ZTk4NCIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzM3NzQyODAzLCJ1c2VySWQiOiI2MmJkYzVjMy1iMTUzLTQ2NTAtYTI0Yy1kN2NkMDBiNWU5ODQiLCJyb2xlIjoiIn0.LYB4a8Vb-ehnJ9FtVY-NLI1temmV5dvk8Zpk-mPVxYs';
  private apiUrl = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/';

  private weatherDataSubject = new BehaviorSubject<any>(null);
  weatherData$ = this.weatherDataSubject.asObservable();

  constructor(private http: HttpClient) {} // ✅ HttpClient inyectado correctamente


  private formatWeatherData(data: any, province: string) {
    return {
      province,
      temperature: data[0]?.temperatura?.maxima || 'N/A',
      condition: data[0]?.estadoCielo?.descripcion || 'N/A',
      wind: data[0]?.viento?.velocidad || 'N/A',
      icon: this.getWeatherIcon(data[0]?.estadoCielo?.descripcion)
    };
}

private getWeatherIcon(condition: string): string {
  if (condition?.includes('despejado')) return 'assets/icons/sunny.png';
  if (condition?.includes('nubes')) return 'assets/icons/cloudy.png';
  if (condition?.includes('lluvia')) return 'assets/icons/rain.png';
  return 'assets/icons/default.png';
}


  getWeatherByProvince(province: string) {
    const encodedProvince = encodeURIComponent(province);
    const url = `${this.apiUrl}${encodedProvince}?api_key=${this.apiKey}`;

    this.http.get(url).subscribe((data: any) => {
      if (data && data.datos) {
        this.http.get(data.datos).subscribe((forecast: any) => {
          const formattedData = this.formatWeatherData(forecast, province);
          this.weatherDataSubject.next(formattedData);
        });
      }
    });
  }
}
