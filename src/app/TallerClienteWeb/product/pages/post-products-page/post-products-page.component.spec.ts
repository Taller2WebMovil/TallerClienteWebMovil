import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProductsPageComponent } from './post-products-page.component';

describe('PostProductsPageComponent', () => {
  let component: PostProductsPageComponent;
  let fixture: ComponentFixture<PostProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostProductsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
