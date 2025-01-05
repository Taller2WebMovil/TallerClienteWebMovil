import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { BillService } from '../../services/bill.service';
import { Bill } from '../../interfaces/bill';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-bills-page',
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './get-bills-page.component.html',
  styleUrl: './get-bills-page.component.css'
})
export class GetBillsPageComponent {
  boletaId: number | null = null;
  boleta: Bill | null = null;
  boletaNotFound = false;

  constructor(private boletaService: BillService) {}

  searchBoleta(): void {
    if (this.boletaId !== null) {
      this.boletaService.getBoletaById(this.boletaId).subscribe({
        next: (response) => {
          this.boleta = response;
          this.boletaNotFound = false;
        },
        error: () => {
          this.boleta = null;
          this.boletaNotFound = true;
        },
      });
    }
  }

}
