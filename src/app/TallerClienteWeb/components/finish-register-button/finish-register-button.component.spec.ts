import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishRegisterButtonComponent } from './finish-register-button.component';

describe('FinishRegisterButtonComponent', () => {
  let component: FinishRegisterButtonComponent;
  let fixture: ComponentFixture<FinishRegisterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishRegisterButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishRegisterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
