import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutProductsPageComponent } from './put-products-page.component';

describe('PutProductsPageComponent', () => {
  let component: PutProductsPageComponent;
  let fixture: ComponentFixture<PutProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutProductsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
