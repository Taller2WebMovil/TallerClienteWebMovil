import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'taller-finish-register-button',
  imports: [],
  templateUrl: './finish-register-button.component.html',
  styleUrl: './finish-register-button.component.css'
})
export class FinishRegisterButtonComponent {
  constructor(private router: Router) {}
  goMainPage() {
    this.router.navigate(['/main']); // Navega a la página main
  }
}
