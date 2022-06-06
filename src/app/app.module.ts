import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import { AppComponent } from './app.component';
import { WizardStepperComponent } from './wizard-stepper/wizard-stepper.component';
import { Step1Component } from './wizard-steps/step1/step1.component';
import { Step2Component } from './wizard-steps/step2/step2.component';
import { Step3Component } from './wizard-steps/step3/step3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepWrapperComponent } from './step-wrapper/step-wrapper.component';
import { PageDirective } from './page.directive';
import { CommonModule } from '@angular/common';
import { BaseStepComponent } from './wizard-steps/base-step/base-step.component';
import { MatButtonModule } from '@angular/material/button';
import { MainPageComponent } from './main-page/main-page.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    WizardStepperComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    StepWrapperComponent,
    PageDirective,
    MainPageComponent
  ],
  entryComponents: [
    WizardStepperComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule,
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
