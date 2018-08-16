import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsMovieComponent } from './us-movie.component';

describe('UsMovieComponent', () => {
  let component: UsMovieComponent;
  let fixture: ComponentFixture<UsMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
