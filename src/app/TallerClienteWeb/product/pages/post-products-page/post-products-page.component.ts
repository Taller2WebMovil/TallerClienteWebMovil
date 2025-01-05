import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/_shared/navbar/navbar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-products-page',
  imports: [NavbarComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './post-products-page.component.html',
  styleUrl: './post-products-page.component.css',
  providers: [ProductService]
})
export class PostProductsPageComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      type: ['', [Validators.required]],
      stock: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0.01), Validators.max(1000000)]],
      image: [null, [Validators.required]]
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.productForm.patchValue({ image: file });
      this.productForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe({
        next: () => alert('Producto agregado exitosamente'),
        error: (err) => alert(`Error al agregar producto: ${err.message}`)
      });
    }
  }

}
