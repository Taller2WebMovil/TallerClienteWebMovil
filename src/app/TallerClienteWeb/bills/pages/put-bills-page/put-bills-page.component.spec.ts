import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutBillsPageComponent } from './put-bills-page.component';

describe('PutBillsPageComponent', () => {
  let component: PutBillsPageComponent;
  let fixture: ComponentFixture<PutBillsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutBillsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutBillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
