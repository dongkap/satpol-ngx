import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpBaseModel } from '@dongkap/do-core';
import { DoWizardStep, SelectParamModel } from '@dongkap/do-shared';

@Component({
  selector: 'do-employee-add-education',
  templateUrl: 'employee-add-education.component.html',
  styleUrls: ['./employee-add-education.component.scss'],
})
export class EmployeeAddEducationComponent extends DoWizardStep implements OnInit, OnDestroy {

  public apiSelectEducationalLevel: HttpBaseModel;
  public paramSelectEducationalLevel: SelectParamModel[];

  constructor(
    public injector: Injector) {
    super(injector, 'education', {
      educationalLevel: [{
        value: null,
        disabled: false,
      }, Validators.required],
      school: [{
        value: null,
        disabled: false,
      }],
      startYear: [{
        value: null,
        disabled: false,
      }],
      endYear: [{
        value: null,
        disabled: false,
      }],
      trainingName: [{
        value: null,
        disabled: false,
      }],
      trainingDate: [{
        value: null,
        disabled: false,
      }],
    });
    this.apiSelectEducationalLevel = this.api['master']['select-parameter'];
    this.paramSelectEducationalLevel = [{
      key: 'parameterGroupCode',
      value: 'EDUCATIONAL_LEVEL',
    }];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  validateRoute() {
    if (!this.formGroup.controls['personal-information']?.valid) {
      this.router.navigate(['/app/mgmt/employee/add/personal-information']);
    }
  }

}
