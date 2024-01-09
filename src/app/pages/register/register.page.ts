import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
import { AlertController } from '@ionic/angular';
import { RegistroUsuario } from 'src/app/interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registroUsuario: RegistroUsuario = {
    // Inicializa tus propiedades aquí
    email: '',
    phone: 0,
    firstName: '',
    lastName: '',
    address: '',
    password: '',
    confirmPassword: '',
    userType: 'pasajero', // O 'conductor', según tu lógica de negocio
  };

  

  constructor(private alertController:AlertController, private router: Router ) { }
  

  onSubmit(): void {
    // Aquí es donde manejas el envío del formulario
    console.log('Formulario enviado', this.registroUsuario);

    const email = this.registroUsuario.email; // Extrae el email
    
    

    if (localStorage.getItem(email)) {
      // Maneja el caso en que el email ya esté registrado
      console.error('Error: El email ya está registrado.');
      this.mostrarAlerta("email ya ingresado");
      // Aquí podrías, por ejemplo, mostrar un mensaje de error al usuario
    } else {
      // Si el email no está registrado, procede a almacenar los datos
      localStorage.setItem(email, JSON.stringify(this.registroUsuario));
      this.mostrarAlerta("Usuario registrado con éxito.");

      console.log('Usuario registrado con éxito.');
      this.router.navigateByUrl('/login');
     // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
    }
  }

  async mostrarAlerta(mensaje: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Registro',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}

