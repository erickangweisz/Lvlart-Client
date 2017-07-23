import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingAsideComponent } from './ranking-aside.component';

describe('RankingAsideComponent', () => {
  let component: RankingAsideComponent;
  let fixture: ComponentFixture<RankingAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
