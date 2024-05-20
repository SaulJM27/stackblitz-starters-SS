import { Component } from '@angular/core';
import {
  Alumno,
  GestionHorasComponent,
  ListaAlumnos,
} from '../gestion-horas/gestion-horas.component';

@Component({
  selector: 'app-agregar-horas',
  standalone: true,
  imports: [],
  templateUrl: './agregar-horas.component.html',
  styleUrl: './agregar-horas.component.css',
})
export class AgregarHorasComponent {
  alumno!: Alumno;

  constructor(private listaAlumnos: ListaAlumnos) {}
  agregarHoras() {}
}
