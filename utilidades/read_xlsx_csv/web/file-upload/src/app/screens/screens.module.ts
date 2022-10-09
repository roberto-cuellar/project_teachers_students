import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { MatComponentsModule } from '../mat-components/mat-components/mat-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalValidacionComponent } from './login/modal-validacion/modal-validacion.component';



@NgModule({
  declarations: [
    LoginComponent,
    ModalValidacionComponent
  ],
  imports: [
    CommonModule,
    MatComponentsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class ScreensModule { }
