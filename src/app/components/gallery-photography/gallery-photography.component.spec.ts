import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPhotographyComponent } from './gallery-photography.component';

describe('GalleryPhotographyComponent', () => {
  let component: GalleryPhotographyComponent;
  let fixture: ComponentFixture<GalleryPhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
