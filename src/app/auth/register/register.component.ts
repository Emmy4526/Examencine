import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  registerData = {
    email: '',
    password: '',
    confirmPassword: '', // Agregar el campo confirmPassword aquí
  };
  registrationSuccess: boolean = false; // Variable para indicar el éxito del registro

  constructor(private router: Router) {}

  ngOnInit(): void {}

  register() {
    // Realiza cualquier validación adicional aquí si es necesario
    if (
      !this.registerData.email ||
      !this.registerData.password ||
      !this.registerData.confirmPassword // Asegúrate de incluir confirmPassword en la validación
    ) {
      return;
    }

    // Validar si las contraseñas coinciden
    if (this.registerData.password !== this.registerData.confirmPassword) {
      // Mostrar un mensaje de error o realizar alguna acción
      console.log('Las contraseñas no coinciden.');
      return;
    }

    this.isLoading = true;
    // Simulamos el registro con un retraso de 2 segundos
    setTimeout(() => {
      this.isLoading = false;
      this.registrationSuccess = true; // Indicamos que el registro fue exitoso
    }, 2000);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
