import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanhDongNewestMovieComponent } from './hanh-dong-newest-movie.component';

describe('HanhDongNewestMovieComponent', () => {
  let component: HanhDongNewestMovieComponent;
  let fixture: ComponentFixture<HanhDongNewestMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanhDongNewestMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanhDongNewestMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
