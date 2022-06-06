import { Component, OnInit } from '@angular/core';
import { BaseStepComponent } from '../base-step/base-step.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component extends BaseStepComponent implements OnInit {
  fabnumValue: any;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      fabnum: ['', Validators.required]
    });
  }

  public removeCharacters() {
    this.fabnumValue = this.fabnumValue.replaceAll(/[^0-9]/g, '');
  }
}
