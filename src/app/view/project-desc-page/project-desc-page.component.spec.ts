import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDescPageComponent } from './project-desc-page.component';

describe('ProjectDescPageComponent', () => {
  let component: ProjectDescPageComponent;
  let fixture: ComponentFixture<ProjectDescPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDescPageComponent]
    });
    fixture = TestBed.createComponent(ProjectDescPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
