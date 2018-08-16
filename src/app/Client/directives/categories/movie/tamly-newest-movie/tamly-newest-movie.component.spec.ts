import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamlyNewestMovieComponent } from './tamly-newest-movie.component';

describe('TamlyNewestMovieComponent', () => {
  let component: TamlyNewestMovieComponent;
  let fixture: ComponentFixture<TamlyNewestMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamlyNewestMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamlyNewestMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
