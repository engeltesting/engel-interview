import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Step1Component } from '../wizard-steps/step1/step1.component';
import { Step2Component } from '../wizard-steps/step2/step2.component';
import { Step3Component } from '../wizard-steps/step3/step3.component';
import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';
import { BaseStepComponent } from '../wizard-steps/base-step/base-step.component';
import { StepWrapperComponent } from '../step-wrapper/step-wrapper.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-wizard-stepper',
  templateUrl: './wizard-stepper.component.html',
  styleUrls: ['./wizard-stepper.component.css']
})
export class WizardStepperComponent implements OnInit {
  @ViewChild('stepper') private stepper: MatStepper;
  @ViewChildren('stepsreference') private stepsReference: QueryList<StepWrapperComponent>;

  data: {};
  steps = [];
  lastStep = false;

  constructor(public dialogRef: MatDialogRef<WizardStepperComponent>) {
    this.steps = [
      {component: Step1Component, title: 'Machine'},
      {component: Step2Component, title: 'Customer'},
      {component: Step3Component, title: 'Info'},
    ];
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.stepper.previous();
  }

  goForward(): void {
    this.stepper.next();
  }

  save() {
  }
}
