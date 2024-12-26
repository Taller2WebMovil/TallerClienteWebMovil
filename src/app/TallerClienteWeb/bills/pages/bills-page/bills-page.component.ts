import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bills-page',
  imports: [NavbarComponent],
  templateUrl: './bills-page.component.html',
  styleUrl: './bills-page.component.css'
})
export class BillsPageComponent {
  constructor(private router: Router) {}
  
    navigateTo(route: string): void {
      this.router.navigate([`/${route}`]);
    }

}
