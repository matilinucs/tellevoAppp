import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
import { RegistroUsuario } from 'src/app/interface';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

  constructor(private router: Router, private userDataService: UserDataService) { } // Inyecta el servicio aquí

  ngOnInit() {
    console.log("gkr");
  }

  iniciarSesion() {
    const usuarioAlmacenado = localStorage.getItem(this.registroUsuario.email);
    if (usuarioAlmacenado) {
      const datosUsuario = JSON.parse(usuarioAlmacenado);
      if (datosUsuario.password === this.registroUsuario.password) {
        console.log("Inicio de sesión exitoso");

        // Almacena los datos del usuario en el servicio
        this.userDataService.setUserData(datosUsuario);

        // Redirige al usuario a la página de perfil o home
        this.router.navigateByUrl('/viajes');
      } else {
        console.log("Contraseña incorrecta");
      }
    } else {
      console.log("Usuario no encontrado");
    }
  }

<<<<<<< HEAD
  navegarARegistro() {
    this.router.navigateByUrl('/register');
  }
=======
  irARegistro(): void {
    // Redirige a la página de registro
    this.router.navigate(['/register']);
  }



>>>>>>> 559c9aff5b00a5b1eeeb6677382c301c5600e145
}
