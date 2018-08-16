import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VietNamNewestComponent } from './viet-nam-newest.component';

describe('VietNamNewestComponent', () => {
  let component: VietNamNewestComponent;
  let fixture: ComponentFixture<VietNamNewestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VietNamNewestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VietNamNewestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
