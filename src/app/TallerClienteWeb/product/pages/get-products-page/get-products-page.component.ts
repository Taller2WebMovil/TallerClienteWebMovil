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
  products: Product[] = [];
  filteredProducts: Product[] = [];
  displayedProducts: Product[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 5; // Productos por página
  totalPages: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
      this.filteredProducts = response;
      this.calculatePagination();
    });
  }

  filterProducts(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.nombreProducto.toLowerCase().includes(term)
    );
    this.calculatePagination();
  }

  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    this.updateDisplayedProducts();
  }

  updateDisplayedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedProducts();
    }
  }

}
