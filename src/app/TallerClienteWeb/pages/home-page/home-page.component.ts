import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from '../../components/login-button/login-button.component';
import { RegisterButtonComponent } from '../../components/register-button/register-button.component';


@Component({
  selector: 'app-home-page',
  imports: [LoginButtonComponent, RegisterButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
