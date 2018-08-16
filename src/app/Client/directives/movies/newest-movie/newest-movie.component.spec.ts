import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestMovieComponent } from './newest-movie.component';

describe('NewestMovieComponent', () => {
  let component: NewestMovieComponent;
  let fixture: ComponentFixture<NewestMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
