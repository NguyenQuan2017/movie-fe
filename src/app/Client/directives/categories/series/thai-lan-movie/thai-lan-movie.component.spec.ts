import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiLanMovieComponent } from './thai-lan-movie.component';

describe('ThaiLanMovieComponent', () => {
  let component: ThaiLanMovieComponent;
  let fixture: ComponentFixture<ThaiLanMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaiLanMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiLanMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
