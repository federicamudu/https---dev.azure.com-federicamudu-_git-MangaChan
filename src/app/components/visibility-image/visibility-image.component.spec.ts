import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityImageComponent } from './visibility-image.component';

describe('VisibilityImageComponent', () => {
  let component: VisibilityImageComponent;
  let fixture: ComponentFixture<VisibilityImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisibilityImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisibilityImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
