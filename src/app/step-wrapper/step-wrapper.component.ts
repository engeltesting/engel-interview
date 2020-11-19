import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { PageDirective } from '../page.directive';
import { Step1Component } from '../wizard-steps/step1/step1.component';
import { BaseStepComponent } from '../wizard-steps/base-step/base-step.component';

@Component({
  selector: 'app-step-wrapper',
  template: '<ng-template pageDirective></ng-template>',
})
export class StepWrapperComponent implements OnInit {

  @Input() item: any;
  @ViewChild(PageDirective, {static: true}) pageHost: PageDirective;
  private stepRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    if (this.item === undefined) {
      console.error('Item undefined');
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item);
    const viewContainerRef = this.pageHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.stepRef = componentRef.instance as BaseStepComponent;
  }

  getReference(): BaseStepComponent {
    return this.stepRef;
  }

}
