import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { ModalValidacionComponent } from '../modal-validacion/modal-validacion.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required]]
  });

  public isLoginExitoso: boolean = false;
  public isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public modalValidacion: MatDialog
  ) { }

  ngOnInit(): void {
  }

  /**
   * Método encardado de realizar el posteo del login de usuario
   * @returns 
   */
  realizarLogin():void {
    if(this.loginForm.invalid){
      return
    }   
    this.http.post<any>('http://localhost:4000/api/auth/', { email: this.loginForm.get('email')?.value, password: this.loginForm.get('password')?.value }).subscribe(response => {
      
      console.log(response.json());
      
    })
  }

  // Abrir modal de validación
  openModalValidacion() {
    this.modalValidacion.open(ModalValidacionComponent);
  }

}
