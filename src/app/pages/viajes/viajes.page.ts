import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NombreDelModalComponent } from 'src/app/components/detalle-viaje/detalle-viaje.component';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log("hola");
  }

  async abrirDetalle(conductor: string, destino: string, horaSalida: string, pasajerosActuales: number, pasajerosMaximos: number, tarifa: number) {
    const modal = await this.modalController.create({
      component: NombreDelModalComponent,
      componentProps: {
        conductor,
        destino,
        horaSalida,
        pasajerosActuales,
        pasajerosMaximos,
        tarifa
      }
    });

    await modal.present();
  }
}
