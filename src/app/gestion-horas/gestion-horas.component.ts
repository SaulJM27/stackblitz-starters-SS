import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-gestion-horas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gestion-horas.component.html',
  styleUrl: './gestion-horas.component.css',
})
export class GestionHorasComponent {
  public listaAlumnos: ListaAlumnos = new ListaAlumnos();
  public mostrarAgregar: boolean = false;
  public mostrarGestion: boolean = true;
  alumno!: Alumno;
  public alumnoSeleccionado!: Alumno;
  public horas: FormControl = new FormControl(1);

  constructor() {
    this.listaAlumnos.agregar(
      new Alumno(
        'Maritza',
        'Computación',
        '28186998790',
        '21010008',
        6,
        'maritzamedel2@gmail.com',
        178
      )
    );
    this.listaAlumnos.agregar(
      new Alumno(
        'Anny',
        'Diseño',
        '28186998790',
        '21010042',
        6,
        'anny@gmail.com',
        200
      )
    );
    this.listaAlumnos.agregar(
      new Alumno(
        'Cesar',
        'Zootecnia',
        '28186998790',
        '21010022',
        6,
        'cesar@gmail.com',
        100
      )
    );
    this.getLocalStorage();
  }

  public mostrarAgregarHoras(alumno: Alumno): void {
    this.mostrarAgregar = true;
    this.mostrarGestion = false;
    this.alumnoSeleccionado = alumno;
  }
  public agregarHoras(): void {
    if (this.alumnoSeleccionado !== null) {
      // Lógica para agregar horas
      let horas = this.horas.value;
      if (horas > 4) {
        horas = 4;
      }
      this.alumnoSeleccionado.setHorasServicio(
        this.alumnoSeleccionado.getHorasServicio() + horas
      );
      this.guardarEnLocalStorage();
    }
  }
  public regresar(): void {
    this.mostrarAgregar = false;
    this.mostrarGestion = true;
  }

  public guardarEnLocalStorage(): void {
    localStorage.setItem(
      'listaAlumnos',
      JSON.stringify(
        this.listaAlumnos.alumnos.map((alumno) => alumno.obtenerDatos())
      )
    );
  }

  public getLocalStorage(): void {
    const alumnosLocal = localStorage.getItem('listaAlumnos');
    if (alumnosLocal) {
      const alumnosJSON = JSON.parse(alumnosLocal);
      const alumnosObj: Alumno[] = alumnosJSON.map(
        (alumnoData: any) =>
          new Alumno(
            alumnoData.nombre,
            alumnoData.carrera,
            alumnoData.telefono,
            alumnoData.matricula,
            alumnoData.semestre,
            alumnoData.correoElectronico,
            alumnoData.horasServicio
          )
      );
      alumnosObj.forEach((alumnosObj) => {
        const existeAlumno = this.listaAlumnos.alumnos.find(
          (alumno) => alumno.getMatricula() === alumnosObj.getMatricula()
        );
        if (existeAlumno) {
          existeAlumno.setHorasServicio(alumnosObj.getHorasServicio());
        }
      });
    }
  }
}

export class Alumno {
  constructor(
    private nombre: string,
    private carrera: string,
    private telefono: string,
    private matricula: string,
    private semestre: number,
    private correoElectronico: string,
    private horasServicio: number
  ) {
    this.nombre = nombre;
    this.carrera = carrera;
    this.telefono = telefono;
    this.matricula = matricula;
    this.semestre = semestre;
    this.correoElectronico = correoElectronico;
    this.horasServicio = horasServicio;
  }

  // Getters
  getNombre() {
    return this.nombre;
  }

  getCarrera() {
    return this.carrera;
  }

  getTelefono() {
    return this.telefono;
  }

  getMatricula() {
    return this.matricula;
  }

  getSemestre() {
    return this.semestre;
  }

  getCorreoElectronico() {
    return this.correoElectronico;
  }

  getHorasServicio() {
    return this.horasServicio;
  }
  // Setters
  setNombre(nombre: string) {
    this.nombre = nombre;
  }

  setCarrera(carrera: string) {
    this.carrera = carrera;
  }

  setTelefono(telefono: string) {
    this.telefono = telefono;
  }

  setMatricula(matricula: string) {
    this.matricula = matricula;
  }

  setSemestre(semestre: number) {
    this.semestre = semestre;
  }

  setCorreoElectronico(correoElectronico: string) {
    this.correoElectronico = correoElectronico;
  }
  setHorasServicio(horasServicio: number) {
    this.horasServicio = horasServicio;
  }

  obtenerDatos() {
    return this;
  }
}

export class ListaAlumnos {
  public alumnos: Alumno[] = [];

  public agregar(alumno: Alumno) {
    this.alumnos.push(alumno);
  }
  public remove(index: number) {
    this.alumnos.splice(index, 1);
  }

  getAlumnosComputacion() {
    return this.alumnos.filter(
      (alumno) => alumno.getCarrera() === 'Ingeniería en Computación'
    );
  }

  getAlumnoById(matricula: string) {
    return this.alumnos.find((alumno) => alumno.getMatricula() === matricula);
  }
}
