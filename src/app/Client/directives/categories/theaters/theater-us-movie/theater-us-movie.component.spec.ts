import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterUsMovieComponent } from './theater-us-movie.component';

describe('TheaterUsMovieComponent', () => {
  let component: TheaterUsMovieComponent;
  let fixture: ComponentFixture<TheaterUsMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterUsMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheaterUsMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
