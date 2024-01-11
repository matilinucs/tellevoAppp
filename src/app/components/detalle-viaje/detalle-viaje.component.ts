import { Component, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-viaje',
  templateUrl: './detalle-viaje.component.html',
  styleUrls: ['./detalle-viaje.component.scss'],
})
export class NombreDelModalComponent {

  @Input() conductor: string = "";
  @Input() horaSalida: string = ""; // Hora de salida del viaje
  @Input() pasajerosActuales: number = 0; // Cantidad actual de pasajeros
  @Input() pasajerosMaximos: number = 0; // Cantidad máxima de pasajeros
  @Input() tarifa: number = 0; // Valor de la tarifa

  constructor(private modalController: ModalController, private alertController:AlertController) { }

  cerrarModal() {
    this.modalController.dismiss();
  }

  async reservarPasaje() {
    // Lógica para reservar el pasaje
    console.log('Pasaje reservado para el viaje con salida a las:', this.horaSalida);

    const alert = await this.alertController.create({
      header: 'Reserva Confirmada',
      message: 'Viaje reservado exitosamente.',
      buttons: ['OK']
    });

    await alert.present();
    this.modalController.dismiss(); // Opcional: cierra el modal después de mostrar la alerta
  }
}
