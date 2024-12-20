import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'taller-exit-button',
  imports: [],
  templateUrl: './exit-button.component.html',
  styleUrl: './exit-button.component.css'
})
export class ExitButtonComponent {
  constructor(private router: Router) {}
      goHomePage() {
        this.router.navigate(['/home']); // Navega a la página home
      }
}
