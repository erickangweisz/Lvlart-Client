import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLastvisitsComponent } from './profile-lastvisits.component';

describe('ProfileLastvisitsComponent', () => {
  let component: ProfileLastvisitsComponent;
  let fixture: ComponentFixture<ProfileLastvisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLastvisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLastvisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
