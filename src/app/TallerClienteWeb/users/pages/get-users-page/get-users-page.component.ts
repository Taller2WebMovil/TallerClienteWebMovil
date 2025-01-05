import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-get-users-page',
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './get-users-page.component.html',
  styleUrl: './get-users-page.component.css',
  providers: [UserService]
})
export class GetUsersPageComponent {
  users: User[] = []; // Todos los usuarios
  filteredUsers: User[] = []; // Usuarios filtrados
  searchTerm: string = ''; // Término de búsqueda

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Cargar usuarios desde la base de datos
  loadUsers(): void {
    this.userService.getAllUsuarios().subscribe((response) => {
      this.users = response;
      this.filteredUsers = response; // Inicialmente todos los usuarios se muestran
    });
  }

  // Filtrar usuarios según el término de búsqueda
  filterUsers(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
    );
  }

}
