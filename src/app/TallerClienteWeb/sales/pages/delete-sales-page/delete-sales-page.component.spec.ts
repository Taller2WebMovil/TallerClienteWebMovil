import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSalesPageComponent } from './delete-sales-page.component';

describe('DeleteSalesPageComponent', () => {
  let component: DeleteSalesPageComponent;
  let fixture: ComponentFixture<DeleteSalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSalesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
