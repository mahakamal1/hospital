import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseManagementsComponent } from './nurse-managements.component';

describe('NurseManagementsComponent', () => {
  let component: NurseManagementsComponent;
  let fixture: ComponentFixture<NurseManagementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseManagementsComponent]
    });
    fixture = TestBed.createComponent(NurseManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
