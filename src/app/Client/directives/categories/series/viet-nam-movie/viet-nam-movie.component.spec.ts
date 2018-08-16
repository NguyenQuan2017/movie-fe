import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VietNamMovieComponent } from './viet-nam-movie.component';

describe('VietNamMovieComponent', () => {
  let component: VietNamMovieComponent;
  let fixture: ComponentFixture<VietNamMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VietNamMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VietNamMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
