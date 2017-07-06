import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingFirstComponent } from './ranking-first.component';

describe('RankingFirstComponent', () => {
  let component: RankingFirstComponent;
  let fixture: ComponentFixture<RankingFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
