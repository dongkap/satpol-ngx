import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { Pattern } from '@dongkap/do-core';
import { DoWizardStep } from '@dongkap/do-shared';

@Component({
  selector: 'do-employee-add-education',
  templateUrl: 'employee-add-education.component.html',
  styleUrls: ['./employee-add-education.component.scss'],
})
export class EmployeeAddEducationComponent extends DoWizardStep {

  public patternUsername: string = Pattern.USERNAME;

  constructor(
    public injector: Injector) {
    super(injector, 'education', {
      username: [{
        value: null,
        disabled: false,
      }, Validators.required],
      photo: [{
        value: null,
        disabled: false,
      }],
      salary: [{
        value: null,
        disabled: false,
      }, Validators.required],
    });
  }

  validateRoute() {
    if (!this.formGroup.controls['personal-information']?.valid) {
      this.router.navigate(['/app/mgmt/employee/add/personal-information']);
    }
  }

}
