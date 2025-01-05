import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-post-users-page',
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './post-users-page.component.html',
  styleUrl: './post-users-page.component.css',
  providers: [UserService]
})
export class PostUsersPageComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      gender: ['', [Validators.required]],
      rut: ['', [Validators.required, Validators.pattern(/^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/)]],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.registerUser(this.userForm.value).subscribe({
        next: () => alert('Usuario registrado exitosamente'),
        error: (err) => alert(`Error: ${err.message}`)
      });
    } else {
      alert('Por favor, corrija los errores en el formulario.');
    }
  }

}
