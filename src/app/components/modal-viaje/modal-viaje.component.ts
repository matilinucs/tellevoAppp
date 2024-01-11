import { Component, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-viaje',
  templateUrl: './modal-viaje.component.html',
  styleUrls: ['./modal-viaje.component.scss'],
})
export class ModalViajeComponent {
  @Input() passengers: string[];
  arrivedPassengers: Set<string> = new Set<string>();

  constructor(
    public modalController: ModalController,
    public alertController: AlertController
  ) {
    this.passengers = [];
  }

  closeModal() {
    this.modalController.dismiss();
  }

  markPassengerInDestination(passenger: string) {
    // Agregar al conjunto de pasajeros en destino
    this.arrivedPassengers.add(passenger);
  
    // Verificar si todos los pasajeros están en destino
    if (this.passengers.every((p) => this.arrivedPassengers.has(p))) {
      this.showTripCompletedAlert(); // Llamar a la función para mostrar la alerta
    }
  }
  

  isPassengerArrived(passenger: string): boolean {
    // Verificar si el pasajero está en destino
    return this.arrivedPassengers.has(passenger);
  }

  async showTripCompletedAlert() {
    const alert = await this.alertController.create({
      header: 'Viaje Terminado',
      message: 'Todos los pasajeros han llegado a destino.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
