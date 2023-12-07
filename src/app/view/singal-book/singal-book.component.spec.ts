import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingalBookComponent } from './singal-book.component';

describe('SingalBookComponent', () => {
  let component: SingalBookComponent;
  let fixture: ComponentFixture<SingalBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingalBookComponent]
    });
    fixture = TestBed.createComponent(SingalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
