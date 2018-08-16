import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestActAnimeMovieComponent } from './newest-act-anime-movie.component';

describe('NewestActAnimeMovieComponent', () => {
  let component: NewestActAnimeMovieComponent;
  let fixture: ComponentFixture<NewestActAnimeMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestActAnimeMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestActAnimeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
