import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciFiAnimeMovieComponent } from './sci-fi-anime-movie.component';

describe('SciFiAnimeMovieComponent', () => {
  let component: SciFiAnimeMovieComponent;
  let fixture: ComponentFixture<SciFiAnimeMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciFiAnimeMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciFiAnimeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
