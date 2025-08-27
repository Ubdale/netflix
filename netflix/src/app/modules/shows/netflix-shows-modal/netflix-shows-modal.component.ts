import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-netflix-shows-modal',
  templateUrl: './netflix-shows-modal.component.html',
  standalone: true,
  imports:[],
  styleUrls: ['./netflix-shows-modal.component.scss']
})
export class NetflixShowsModalComponent {
  constructor(private modalService: NgbModal) {}
  @Input() selectedShow: any = {};  // Receive the selected show object

close(){
  this.modalService.dismissAll()
}
getShortDescription(description: string): string {
  if (!description) {
    return '';
  }
  const words = description.split(' ').slice(0, 40).join(' ');
  return `${words}...`; // Add ellipsis to indicate truncation
}

getYear(releaseDate: string): string {
  if (!releaseDate) {
    return '';
  }
  return releaseDate.split('-')[0]; // Extract the year part
}

getRating(rating: number): number {
  if (!rating) {
    return 0; // Return 0 if the rating is invalid
  }
  return Math.floor(rating * 10) / 10; // Keep only one decimal place
}


}
