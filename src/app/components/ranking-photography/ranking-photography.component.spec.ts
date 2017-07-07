import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPhotographyComponent } from './ranking-photography.component';

describe('RankingPhotographyComponent', () => {
  let component: RankingPhotographyComponent;
  let fixture: ComponentFixture<RankingPhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingPhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
