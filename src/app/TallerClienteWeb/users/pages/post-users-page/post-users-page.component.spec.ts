import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUsersPageComponent } from './post-users-page.component';

describe('PostUsersPageComponent', () => {
  let component: PostUsersPageComponent;
  let fixture: ComponentFixture<PostUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostUsersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
