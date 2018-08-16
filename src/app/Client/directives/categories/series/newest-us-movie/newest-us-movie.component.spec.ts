import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestUsMovieComponent } from './newest-us-movie.component';

describe('NewestUsMovieComponent', () => {
  let component: NewestUsMovieComponent;
  let fixture: ComponentFixture<NewestUsMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestUsMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestUsMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
