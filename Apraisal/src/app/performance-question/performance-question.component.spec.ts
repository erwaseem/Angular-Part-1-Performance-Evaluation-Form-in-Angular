import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceQuestionComponent } from './performance-question.component';

describe('PerformanceQuestionComponent', () => {
  let component: PerformanceQuestionComponent;
  let fixture: ComponentFixture<PerformanceQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
