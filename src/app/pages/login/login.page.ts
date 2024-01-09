import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
import { RegistroUsuario } from 'src/app/interface';


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

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("gkr");
  }

  iniciarSesion() {
    const usuarioAlmacenado = localStorage.getItem(this.registroUsuario.email);
    if (usuarioAlmacenado) {
      const datosUsuario = JSON.parse(usuarioAlmacenado);
      if (datosUsuario.password === this.registroUsuario.password) {
        console.log("Inicio de sesión exitoso");
        this.router.navigateByUrl('/home'); // Redirige al usuario a /home

        
        // Aquí puedes implementar la lógica de navegación o manejo de sesión
      } else {
        console.log("Contraseña incorrecta");
      }
    } else {
      console.log("Usuario no encontrado");
    }
  }

 
  

}
