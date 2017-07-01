import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryModelingComponent } from './gallery-modeling.component';

describe('GalleryModelingComponent', () => {
  let component: GalleryModelingComponent;
  let fixture: ComponentFixture<GalleryModelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryModelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
