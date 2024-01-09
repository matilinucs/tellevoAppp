import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RegistroUsuario } from './interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

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


  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.checkIfUserIsAuthenticated()) {
      // El usuario está autenticado, permite el acceso a la ruta
      return true;
    } else {
      // El usuario no está autenticado, redirige a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }

  private checkIfUserIsAuthenticated(): boolean {
    // Comprobar si existe un email almacenado en Local Storage
    const usuarioAlmacenado = localStorage.getItem(this.registroUsuario.email);
    ;
    return !!usuarioAlmacenado; // Devuelve true si 'email' existe, false en caso contrario
  }
}
