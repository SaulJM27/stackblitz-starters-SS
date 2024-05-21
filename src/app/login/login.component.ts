import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public correo: FormControl = new FormControl();
  public password: FormControl = new FormControl();
  
  public mostrarHeader2: boolean = false;
  public mostrarHeader1: boolean = true;

  public loginForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, public router:Router) {
    this.loginForm = this.formBuilder.group({
      correo: [''],
      password:[''],
    });
  }

  public revisar():void{
    alert("enviR");
    this.router.navigate(['/main']);
    /*if(this.loginForm.get('correo')?.value=="marmedel@gmail.com" && this.loginForm.get('password')?.value == "123456"){
      this.mostrarHeader1=false;
      this.mostrarHeader2=true;
     
    }*/
  }
   
}
