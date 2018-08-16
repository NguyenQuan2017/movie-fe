import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinhdiNewestMovieComponent } from './kinhdi-newest-movie.component';

describe('KinhdiNewestMovieComponent', () => {
  let component: KinhdiNewestMovieComponent;
  let fixture: ComponentFixture<KinhdiNewestMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinhdiNewestMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinhdiNewestMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
