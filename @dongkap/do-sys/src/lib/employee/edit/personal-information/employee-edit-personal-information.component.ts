import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ApiBaseResponse, ResponseCode, Pattern } from '@dongkap/do-core';
import { BaseFormComponent, CheckboxModel } from '@dongkap/do-shared';
import { EmployeeService } from '../../services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeePersonalInfoModel } from '../../models/employee.model';

@Component({
  selector: 'do-employee-edit-personal-information',
  styleUrls: ['./employee-edit-personal-information.component.scss'],
  templateUrl: './employee-edit-personal-information.component.html',
})
export class EmployeeEditPersonalInformationComponent extends BaseFormComponent<any> implements OnInit {

  public patternEmail: string = Pattern.EMAIL;
  public patternPhoneNumber: string = Pattern.PHONE_NUMBER;
  public patternFullname: string = Pattern.FULLNAME;
  public personalInfo: EmployeePersonalInfoModel;

  constructor(
    public injector: Injector,
    private router: Router,
    private employeeService: EmployeeService) {
    super(injector,
      {
        employeeName: [],
        nik: [],
        idNumber: [],
        email: [],
        phoneNumber: [],
        address: [],
      });
    if (!this.employeeService.getEmployeeHeader()) {
      this.router.navigate(['/app/mgmt/employee']);
    }
  }

  ngOnInit(): void {}

  loadDataMenu(): Observable<any> {
    this.loadingForm = true;
    return this.exec('security', 'get-employee-personal-info', {
      employeeId: this.employeeService.getEmployeeHeader()?.id
    }).pipe(map(
      (success: EmployeePersonalInfoModel) => {
        this.loadingForm = false;
        this.personalInfo = success;
        this.formGroup.controls['employeeName'].setValue(success.fullname);
        this.formGroup.controls['nik'].setValue(success.idEmployee);
        this.formGroup.controls['idNumber'].setValue(success.idNumber);
        this.formGroup.controls['email'].setValue(success.email);
        this.formGroup.controls['phoneNumber'].setValue(success.phoneNumber);
        this.formGroup.controls['address'].setValue(success.address);
        this.formGroup.markAsPristine();
      },
      (error: HttpErrorResponse) => {
        this.loadingForm = true;
        const err: ApiBaseResponse = error['error'];
        if (err) {
          this.toastr.showI18n(err.respStatusMessage[err.respStatusCode], true, null, 'danger');
        } else {
          this.toastr.showI18n(err as any, true, null, 'danger');
        }
      },
    ));
  }

  onReset(): void {
    this.router.navigate(['/app/mgmt/employee']);
  }

  onSubmit(): void {
  }

}
