import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpBaseModel } from '@dongkap/do-core';
import { DoWizardStep, SelectParamModel } from '@dongkap/do-shared';

@Component({
  selector: 'do-employee-add-employee-status',
  templateUrl: 'employee-add-employee-status.component.html',
  styleUrls: ['./employee-add-employee-status.component.scss'],
})
export class EmployeeAddEmployeeStatusComponent extends DoWizardStep implements OnInit, OnDestroy {

  public apiSelectOccupation: HttpBaseModel;
  public apiSelectRole: HttpBaseModel;

  constructor(
    public injector: Injector) {
    super(injector, 'employee-status', {
      occupation: [{
        value: null,
        disabled: false,
      }, Validators.required],
      role: [{
        value: null,
        disabled: false,
      }, Validators.required],
    });
    this.apiSelectOccupation = this.api['security']['select-occupation'];
    this.apiSelectRole = this.api['security']['select-role'];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  validateRoute() {
    if (!this.formGroup.controls['education']?.valid) {
      this.router.navigate(['/app/mgmt/employee/add/education']);
    }
  }

}
