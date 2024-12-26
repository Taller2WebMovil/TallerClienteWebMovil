import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUsersPageComponent } from './get-users-page.component';

describe('GetUsersPageComponent', () => {
  let component: GetUsersPageComponent;
  let fixture: ComponentFixture<GetUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetUsersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
