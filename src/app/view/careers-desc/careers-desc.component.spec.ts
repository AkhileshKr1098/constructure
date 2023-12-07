import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersDescComponent } from './careers-desc.component';

describe('CareersDescComponent', () => {
  let component: CareersDescComponent;
  let fixture: ComponentFixture<CareersDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareersDescComponent]
    });
    fixture = TestBed.createComponent(CareersDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
