import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBillsPageComponent } from './post-bills-page.component';

describe('PostBillsPageComponent', () => {
  let component: PostBillsPageComponent;
  let fixture: ComponentFixture<PostBillsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostBillsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostBillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
