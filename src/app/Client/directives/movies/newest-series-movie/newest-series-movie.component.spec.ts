import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestSeriesMovieComponent } from './newest-series-movie.component';

describe('NewestSeriesMovieComponent', () => {
  let component: NewestSeriesMovieComponent;
  let fixture: ComponentFixture<NewestSeriesMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestSeriesMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestSeriesMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
