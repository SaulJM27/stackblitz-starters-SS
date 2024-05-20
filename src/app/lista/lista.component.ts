import { Component } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent {
  public total: number = 4;
  public listaUsers: ListaUsuarios = new ListaUsuarios();
  public frmLista!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmLista = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }
  public agregar() {
    const id = parseInt(this.frmLista.get('id')?.value);
    const name = this.frmLista.get('name')?.value;

    this.listaUsers.agregar(new Usuario(id, name));
    this.total++;

    this.frmLista.reset();
  }

  public eliminar(i: number): void {
    this.listaUsers.remove(i);
  }

  public onSubmit(): void {
    this.agregar();
  }
}

class Usuario {
  public id!: number;
  public name: String = '';

  constructor(id: number, name: String) {
    this.id = id;
    this.name = name;
  }
}

class ListaUsuarios {
  public users: Usuario[] = [];

  constructor() {
    this.get();
  }

  public agregar(user: Usuario) {
    this.users.push(user);
    this.save();
    this.get();
  }
  public remove(index: number) {
    this.users.splice(index, 1);
    this.save();
  }
  public save() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  public get() {
    const usersFromLocal = JSON.parse(localStorage.getItem('users')!);
    this.users.splice(0);
    for (let user of usersFromLocal) {
      this.users.push(new Usuario(user.id, user.name));
    }
  }
}
