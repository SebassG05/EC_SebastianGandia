import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { TournamentCardComponent } from '../tournament-card/tournament-card.component';

interface Tournament {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  image: string;
}

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, TournamentCardComponent] // Importa los componentes necesarios
})
export class TorneosComponent implements OnInit {
  tournaments: Tournament[] = [
    {
      name: 'Torneo 1',
      description: 'Descripción del Torneo 1',
      startDate: new Date('2025-02-01'),
      endDate: new Date('2025-02-05'),
      image: 'assets/images/tournament1.png'
    },
    {
      name: 'Torneo 2',
      description: 'Descripción del Torneo 2',
      startDate: new Date('2025-02-21'),
      endDate: new Date('2025-02-25'),
      image: 'assets/images/tournament2.png'
    },
    // ...otros torneos...
  ];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          // Forzar la detección de cambios
        });
      }, 1000 * 60); // Verifica cada minuto
    });
  }

  isActive(tournament: Tournament): boolean {
    const today = new Date();
    return today >= tournament.startDate && today <= tournament.endDate;
  }

  formatDateWithoutYear(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
  }
}
