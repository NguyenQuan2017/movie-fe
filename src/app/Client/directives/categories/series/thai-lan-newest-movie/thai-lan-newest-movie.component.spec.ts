import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiLanNewestMovieComponent } from './thai-lan-newest-movie.component';

describe('ThaiLanNewestMovieComponent', () => {
  let component: ThaiLanNewestMovieComponent;
  let fixture: ComponentFixture<ThaiLanNewestMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaiLanNewestMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiLanNewestMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
