import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalViajeComponent } from 'src/app/components/modal-viaje/modal-viaje.component';

@Component({
  selector: 'app-viaje-actual',
  templateUrl: './viaje-actual.page.html',
  styleUrls: ['./viaje-actual.page.scss'],
})
export class ViajeActualPage implements OnInit {

  ngOnInit(): void {
      console.log("hola");
  }

  constructor(public modalController: ModalController) {}

  async openPassengerModal() {
    const modal = await this.modalController.create({
      component: ModalViajeComponent, // Reemplaza con el nombre de tu componente modal
      componentProps: {
        passengers: ['Juan Carlos Correa', 'Barney Gómez'], // Nombres de los pasajeros inventados
      },
    });

    return await modal.present();
  }
}
