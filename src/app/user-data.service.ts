import { Injectable } from '@angular/core';
import { RegistroUsuario } from 'src/app/interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData: RegistroUsuario | null = null;

  setUserData(data: RegistroUsuario) {
    this.userData = data;
  }

  getUserData(): RegistroUsuario | null {
    return this.userData;
  }
}
