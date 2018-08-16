import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorAnimeMovieComponent } from './horror-anime-movie.component';

describe('HorrorAnimeMovieComponent', () => {
  let component: HorrorAnimeMovieComponent;
  let fixture: ComponentFixture<HorrorAnimeMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrorAnimeMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorAnimeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
