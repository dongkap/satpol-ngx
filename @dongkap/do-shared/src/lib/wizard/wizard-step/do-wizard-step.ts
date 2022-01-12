import { Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DoWizardService } from '../services/do-wizard.service';
import { DoWizardStepInterface } from './do-wizard-step.interface';

export abstract class DoWizardStep implements DoWizardStepInterface {
  public formGroup: FormGroup;
  protected formBuilder: FormBuilder;
  public wizardService: DoWizardService;
  protected router: Router;

  constructor(
    public injector: Injector,
    public formGroupName: string,
    controlsConfig: {
      [key: string]: any;
    }
    ){
      this.formBuilder = injector.get(FormBuilder);
      this.wizardService = injector.get(DoWizardService);
      this.router = injector.get(Router);
      this.formGroup = this.wizardService.getFormGroup();
      this.formGroup.addControl(this.formGroupName, this.formBuilder.group(controlsConfig));
      this.validateRoute();
  }

  protected abstract validateRoute(): void;

  isValid(): boolean {
    return this.formGroup.controls[this.formGroupName].valid;
  }

  onNext(): void | boolean {
    this.wizardService.setFormGroup(this.formGroup);
  }

  onPrevious(): void | boolean {
    this.wizardService.setFormGroup(this.formGroup);
  }
}
