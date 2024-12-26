import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUsersPageComponent } from './delete-users-page.component';

describe('DeleteUsersPageComponent', () => {
  let component: DeleteUsersPageComponent;
  let fixture: ComponentFixture<DeleteUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUsersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
