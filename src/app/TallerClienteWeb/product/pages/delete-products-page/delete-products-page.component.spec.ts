import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductsPageComponent } from './delete-products-page.component';

describe('DeleteProductsPageComponent', () => {
  let component: DeleteProductsPageComponent;
  let fixture: ComponentFixture<DeleteProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProductsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
