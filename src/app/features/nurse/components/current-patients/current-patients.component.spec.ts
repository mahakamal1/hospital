import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPatientsComponent } from './current-patients.component';

describe('CurrentPatientsComponent', () => {
  let component: CurrentPatientsComponent;
  let fixture: ComponentFixture<CurrentPatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentPatientsComponent]
    });
    fixture = TestBed.createComponent(CurrentPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
