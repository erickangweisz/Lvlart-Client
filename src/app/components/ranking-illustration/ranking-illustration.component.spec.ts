import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingIllustrationComponent } from './ranking-illustration.component';

describe('RankingIllustrationComponent', () => {
  let component: RankingIllustrationComponent;
  let fixture: ComponentFixture<RankingIllustrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingIllustrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
