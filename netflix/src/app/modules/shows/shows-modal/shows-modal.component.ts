import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-shows-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shows-modal.component.html',
  styleUrl: './shows-modal.component.scss'
})
export class ShowsModalComponent {
  constructor(private modalService: NgbModal) {}
  @Input() selectedShow: any = {};
ngOnit(){
  console.log("Ye modal ka data hai" + this.selectedShow)
}
  close(){
    this.modalService.dismissAll()
  }
  getShortDescription(description: string): string {
    if (!description) {
      return '';
    }
    const words = description.split(' ').slice(0, 40).join(' ');
    return `${words}...`;
  }
  getYear(releaseDate: string): string {
    if (!releaseDate) {
      return '';
    }
    return releaseDate.split('-')[0]; 
  }
  
}
