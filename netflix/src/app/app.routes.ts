import { Routes } from '@angular/router';
import { HeaderComponent } from './modules/header/header.component';
import { HeroComponent } from './modules/hero/hero.component';
import { ShowsComponent } from './modules/shows/shows.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CollapseComponent } from './modules/collapse/collapse.component';
import { CardsComponent } from './modules/cards/cards.component';


export const routes: Routes = [
{path:'header', component:HeaderComponent},
{path:'hero', component:HeroComponent},
{path:'shows', component:ShowsComponent},
{path:'footer', component:FooterComponent},
{path:'collapse', component:CollapseComponent},{path:'cards', component:CardsComponent}
];
