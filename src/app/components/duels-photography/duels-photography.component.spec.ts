import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelsPhotographyComponent } from './duels-photography.component';

describe('DuelsPhotographyComponent', () => {
  let component: DuelsPhotographyComponent;
  let fixture: ComponentFixture<DuelsPhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuelsPhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuelsPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
