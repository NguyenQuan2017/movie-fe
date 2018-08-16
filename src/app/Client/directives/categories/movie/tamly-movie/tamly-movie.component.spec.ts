import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamlyMovieComponent } from './tamly-movie.component';

describe('TamlyMovieComponent', () => {
  let component: TamlyMovieComponent;
  let fixture: ComponentFixture<TamlyMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamlyMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamlyMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
