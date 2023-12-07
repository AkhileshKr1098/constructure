import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivicePoliceComponent } from './privice-police.component';

describe('PrivicePoliceComponent', () => {
  let component: PrivicePoliceComponent;
  let fixture: ComponentFixture<PrivicePoliceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivicePoliceComponent]
    });
    fixture = TestBed.createComponent(PrivicePoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
