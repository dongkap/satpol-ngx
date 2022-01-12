import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DoWizardService } from '../services/do-wizard.service';
import { DoWizardStepData } from '../wizard-step/do-wizard-step-data.interface';
import { DoWizardOptions } from '../wizard-options/do-wizard-options.interface';

@Component({
  selector: 'do-wizard-buttons',
  templateUrl: './do-wizard-buttons.component.html',
  styleUrls: ['./do-wizard-buttons.component.scss'],
})
export class DoWizardButtonsComponent implements OnInit {
  @Input() extra: boolean = false;
  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrevious: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  public currentStepData$: Observable<DoWizardStepData>;

  public wizardOptions: DoWizardOptions;

  constructor(private service: DoWizardService) { }

  ngOnInit() {
    this.currentStepData$ = this.service.getCurrentStepDataAsObservable();
    this.wizardOptions = this.service.wizardOptions;
  }

  formIsValid(): boolean {
    return this.service.formIsValid();
  }

  goToSubmit() {
    this.onSubmit.emit(this.service.getFormGroup());
  }

  goToNextStep() {
    this.onNext.emit(this.service.getFormGroup());
    this.service.navigateToNextStep();
  }

  goToPreviousStep() {
    this.onPrevious.emit(this.service.getFormGroup());
    this.service.navigateToPreviousStep();
  }

  goToPath(path: string) {
    this.service.navigateToPath(path);
  }

}
