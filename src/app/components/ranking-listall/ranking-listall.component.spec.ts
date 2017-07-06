import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingListallComponent } from './ranking-listall.component';

describe('RankingListallComponent', () => {
  let component: RankingListallComponent;
  let fixture: ComponentFixture<RankingListallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingListallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingListallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
