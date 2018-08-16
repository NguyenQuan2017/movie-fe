import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedMovieComponent } from './related-movie.component';

describe('RelatedMovieComponent', () => {
  let component: RelatedMovieComponent;
  let fixture: ComponentFixture<RelatedMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
