import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestSciFiAnimeMovieComponent } from './newest-sci-fi-anime-movie.component';

describe('NewestSciFiAnimeMovieComponent', () => {
  let component: NewestSciFiAnimeMovieComponent;
  let fixture: ComponentFixture<NewestSciFiAnimeMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestSciFiAnimeMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestSciFiAnimeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
