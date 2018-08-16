import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestVnTheaterMovieComponent } from './newest-vn-theater-movie.component';

describe('NewestVnTheaterMovieComponent', () => {
  let component: NewestVnTheaterMovieComponent;
  let fixture: ComponentFixture<NewestVnTheaterMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestVnTheaterMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestVnTheaterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
