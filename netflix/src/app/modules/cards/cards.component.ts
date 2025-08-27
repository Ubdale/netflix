import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

cards = [
  {
    cardTxt: 'Stories tailored to your taste',
    icon: '../../../assets/icons/hand-star-icon.png'
  },
  {
    cardTxt: 'Cancel or switch plans anytime',
    icon: '../../../assets/icons/hands-icon.png'
  },
  {
    cardTxt: 'A place just for kids',
    icon: '../../../assets/icons/heart-icon.png'
  },
  {
    cardTxt: 'For your phone, tablet, laptop and TV',
    icon: '../../../assets/icons/pc-icon.png'
  }
]
}
