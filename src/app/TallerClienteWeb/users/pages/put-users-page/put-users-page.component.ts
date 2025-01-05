import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-put-users-page',
  imports: [NavbarComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './put-users-page.component.html',
  styleUrl: './put-users-page.component.css',
  providers: [UserService]
})
export class PutUsersPageComponent implements OnInit{
  @Input() userId!: number; // Recibe el ID del usuario a editar
  userForm!: FormGroup;
  genders = ['Masculino', 'Femenino', 'Prefiero no decirlo', 'Otros'];
  errorMessage = '';

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.loadUser();
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      gender: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
    });
  }

  loadUser(): void {
    this.userService.getUsuarioById(this.userId).subscribe({
      next: (user) => this.userForm.patchValue(user),
      error: (err) => (this.errorMessage = 'No se pudo cargar el usuario.'),
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser: Partial<User> = this.userForm.value;
      this.userService.updateUser(this.userId, updatedUser).subscribe({
        next: () => alert('Usuario actualizado con éxito.'),
        error: (err) => (this.errorMessage = err.error.message),
      });
    }
  }

}
