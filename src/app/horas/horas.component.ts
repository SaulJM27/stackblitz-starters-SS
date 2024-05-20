import { Component } from '@angular/core';

@Component({
  selector: 'app-horas',
  standalone: true,
  imports: [],
  templateUrl: './horas.component.html',
  styleUrl: './horas.component.css',
})
export class HorasComponent {
  alumnoSeleccionado!: Alumno;

  a1: Alumno = new Alumno(
    'Maritza',
    'Ing. Computacion',
    '2818699870',
    '21010008',
    6,
    'maritzamedel2@gmail.com',
    156
  );
  a2: Alumno = new Alumno(
    'Anny',
    'Ing. Computacion',
    '2818699870',
    '21010022',
    6,
    'anny@gmail.com',
    156
  );
  a3: Alumno = new Alumno(
    'Cesar',
    'Ing. Computacion',
    '2818699870',
    '21010040',
    6,
    'cesar@gmail.com',
    156
  );
  a4: Alumno = new Alumno(
    'Saul',
    'Ing. Computacion',
    '2818699870',
    '21010080',
    6,
    'saul@gmail.com',
    156
  );

  listaAlumnos: ListaAlumnos = new ListaAlumnos();

  seleccionarAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
  }
}

class Alumno {
  constructor(
    private nombre: String,
    private carrera: String,
    private telefono: String,
    private matricula: String,
    private semestre: number,
    private correoElectronico: String,
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
  // Setters
  setNombre(nombre: String) {
    this.nombre = nombre;
  }

  setCarrera(carrera: String) {
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

  obtenerDatos() {
    return this;
  }
}

class ListaAlumnos {
  public alumnos: Alumno[] = [];

  constructor() {
    //this.get();
  }

  public agregar(alumno: Alumno) {
    this.alumnos.push(alumno);
    //this.save();
    //this.get();
  }
  public remove(index: number) {
    this.alumnos.splice(index, 1);
    //this.save();
  }
  /*public save() {
    localStorage.setItem('users', JSON.stringify(this.alumnos));
  }
  public get() {
    const usersFromLocal = JSON.parse(localStorage.getItem('users')!);
    this.alumnos.splice(0);
    for (let user of usersFromLocal) {
      this.alumnos.push(new Alumno(user.id, user.name));
    }
  }*/
}
