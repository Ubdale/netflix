import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [NgbAccordionModule, CommonModule, FormsModule],
  templateUrl: './collapse.component.html',
  styleUrl: './collapse.component.scss'
})
export class CollapseComponent {
  isRotated: boolean = false;
  isNotRotated: boolean = true;
	items = ['First', 'Second', 'Third'];
  accordian = [
    {
      headerText: 'What is Netflix?',
      bodyText: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
      isRotated: false, // State for icon rotation
    },
    {
      headerText: 'How much does Netflix cost?',
      bodyText: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.`,
      isRotated: false,
    },
    {
      headerText: 'Where can I watch?',
      bodyText: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
      isRotated: false,
    },
    {
      headerText: 'How do I cancel?',
      bodyText: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
      isRotated: false,
    },
    {
      headerText: 'What can I watch on Netflix?',
      bodyText: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
      isRotated: false,
    },
    {
      headerText: 'Is Netflix good for Kids?',
      bodyText: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
      isRotated: false,
    },
  ];

  toggleTransform(item: any) {
    item.isRotated = !item.isRotated;
  }
  
}
