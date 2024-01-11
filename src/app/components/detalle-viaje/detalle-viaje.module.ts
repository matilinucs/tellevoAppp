import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NombreDelModalComponent } from './detalle-viaje.component';

@NgModule({
  declarations: [NombreDelModalComponent],
  imports: [
    CommonModule,
    IonicModule // Importa IonicModule aquí
  ],
  exports: [NombreDelModalComponent]
})
export class NombreDelModalModule { }
