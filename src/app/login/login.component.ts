import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public correo: FormControl = new FormControl();
  public password: FormControl = new FormControl();

  public loginForm!:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      correo: [''],
      password:[''],
    });
  }

  public revisar():void{
    alert(this.loginForm.get('correo')?.value);
  }
   
}
