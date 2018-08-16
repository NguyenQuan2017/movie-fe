import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestKoreaMovieComponent } from './newest-korea-movie.component';

describe('NewestKoreaMovieComponent', () => {
  let component: NewestKoreaMovieComponent;
  let fixture: ComponentFixture<NewestKoreaMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestKoreaMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestKoreaMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
