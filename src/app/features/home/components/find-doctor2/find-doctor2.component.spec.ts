import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDoctor2Component } from './find-doctor2.component';

describe('FindDoctor2Component', () => {
  let component: FindDoctor2Component;
  let fixture: ComponentFixture<FindDoctor2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindDoctor2Component]
    });
    fixture = TestBed.createComponent(FindDoctor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
