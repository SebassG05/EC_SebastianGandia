import { Component, NgZone, OnInit, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { TournamentCardComponent } from '../tournament-card/tournament-card.component';
import { NotificationComponent } from '../notification/notification.component'; // Importa el nuevo componente

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
  imports: [CommonModule, NavbarComponent, FooterComponent, TournamentCardComponent] // Elimina NotificationComponent
})
export class TorneosComponent implements OnInit {
  tournaments: Tournament[] = [
    {
      name: 'Torneo 1',
      description: 'Un emocionante torneo de baloncesto 3x3 donde equipos de todo el país compiten por el título. ¡Ven y disfruta del mejor baloncesto en un formato rápido y dinámico!',
      startDate: new Date('2025-07-3'),
      endDate: new Date('2025-07-19'),
      image: 'assets/images/torneo1.png'
    },
    {
      name: 'Torneo 2',
      description: '¡Únete a la gran fiesta del baloncesto en este torneo que se celebra ininterrumpidamente desde 2018 y que, en 2025, vuelve con más fuerza que nunca!',
      startDate: new Date('2025-02-21'),
      endDate: new Date('2025-02-25'),
      image: 'assets/images/torneo2.png'
    },
    {
      name: 'Torneo 3',
      description: 'Un torneo de baloncesto juvenil que reúne a los mejores equipos sub-18 de la región. ¡Ven a apoyar a las futuras estrellas del baloncesto!',
      startDate: new Date('2025-02-21'),
      endDate: new Date('2025-05-25'),
      image: 'assets/images/torneo3.png'
    },
    // ...otros torneos...
  ];

  enrolledTournaments: Tournament[] = [];

  constructor(private ngZone: NgZone, private viewContainerRef: ViewContainerRef) {}

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

  enroll(tournament: Tournament): void {
    const alreadyEnrolled = this.enrolledTournaments.some(t => t.name === tournament.name);
    if (alreadyEnrolled) {
      this.showNotification(`Ya estás inscrito en ${tournament.name}`);
    } else {
      this.enrolledTournaments.push(tournament);
      this.showNotification(`Te has inscrito en ${tournament.name}`);
    }
  }

  showNotification(message: string): void {
    const componentRef = this.viewContainerRef.createComponent(NotificationComponent);
    componentRef.instance.message = message;
    setTimeout(() => {
      componentRef.destroy();
    }, 3000);
  }

  formatDateWithoutYear(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('es-ES', options).format(date);
  }
}
