import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesFilmComponent } from './series-film.component';

describe('SeriesFilmComponent', () => {
  let component: SeriesFilmComponent;
  let fixture: ComponentFixture<SeriesFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
