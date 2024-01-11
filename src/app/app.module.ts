import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { NombreDelModalModule } from 'src/app/components/detalle-viaje/detalle-viaje.module'; // Asegúrate de que la ruta sea correcta
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalViajeModule } from './components/modal-viaje/modal-viaje.module';






@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NombreDelModalModule, ModalViajeModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
