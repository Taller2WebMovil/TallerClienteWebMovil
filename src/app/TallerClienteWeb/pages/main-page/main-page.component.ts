import { Component } from '@angular/core';
import { ExitButtonComponent } from '../../components/exit-button/exit-button.component';
import { NavbarComponent } from '../../components/_shared/navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  imports: [ExitButtonComponent, NavbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  
}
