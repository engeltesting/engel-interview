import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-step',
  template: ``
})
export abstract class BaseStepComponent implements OnInit {
  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  isStepValid() {
    return this.validate();
  }

  validate(): boolean {
    this.formGroup.markAllAsTouched();
    return this.formGroup.valid;
  }

  getFormData(): any {
    return this.formGroup.value;
  }
}
