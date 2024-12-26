import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSalesPageComponent } from './post-sales-page.component';

describe('PostSalesPageComponent', () => {
  let component: PostSalesPageComponent;
  let fixture: ComponentFixture<PostSalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSalesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
