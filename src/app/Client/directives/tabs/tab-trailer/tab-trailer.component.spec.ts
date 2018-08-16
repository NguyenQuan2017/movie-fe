import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTrailerComponent } from './tab-trailer.component';

describe('TabTrailerComponent', () => {
  let component: TabTrailerComponent;
  let fixture: ComponentFixture<TabTrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
