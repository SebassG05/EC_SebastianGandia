import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VoteComponent {
  shoes = [
    { name: 'Nike LeBron 20', image: 'assets/images/ZapaLebron.png', votes: 0 },
    { name: 'Adidas Harden Vol. 7', image: 'assets/images/ZapaHarden.png', votes: 0 },
    { name: 'Under Armour Curry 10', image: 'assets/images/ZapaCurry.png', votes: 0 },
    { name: 'Puma MB.02', image: 'assets/images/ZapaLamelo.png', votes: 0 },
  ];

  voteForShoe(shoe: any) {
    shoe.votes++;
    alert(`Has votado por ${shoe.name}`);
  }
}
