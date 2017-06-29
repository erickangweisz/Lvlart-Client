import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDuelsComponent } from './gallery-duels.component';

describe('GalleryDuelsComponent', () => {
  let component: GalleryDuelsComponent;
  let fixture: ComponentFixture<GalleryDuelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryDuelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDuelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
