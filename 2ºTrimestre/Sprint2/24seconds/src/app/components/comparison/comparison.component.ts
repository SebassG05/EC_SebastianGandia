import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService, Shoe } from '../../service/service.service'; // Corrected path

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ComparisonComponent implements OnInit {
  comparisonItems: Shoe[] = [];

  constructor(@Inject(ServiceService) private serviceService: ServiceService) {}

  ngOnInit() {
    this.serviceService.getComparisonItems().subscribe((items: Shoe[]) => {
      this.comparisonItems = items;
    });
  }
}
