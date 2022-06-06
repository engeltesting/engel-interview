import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step2Component } from './step2.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('Step2Component', () => {
  let component: Step2Component;
  let fixture: ComponentFixture<Step2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [Step2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset form values', () => {

  });
});
