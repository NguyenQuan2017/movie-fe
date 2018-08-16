import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestTheaterMovieComponent } from './newest-theater-movie.component';

describe('NewestTheaterMovieComponent', () => {
  let component: NewestTheaterMovieComponent;
  let fixture: ComponentFixture<NewestTheaterMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestTheaterMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestTheaterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
