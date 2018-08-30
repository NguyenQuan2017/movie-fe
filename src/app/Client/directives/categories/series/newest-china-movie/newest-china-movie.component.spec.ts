import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestChinaMovieComponent } from './newest-china-movie.component';

describe('NewestChinaMovieComponent', () => {
  let component: NewestChinaMovieComponent;
  let fixture: ComponentFixture<NewestChinaMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestChinaMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestChinaMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
