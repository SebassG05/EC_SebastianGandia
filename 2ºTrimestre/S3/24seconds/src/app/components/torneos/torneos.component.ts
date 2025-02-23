import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-torneos',
  templateUrl: './torneos.component.html',
  styleUrls: ['./torneos.component.css'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent] // Importa los componentes necesarios
})
export class TorneosComponent {}
