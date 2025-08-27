import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/header/header.component';
import { HeroComponent } from "./modules/hero/hero.component";
import { ShowsComponent } from "./modules/shows/shows.component";
import { CardsComponent } from './modules/cards/cards.component';
import { CollapseComponent } from './modules/collapse/collapse.component';
import { FooterComponent } from './modules/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, ShowsComponent, CardsComponent,CollapseComponent, FooterComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix';
  constructor(private renderer: Renderer2) {} 

  ngOnInit() {
    if (typeof document !== 'undefined') {
      this.renderer.setStyle(document.body, 'background-color', 'black');
    }
  }
}
