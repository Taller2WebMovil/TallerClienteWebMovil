import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  imports: [NavbarComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
