import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUploadimagesComponent } from './profile-uploadimages.component';

describe('ProfileUploadimagesComponent', () => {
  let component: ProfileUploadimagesComponent;
  let fixture: ComponentFixture<ProfileUploadimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUploadimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUploadimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
