import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanhDongMovieComponent } from './hanh-dong-movie.component';

describe('HanhDongMovieComponent', () => {
  let component: HanhDongMovieComponent;
  let fixture: ComponentFixture<HanhDongMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanhDongMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanhDongMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
