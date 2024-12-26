import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';

@Component({
  selector: 'app-get-users-page',
  imports: [NavbarComponent],
  templateUrl: './get-users-page.component.html',
  styleUrl: './get-users-page.component.css'
})
export class GetUsersPageComponent {
  currentUserPage: string;
  constructor() {
    this.currentUserPage = 'Usuarios';
  }
  changePage(page: string) {
    this.currentUserPage = page;
  }

}
