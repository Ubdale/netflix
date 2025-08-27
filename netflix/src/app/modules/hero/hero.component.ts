import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('bgVideoElement') bgVideoElement!: ElementRef;
  isPlayButton: boolean = false;  // Initially show the play button
  isPauseButton: boolean = true;

  togglePlayButton(): void {
    if (this.videoElement.nativeElement.paused) {
      this.videoElement.nativeElement.play();
      this.bgVideoElement.nativeElement.play();
      this.isPlayButton = false;  // Hide play button
      this.isPauseButton = true;  // Show pause button
    }
  }

  togglePauseButton(): void {
    if (!this.videoElement.nativeElement.paused) {
      this.videoElement.nativeElement.pause();
      this.bgVideoElement.nativeElement.pause();
      this.isPlayButton = true;   // Show play button
      this.isPauseButton = false; // Hide pause button
    }
  }
}
