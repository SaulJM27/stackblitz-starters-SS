import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css',
})
export class AlumnosComponent {
  public listaAlumnos: ListaAlumnos = new ListaAlumnos();
  public frmAlumnos!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmAlumnos = this.fb.group({
      alumno: ['', Validators.required],
    });
  }

  public agregarAlumno() {
    const alumno = this.frmAlumnos.get('alumno')?.value;
    this.listaAlumnos.agregar(new Alumno(alumno));
    this.frmAlumnos.reset();
  }
  public onSubmit(): void {
    this.agregarAlumno();
  }
}
class Alumno {
  public nombre!: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
class ListaAlumnos {
  public alumnos: Alumno[] = [];

  /*constructor() {
    this.get();
  }*/

  public agregar(alumno: Alumno) {
    this.alumnos.push(alumno);
    this.save();
    this.get();
  }
  public remove(index: number) {
    this.alumnos.splice(index, 1);
    this.save();
  }

  public save() {
    localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
  }

  public get() {
    const usersFromLocal = JSON.parse(localStorage.getItem('alumnos')!);
    this.alumnos.splice(0);
    for (let alumno of usersFromLocal) {
      this.alumnos.push(new Alumno(alumno.nombre));
    }
  }
}
