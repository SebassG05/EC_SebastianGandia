import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-vote-videos',
  templateUrl: './vote-videos.component.html',
  styleUrls: ['./vote-videos.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class VoteVideosComponent {
  videos: { url: string | ArrayBuffer | null, rating: number }[] = [
    { url: './assets/videos/video1.mp4', rating: 0 },
    { url: './assets/videos/video2.mp4', rating: 0 }
  ];

  constructor(private router: Router) {
    const navigation = window.history.state;
    if (navigation.videoUrl) {
      this.videos.push({ url: navigation.videoUrl, rating: 0 });
    }
  }

  rateVideo(index: number, rating: number) {
    this.videos[index].rating = rating;
  }

  confirmVote() {
    console.log('Votación confirmada:', this.videos);
    alert('¡Votos confirmados con éxito!');
    this.router.navigate(['/']);
  }
}
