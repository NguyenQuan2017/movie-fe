import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestKoreaTheaterMovieComponent } from './newest-korea-theater-movie.component';

describe('NewestKoreaTheaterMovieComponent', () => {
  let component: NewestKoreaTheaterMovieComponent;
  let fixture: ComponentFixture<NewestKoreaTheaterMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestKoreaTheaterMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestKoreaTheaterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
