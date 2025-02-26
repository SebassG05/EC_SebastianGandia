import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from "../layout/navbar/navbar.component";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  imports: [CommonModule, NavbarComponent]
})
export class VideosComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  videoUrl: string | ArrayBuffer | null = null;
  showNotification: boolean = false;

  constructor(private router: Router) {}

  onUploadClick() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result !== undefined) {
          this.videoUrl = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onRemoveVideo() {
    this.videoUrl = null;
  }

  onSubmitVideo() {
    // Aquí puedes manejar la lógica para subir el video
    console.log('Subir video');
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }

  navigateToVote() {
    this.router.navigate(['/voteVideos'], { state: { videoUrl: this.videoUrl } });
  }
}
