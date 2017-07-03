import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDuelsComponent } from './profile-duels.component';

describe('ProfileDuelsComponent', () => {
  let component: ProfileDuelsComponent;
  let fixture: ComponentFixture<ProfileDuelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDuelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDuelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
