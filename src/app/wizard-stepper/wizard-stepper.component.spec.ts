import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardStepperComponent } from './wizard-stepper.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('WizardStepperComponent', () => {
  let component: WizardStepperComponent;
  let fixture: ComponentFixture<WizardStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatSnackBarModule
      ],
      providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ],
      declarations: [WizardStepperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should go back', () => {

  });

  it('should go forward', () => {

  });

  it('should save', () => {

  });
});
