import { Component, OnInit } from '@angular/core';
import { BaseStepComponent } from '../base-step/base-step.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component extends BaseStepComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      contact: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  resetValues() {
    this.formGroup.reset();
  }
}
