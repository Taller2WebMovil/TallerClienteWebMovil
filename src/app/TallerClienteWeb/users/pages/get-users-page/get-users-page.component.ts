import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-users-page',
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './get-users-page.component.html',
  styleUrl: './get-users-page.component.css',
  providers: [UserService]
})
export class GetUsersPageComponent {
  email: string = '';
  usuarioExist: boolean | null = null;

  constructor(private userService: UserService) {}

  searchUser(): void {
    this.userService.getUsuarioByEmail(this.email).subscribe({
      next: (response) => {
        this.usuarioExist = true;
      },
      error: () => {
        this.usuarioExist = false;
      }
    });
  }

}
