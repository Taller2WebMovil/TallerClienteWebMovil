import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'taller-register-button',
  imports: [],
  templateUrl: './register-button.component.html',
  styleUrl: './register-button.component.css'
})
export class RegisterButtonComponent {
  constructor(private router: Router) {}
    goToRegister() {
      this.router.navigate(['/register']); // Navega a la página de register
    }
}
