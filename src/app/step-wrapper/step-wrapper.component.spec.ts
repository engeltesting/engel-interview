import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepWrapperComponent } from './step-wrapper.component';

describe('StepWrapperComponent', () => {
  let component: StepWrapperComponent;
  let fixture: ComponentFixture<StepWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get reference', () => {

  });
});
