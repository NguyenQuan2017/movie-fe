import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsNewestMovieComponent } from './us-newest-movie.component';

describe('UsNewestMovieComponent', () => {
  let component: UsNewestMovieComponent;
  let fixture: ComponentFixture<UsNewestMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsNewestMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsNewestMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
