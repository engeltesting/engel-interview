import { Component, OnInit } from '@angular/core';
import { BaseStepComponent } from '../base-step/base-step.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component extends BaseStepComponent implements OnInit {
  descriptionValue: any;

  constructor(private formBuilder: FormBuilder) {super(); }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      desc: ['', Validators.required],
    });
  }

  removeSpecialCharacters() {
    this.descriptionValue = this.descriptionValue.replaceAll(/[^a-zA-Z ]/g, '');
  }
}
