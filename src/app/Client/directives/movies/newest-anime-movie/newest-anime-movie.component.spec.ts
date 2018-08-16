import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestAnimeMovieComponent } from './newest-anime-movie.component';

describe('NewestAnimeMovieComponent', () => {
  let component: NewestAnimeMovieComponent;
  let fixture: ComponentFixture<NewestAnimeMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestAnimeMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestAnimeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
