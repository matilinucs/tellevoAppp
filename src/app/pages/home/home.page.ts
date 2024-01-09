import { Component, OnInit } from '@angular/core';
import { RegistroUsuario } from 'src/app/interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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

  constructor() { }

  ngOnInit() {

    this.mostrarauth();

  }

  mostrarauth(){
    const usuarioAlmacenado = localStorage.getItem(this.registroUsuario.email);
    console.log(usuarioAlmacenado);
  }
}
