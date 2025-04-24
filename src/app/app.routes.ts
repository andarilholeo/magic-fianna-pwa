import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdicionarEventoComponent } from './adicionar-evento/adicionar-evento.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'novo-evento', component: AdicionarEventoComponent }
];