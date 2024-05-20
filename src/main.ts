import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { GestionHorasComponent } from './app/gestion-horas/gestion-horas.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HomeComponent } from './app/home/home.component';
import { MateriasComponent } from './app/materias/materias.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { MenuComponent } from './app/menu/menu.component';
import { LoginComponent } from './app/login/login.component';
import {
  provideRouter,
  RouterOutlet,
  RouterLinkActive,
  RouterLink,
  withComponentInputBinding,
} from '@angular/router';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GestionHorasComponent,
    HomeComponent,
    MateriasComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: 'main.html',
  template: `
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    //provideRouter(rutasPrincipales),
  ],
});
