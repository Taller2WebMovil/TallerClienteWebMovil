import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBillsPageComponent } from './delete-bills-page.component';

describe('DeleteBillsPageComponent', () => {
  let component: DeleteBillsPageComponent;
  let fixture: ComponentFixture<DeleteBillsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBillsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
