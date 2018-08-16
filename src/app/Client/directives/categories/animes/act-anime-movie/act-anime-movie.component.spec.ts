import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActAnimeMovieComponent } from './act-anime-movie.component';

describe('ActAnimeMovieComponent', () => {
  let component: ActAnimeMovieComponent;
  let fixture: ComponentFixture<ActAnimeMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActAnimeMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActAnimeMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
