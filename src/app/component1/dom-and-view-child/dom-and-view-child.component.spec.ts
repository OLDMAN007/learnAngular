import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomAndViewChildComponent } from './dom-and-view-child.component';

describe('DomAndViewChildComponent', () => {
  let component: DomAndViewChildComponent;
  let fixture: ComponentFixture<DomAndViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomAndViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomAndViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
