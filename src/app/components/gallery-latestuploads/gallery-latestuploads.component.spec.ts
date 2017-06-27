import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLatestuploadsComponent } from './gallery-latestuploads.component';

describe('GalleryLatestuploadsComponent', () => {
  let component: GalleryLatestuploadsComponent;
  let fixture: ComponentFixture<GalleryLatestuploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryLatestuploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryLatestuploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
