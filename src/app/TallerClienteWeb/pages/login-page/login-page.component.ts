import { Component } from '@angular/core';
import { BackHomeButtonComponent } from '../../components/back-home-button/back-home-button.component';
import { FinishLoginButtonComponent } from '../../components/finish-login-button/finish-login-button.component';

@Component({
  selector: 'app-login-page',
  imports: [BackHomeButtonComponent, FinishLoginButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}

