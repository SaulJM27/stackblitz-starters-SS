import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { GestionHorasComponent } from './gestion-horas/gestion-horas.component';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gestion', component: GestionHorasComponent },
  { path: 'listAlumnos', component: AlumnoListComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
];
