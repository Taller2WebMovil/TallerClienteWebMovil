import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentPage: string;
  constructor() {
    this.currentPage = 'Main';
  }
  changePage(page: string) {
    this.currentPage = page;
  }
}
