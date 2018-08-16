import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinhdiMovieComponent } from './kinhdi-movie.component';

describe('KinhdiMovieComponent', () => {
  let component: KinhdiMovieComponent;
  let fixture: ComponentFixture<KinhdiMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinhdiMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinhdiMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
