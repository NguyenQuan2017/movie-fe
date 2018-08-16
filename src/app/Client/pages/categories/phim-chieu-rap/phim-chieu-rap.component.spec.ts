import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimChieuRapComponent } from './phim-chieu-rap.component';

describe('PhimChieuRapComponent', () => {
  let component: PhimChieuRapComponent;
  let fixture: ComponentFixture<PhimChieuRapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhimChieuRapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhimChieuRapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
