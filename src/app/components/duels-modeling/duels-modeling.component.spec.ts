import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelsModelingComponent } from './duels-modeling.component';

describe('DuelsModelingComponent', () => {
  let component: DuelsModelingComponent;
  let fixture: ComponentFixture<DuelsModelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuelsModelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuelsModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
