import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../gestion-horas/gestion-horas.component';

@Component({
  selector: 'app-alumno-detalles',
  standalone: true,
  imports: [],
  templateUrl: './alumno-detalles.component.html',
  styleUrl: './alumno-detalles.component.css',
})
export class AlumnoDetallesComponent {
  alumnos: Alumno[] = [];

  constructor(private alumnoService: Alumno) {}

  /*ngOnInit(): void {
    this.alumnos = this.alumnoService.obtenerDatos();
  }*/
}
