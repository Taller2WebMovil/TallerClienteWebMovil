import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-products-page',
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './get-products-page.component.html',
  styleUrl: './get-products-page.component.css',
  providers: [ProductService]
})
export class GetProductsPageComponent {
  productId: number | null = null;
  producto: Product | null = null;
  productoNotFound = false;

  constructor(private productService: ProductService) {}

  searchProduct(): void {
    if (this.productId !== null) {
      this.productService.getProductoById(this.productId).subscribe({
        next: (response) => {
          this.producto = response;
          this.productoNotFound = false;
        },
        error: () => {
          this.producto = null;
          this.productoNotFound = true;
        },
      });
    }
  }

}
