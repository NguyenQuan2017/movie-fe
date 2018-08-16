import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestHorrorAnimeMovieComponent } from './newest-horror-anime-movie.component';

describe('NewestHorrorAnimeMovieComponent', () => {
  let component: NewestHorrorAnimeMovieComponent;
  let fixture: ComponentFixture<NewestHorrorAnimeMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestHorrorAnimeMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestHorrorAnimeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
