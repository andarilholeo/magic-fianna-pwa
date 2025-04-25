import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEventoComponent } from './add-evento/add-evento.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'novo-evento', component: AddEventoComponent }
];