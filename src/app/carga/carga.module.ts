import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaComponent } from './carga/carga.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CargaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CargaComponent
  ]
})
export class CargaModule { }
