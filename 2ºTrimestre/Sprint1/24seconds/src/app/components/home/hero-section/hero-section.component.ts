import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ServiceService, Shoe } from '../../../service/service.service';
import { ContentlistComponent } from '../contentlist/contentlist.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  standalone: true,
  imports: [CommonModule, ContentlistComponent]
})
export class HeroSectionComponent implements OnInit {
  @Input() type: 'best-sellers' | 'cheapest' | 'results' = 'best-sellers';
  shoes: Shoe[] = [];
  cheapShoes: Shoe[] = []; // Nueva variable para zapatillas baratas

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.type = data['type'] || 'best-sellers';
    });

    this.route.queryParams.subscribe(params => {
      if (this.type === 'best-sellers') {
        this.serviceService.getBestSellers().subscribe(data => {
          this.shoes = this.getRandomShoes(data, 4);
        });

        // Cargar las zapatillas más baratas (menores a 160€)
        this.serviceService.getCheapShoesUnder(160).subscribe(data => {
          this.cheapShoes = data;
        });

      } else if (this.type === 'cheapest') {
        this.serviceService.getCheapestShoes(4).subscribe(data => {
          this.shoes = data;
        });

      } else if (this.type === 'results') {
        const filters = {
          category: params['category'] || '',
          brand: params['brand'] || '',
          rating: params['rating'] ? +params['rating'] : undefined,
          minPrice: params['minPrice'] ? +params['minPrice'] : 0,
          maxPrice: params['maxPrice'] ? +params['maxPrice'] : 500
        };

        this.serviceService.getFilteredShoes(filters).subscribe(data => {
          this.shoes = data;
        });
      }
    });
  }

  getRandomShoes(array: Shoe[], count: number): Shoe[] {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
