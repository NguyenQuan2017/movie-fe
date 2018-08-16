import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnTheaterMovieComponent } from './vn-theater-movie.component';

describe('VnTheaterMovieComponent', () => {
  let component: VnTheaterMovieComponent;
  let fixture: ComponentFixture<VnTheaterMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnTheaterMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnTheaterMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
