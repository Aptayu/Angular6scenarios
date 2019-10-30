import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildScenario5Component } from './child-scenario5.component';

describe('ChildScenario5Component', () => {
  let component: ChildScenario5Component;
  let fixture: ComponentFixture<ChildScenario5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildScenario5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildScenario5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
