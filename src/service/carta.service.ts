import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartaService {
    private _guardarBtn: HTMLElement;
    private _verLocalStorageBtn: HTMLElement;


  constructor() { 
    this._guardarBtn = document.getElementById('guardar');
    this._verLocalStorageBtn = document.getElementById('ver_local_storage');

    this._guardarBtn.addEventListener('click', () => this.guardarEnLaBaseDeDatos());
    this._verLocalStorageBtn.addEventListener('click', () => this.verLocalStorage()); 
  }

     // Guarda los datos del formulario en el Local Storage
     guardarEnLaBaseDeDatos() {
      const nombreAlumnoValue = this.nombreAlumno;
      const matriculaValue = this.matricula;
      const carreraAlumnoValue = this.carreraAlumno;
      const institucionValue = this.institucion;
      const supervisorValue = this.supervisor;
      const fechaInicioValue = this.fechaInicio;
      const fechaFinValue = this.fechaFin;
      const fechaExtensionValue = this.fechaExtension;

      // Campos obligatorios están completos?
      if (
         nombreAlumnoValue === '' || matriculaValue === '' ||
         carreraAlumnoValue === '' || institucionValue === '' || supervisorValue === '' ||
         fechaInicioValue === '' || fechaFinValue === '' || fechaExtensionValue === ''
      ) {
          alert('Por favor, complete todos los campos obligatorios antes de guardar la carta.');

      } else {


          // Crear un objeto con los datos a guardar
          const cartaData = {
              nombreAlumno: nombreAlumnoValue,
              matricula: matriculaValue,
              carreraAlumno: carreraAlumnoValue,
              institucion: institucionValue,
              supervisor: supervisorValue,
              fechaInicio: fechaInicioValue,
              fechaFin: fechaFinValue,
              fechaExtension: fechaExtensionValue
          };

          // Convertir el objeto a JSON y almacenarlo en el Local Storage
          localStorage.setItem('carta_liberacion_servicio_social', JSON.stringify(cartaData));
          alert('Información guardada en el Local Storage.');
      }
  }

  // Método para mostrar datos
  verLocalStorage() {
      const cartaGuardada = localStorage.getItem('carta_liberacion_servicio_social');
      if (cartaGuardada) {
          const carta = JSON.parse(cartaGuardada);
          alert('Información guardada en el Local Storage:\n\n' + JSON.stringify(carta, null, 2));
      } else {
          alert('No hay información guardada en el Local Storage.');
      }
  }
}
