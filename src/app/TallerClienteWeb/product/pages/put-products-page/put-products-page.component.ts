import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-put-products-page',
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './put-products-page.component.html',
  styleUrl: './put-products-page.component.css',
  providers: [ProductService]
})
export class PutProductsPageComponent {
  products: Product[] = [];
  selectedProductId: string = '';
  selectedProduct: Product | null = null;
  tipos: string[] = ['Jugeteria', 'Libros', 'Alimentación', 'Poleras', 'Gorros'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onProductSelect(): void {
    if (this.selectedProductId) {
      this.selectedProduct = this.products.find((p) => p.idProducto === Number(this.selectedProductId)) || null;
    }
  }

  updateProduct(): void {
    if (this.selectedProduct) {
      this.productService.updateProduct(this.selectedProduct.idProducto, this.selectedProduct).subscribe(
        (response) => {
          alert('Producto actualizado correctamente');
          this.loadProducts(); // Recargar lista para reflejar cambios
          this.selectedProduct = null;
          this.selectedProductId = '';
        },
        (error) => {
          console.error('Error al actualizar el producto', error);
          alert('Ocurrió un error al actualizar el producto');
        }
      );
    }
  }
}
