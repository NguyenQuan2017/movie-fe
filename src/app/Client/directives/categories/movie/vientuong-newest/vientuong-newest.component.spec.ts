import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VientuongNewestComponent } from './vientuong-newest.component';

describe('VientuongNewestComponent', () => {
  let component: VientuongNewestComponent;
  let fixture: ComponentFixture<VientuongNewestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VientuongNewestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VientuongNewestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
