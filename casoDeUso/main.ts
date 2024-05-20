import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ServicioComponent } from '/casoDeUso/servicio/servicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ServicioComponent],
  template: `
    <app-servicio></app-servicio>
    `,
})
export class App {}

bootstrapApplication(App);
