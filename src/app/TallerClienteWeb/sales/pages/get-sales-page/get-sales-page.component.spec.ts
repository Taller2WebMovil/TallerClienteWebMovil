import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSalesPageComponent } from './get-sales-page.component';

describe('GetSalesPageComponent', () => {
  let component: GetSalesPageComponent;
  let fixture: ComponentFixture<GetSalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSalesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
