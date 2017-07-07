import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingModelingComponent } from './ranking-modeling.component';

describe('RankingModelingComponent', () => {
  let component: RankingModelingComponent;
  let fixture: ComponentFixture<RankingModelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingModelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
