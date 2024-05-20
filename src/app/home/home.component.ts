import { Component } from '@angular/core';
import { AgregarHorasComponent } from '../agregar-horas/agregar-horas.component';
import { GestionHorasComponent } from '../gestion-horas/gestion-horas.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AgregarHorasComponent,GestionHorasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  mostrarAgregarHoras = false;
  mostrarGestionHoras = true;

  toggleComponent(componente: string) {
    this.mostrarAgregarHoras = componente === 'agregarHoras';
    this.mostrarGestionHoras = componente === 'gestionHoras';
  }
}
