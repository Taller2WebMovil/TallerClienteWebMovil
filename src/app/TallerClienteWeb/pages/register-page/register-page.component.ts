import { Component } from '@angular/core';
import { BackHomeButtonComponent } from '../../components/back-home-button/back-home-button.component';
import { FinishRegisterButtonComponent } from '../../components/finish-register-button/finish-register-button.component';

@Component({
  selector: 'app-register-page',
  imports: [BackHomeButtonComponent, FinishRegisterButtonComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
