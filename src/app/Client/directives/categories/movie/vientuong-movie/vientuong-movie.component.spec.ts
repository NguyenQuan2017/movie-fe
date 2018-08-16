import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VientuongMovieComponent } from './vientuong-movie.component';

describe('VientuongMovieComponent', () => {
  let component: VientuongMovieComponent;
  let fixture: ComponentFixture<VientuongMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VientuongMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VientuongMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
