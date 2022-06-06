import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step3Component } from './step3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';

describe('Step3Component', () => {
  let component: Step3Component;
  let fixture: ComponentFixture<Step3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TextFieldModule],
      declarations: [Step3Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate', () => {

  });
});
