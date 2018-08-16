import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSeriesMovieComponent } from './tab-series-movie.component';

describe('TabSeriesMovieComponent', () => {
  let component: TabSeriesMovieComponent;
  let fixture: ComponentFixture<TabSeriesMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSeriesMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSeriesMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
