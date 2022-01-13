import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { DoWizardStep } from '@dongkap/do-shared';

@Component({
  selector: 'do-employee-add-employee-status',
  templateUrl: 'employee-add-employee-status.component.html',
  styleUrls: ['./employee-add-employee-status.component.scss'],
})
export class EmployeeAddEmployeeStatusComponent extends DoWizardStep {

  public skillData = [
    {
      name: 'Java',
      id: 'java',
      selected: false,
      disabled: false,
    },
    {
      name: 'PHP',
      id: 'php',
      selected: false,
      disabled: false,
    },
    {
      name: 'Angular',
      id: 'angular',
      selected: false,
      disabled: false,
    },
    {
      name: 'C++',
      id: 'c++',
      selected: false,
      disabled: false,
    },
    {
      name: 'C#',
      id: 'C#',
      selected: false,
      disabled: false,
    },
  ];

  constructor(
    public injector: Injector) {
    super(injector, 'employee-status', {
      skill: [{
        value: null,
        disabled: false,
      }, Validators.required],
      others: [{
        value: null,
        disabled: false,
      }],
    });
  }

  validateRoute() {
    if (!this.formGroup.controls['education']?.valid) {
      this.router.navigate(['/app/mgmt/employee/add/education']);
    }
  }

}
