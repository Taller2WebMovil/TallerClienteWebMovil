import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductsPageComponent } from './get-products-page.component';

describe('GetProductsPageComponent', () => {
  let component: GetProductsPageComponent;
  let fixture: ComponentFixture<GetProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetProductsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
