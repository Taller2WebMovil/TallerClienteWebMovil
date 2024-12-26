import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-page',
  imports: [NavbarComponent],
  templateUrl: './sales-page.component.html',
  styleUrl: './sales-page.component.css'
})
export class SalesPageComponent {
  constructor(private router: Router) {}
    
      navigateTo(route: string): void {
        this.router.navigate([`/${route}`]);
      }
}
