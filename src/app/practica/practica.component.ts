import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-practica',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css',
})
export class PracticaComponent {
  public txtValor = new FormControl('');
  public frmSS!: FormGroup;
  public numCarrera: number = 1;

  constructor(private fb: FormBuilder) {
    /*.txtValor.valueChanges.subscribe((newValue) => {
      alert('i change ' + newValue);
    });*/
    this.frmSS = this.fb.group({
      matricula: ['', Validators.required],
      email: ['', Validators.required],
      carrera: ['', Validators.required],
    });
  }

  public mostrarValor(): void {
    alert(this.txtValor.value);
  }
  public actualizar(): void {
    this.txtValor.setValue('Hola');
  }
  public reset(): void {
    this.txtValor.reset();
  }

  public onSubmit(): void {
    this.numCarrera = parseInt(this.frmSS.get('carrera')!.value);
  }

  public modificarControl(): void {
    let x = this.frmSS.get('email');
    if (x != null) {
      alert(x.value);
      x.setValue('prueba');
    }
  }
}
