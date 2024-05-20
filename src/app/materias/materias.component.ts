import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AlumnosComponent } from '../alumnos/alumnos.component';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css',
})
export class MateriasComponent {
  public materia: FormControl = new FormControl();
  public lista: ListaMaterias = new ListaMaterias();
  public frmMaterias!: FormGroup;
  public mostrarAlumnos: boolean = false;
  public mostrarMaterias: boolean = true;

  constructor(private fb: FormBuilder) {
    this.frmMaterias = this.fb.group({
      nombre: ['', Validators.required],
    });
  }

  public agregarMaterias() {
    const nombre = this.frmMaterias.get('nombre')?.value;
    this.lista.agregar(new Materia(nombre));
    this.frmMaterias.reset();
  }

  public eliminarMateria(i: number): void {
    this.lista.remove(i);
  }

  public verAlumnos() {
    this.mostrarAlumnos = true;
    this.mostrarMaterias = false;
  }
  public onSubmit(): void {
    this.agregarMaterias();
  }
}

export class Materia {
  public nombre!: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}
export class ListaMaterias {
  public materias: Materia[] = [];

  constructor() {
    this.get();
  }

  public agregar(materia: Materia) {
    this.materias.push(materia);
    this.save();
    this.get();
  }
  public remove(index: number) {
    this.materias.splice(index, 1);
    this.save();
  }

  public save() {
    localStorage.setItem('materias', JSON.stringify(this.materias));
  }

  public get() {
    const usersFromLocal = JSON.parse(localStorage.getItem('materias')!);
    this.materias.splice(0);
    for (let materia of usersFromLocal) {
      this.materias.push(new Materia(materia.nombre));
    }
  }
}
