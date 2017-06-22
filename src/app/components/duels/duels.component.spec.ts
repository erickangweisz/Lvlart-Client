import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelsComponent } from './duels.component';

describe('DuelsComponent', () => {
  let component: DuelsComponent;
  let fixture: ComponentFixture<DuelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
