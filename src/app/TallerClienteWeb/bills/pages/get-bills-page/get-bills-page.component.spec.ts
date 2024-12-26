import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBillsPageComponent } from './get-bills-page.component';

describe('GetBillsPageComponent', () => {
  let component: GetBillsPageComponent;
  let fixture: ComponentFixture<GetBillsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetBillsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
