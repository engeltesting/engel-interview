import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Step1Component } from '../wizard-steps/step1/step1.component';
import { Step2Component } from '../wizard-steps/step2/step2.component';
import { Step3Component } from '../wizard-steps/step3/step3.component';
import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';
import { BaseStepComponent } from '../wizard-steps/base-step/base-step.component';
import { StepWrapperComponent } from '../step-wrapper/step-wrapper.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface TableObject {
  fabNum: number;
  customerName: string;
  customerContact: string;
  description: string;
}

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

  constructor(public dialogRef: MatDialogRef<WizardStepperComponent>, private snackBar: MatSnackBar) {
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

  goForward(selectedIndex: number): void {
    const ref = this.stepsReference.get(selectedIndex).getReference();
    if (ref.isStepValid()) {
      this.stepper.next();
    } else {
      this.snackBar.open('Form not valid!', 'OK', {duration: 1000});
    }
  }

  save() {
    this.dialogRef.close(this.transformStepsToTableObject());
  }

  private transformStepsToTableObject() {
    const values: any[] = [];
    this.stepsReference.forEach(stepRef => {
      values.push(stepRef.getReference().formGroup.getRawValue());
    });
    return {
      fabNum: values[0].fabnum,
      customerName: values[1].name,
      customerContact: values[1].contact,
      description: values[2].desc
    } as TableObject;
  }
}
