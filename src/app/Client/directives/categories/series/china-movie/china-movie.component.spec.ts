import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinaMovieComponent } from './china-movie.component';

describe('ChinaMovieComponent', () => {
  let component: ChinaMovieComponent;
  let fixture: ComponentFixture<ChinaMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinaMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
