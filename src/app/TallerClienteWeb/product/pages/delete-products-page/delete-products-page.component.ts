import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-products-page',
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './delete-products-page.component.html',
  styleUrl: './delete-products-page.component.css',
  providers: [ProductService]
})
export class DeleteProductsPageComponent {
  products: Product[] = [];
  errorMessage = '';
  successMessage = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.products = data),
      error: (err) => (this.errorMessage = 'No se pudieron cargar los productos.'),
    });
  }

  deleteProduct(productId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          this.successMessage = 'Producto eliminado con éxito.';
          this.loadProducts();
        },
        error: (err) => (this.errorMessage = 'Error al eliminar el producto.'),
      });
    }
  }
}
