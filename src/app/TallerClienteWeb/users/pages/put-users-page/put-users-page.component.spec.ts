import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutUsersPageComponent } from './put-users-page.component';

describe('PutUsersPageComponent', () => {
  let component: PutUsersPageComponent;
  let fixture: ComponentFixture<PutUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutUsersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
