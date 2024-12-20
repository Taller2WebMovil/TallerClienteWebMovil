import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'taller-finish-login-button',
  imports: [],
  templateUrl: './finish-login-button.component.html',
  styleUrl: './finish-login-button.component.css'
})
export class FinishLoginButtonComponent {
  constructor(private router: Router) {}
    goMainPage() {
      this.router.navigate(['/main']); // Navega a la página main
    }
}
