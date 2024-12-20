import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishLoginButtonComponent } from './finish-login-button.component';

describe('FinishLoginButtonComponent', () => {
  let component: FinishLoginButtonComponent;
  let fixture: ComponentFixture<FinishLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishLoginButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
