import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-carta',
  standalone: true,
  imports: [],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent {
  /*public carta: FormGroup;
  public cartaForm: FormControl = new FormControl();

  constructor(private fb: FormBuilder) {
    this.carta = this.fb.group({
      epys: ['', Validators.required],
      subjefe: ['', Validators.required],
      nombre_alumno: ['', Validators.required],
      matricula: ['', Validators.required],
      carrera_alumno: ['', Validators.required],
      institucion: ['', Validators.required],
      supervisor: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      fecha_extension: ['', Validators.required],
    });
  }

  guardar() {
    if (this.cartaForm.valid) {
      localStorage.setItem('cartaData', JSON.stringify(this.cartaForm.value));
      alert('Datos guardados en el almacenamiento local.');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  verDatos() {
    const data = localStorage.getItem('cartaData');
    if (data) {
      console.log(JSON.parse(data));
    } else {
      console.log('No hay datos guardados.');
    }
  }*/
}
