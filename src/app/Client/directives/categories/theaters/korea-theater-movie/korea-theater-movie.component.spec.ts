import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoreaTheaterMovieComponent } from './korea-theater-movie.component';

describe('KoreaTheaterMovieComponent', () => {
  let component: KoreaTheaterMovieComponent;
  let fixture: ComponentFixture<KoreaTheaterMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoreaTheaterMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoreaTheaterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
