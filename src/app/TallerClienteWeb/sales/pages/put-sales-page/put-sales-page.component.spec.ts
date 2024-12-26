import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutSalesPageComponent } from './put-sales-page.component';

describe('PutSalesPageComponent', () => {
  let component: PutSalesPageComponent;
  let fixture: ComponentFixture<PutSalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutSalesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutSalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
