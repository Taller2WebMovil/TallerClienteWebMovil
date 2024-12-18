import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'taller-back-home-button',
  imports: [],
  templateUrl: './back-home-button.component.html',
  styleUrl: './back-home-button.component.css'
})
export class BackHomeButtonComponent {
  constructor(private router: Router) {}
    goHome() {
      this.router.navigate(['/home']); // Navega a la página de home
    }
}
