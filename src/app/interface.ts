export interface RegistroUsuario {
    email: string;
    phone: number;
    firstName: string;
    lastName: string;
    address: string;
    password: string;
    confirmPassword: string;
    userType: 'conductor' | 'pasajero';
}