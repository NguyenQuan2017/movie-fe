import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoreaMovieComponent } from './korea-movie.component';

describe('KoreaMovieComponent', () => {
  let component: KoreaMovieComponent;
  let fixture: ComponentFixture<KoreaMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoreaMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoreaMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
