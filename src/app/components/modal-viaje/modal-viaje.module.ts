import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalViajeComponent } from './modal-viaje.component';

@NgModule({
  declarations: [ModalViajeComponent],
  imports: [
    CommonModule,
    IonicModule // Importa IonicModule aquí
  ],
  exports: [ModalViajeComponent]
})
export class ModalViajeModule { }
