import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  standalone: true,
  imports: [CommonModule, NgChartsModule]
})
export class VoteComponent {
  shoes = [
    { name: 'Nike LeBron 20', image: 'assets/images/ZapaLebron.png', votes: 0 },
    { name: 'Adidas Harden', image: 'assets/images/ZapaHarden.png', votes: 0 },
    { name: 'Under Armour Curry 10', image: 'assets/images/ZapaCurry.png', votes: 0 },
    { name: 'Puma MB.02', image: 'assets/images/ZapaLamelo.png', votes: 0 },
  ];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartLabels: string[] = this.shoes.map(shoe => shoe.name);
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartConfiguration['data'] = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: this.shoes.map(shoe => shoe.votes),
        label: 'Votes',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  voteForShoe(shoe: any) {
    shoe.votes++;
    this.updateChartData();
    alert(`Has votado por ${shoe.name}`);
  }

  updateChartData() {
    this.barChartData = {
      ...this.barChartData,
      datasets: [
        {
          data: this.shoes.map(shoe => shoe.votes),
          label: 'Votes',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }
      ]
    };
  }
}
