import { Component, Injector } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ApiBaseResponse, ResponseCode, Pattern } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import { EmployeeService } from '../../services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'do-employee-edit-personal-information',
  styleUrls: ['./employee-edit-personal-information.component.scss'],
  templateUrl: './employee-edit-personal-information.component.html',
})
export class EmployeeEditPersonalInformationComponent extends BaseFormComponent<any> implements OnInit {

  public patternEmail: string = Pattern.EMAIL;
  public patternPhoneNumber: string = Pattern.PHONE_NUMBER;
  public patternFullname: string = Pattern.FULLNAME;
  public personalInfo: any;

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
      (success: any) => {
        this.loadingForm = false;
        this.personalInfo = success;
        this.formGroup.controls['employeeName'].setValue(success.fullname);
        this.formGroup.controls['nik'].setValue(success.idEmployee);
        this.formGroup.controls['idNumber'].setValue(success.personalInfo?.idNumber);
        this.formGroup.controls['email'].setValue(success.email);
        this.formGroup.controls['phoneNumber'].setValue(success.contact?.phoneNumber);
        this.formGroup.controls['address'].setValue(success.contact?.address);
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
    const data: any = {
      id: this.employeeService.getEmployeeHeader()?.id,
      idEmployee: this.formGroup.controls['nik'].value,
      fullname: this.formGroup.controls['employeeName'].value,
      email: this.formGroup.controls['email'].value,
      contact: {
        phoneNumber: this.formGroup.controls['phoneNumber'].value,
        address: this.formGroup.controls['address'].value,
      },
      personalInfo: {
        idNumber: this.formGroup.controls['idNumber'].value,
      },
    };
    (super.onSubmit(data, 'security', 'put-employee-personal-info')  as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
          this.router.navigate(['/app/mgmt/employee']);
        }
      });
  }

}
