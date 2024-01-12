import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; // Agrega esta línea

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  destino: string = ''; // Asigna un valor inicial o marca como opcional añadiendo '?'
  fecha: string = ''; // Asigna un valor inicial o marca como opcional añadiendo '?'
  asientosDisponibles: number = 1; // Asigna un valor inicial o marca como opcional añadiendo '?'
  minDate: string;

  constructor(private toastController: ToastController, private router: Router) { 
    // Configurar la fecha mínima como hoy
    const today = new Date();
    this.minDate = today.toISOString();

    // Inicializar la propiedad fecha con la fecha mínima
    this.fecha = this.minDate;
  }

  ngOnInit() {
  }

  
  
  realizarCompra() {
    // Lógica de compra aquí
    // Puedes mostrar un mensaje de éxito utilizando una alerta de Ionic
    alert('¡Compra Exitosa!');
      // Navegar a la página "terminado"
  this.router.navigate(['/terminado']);

  }
}
