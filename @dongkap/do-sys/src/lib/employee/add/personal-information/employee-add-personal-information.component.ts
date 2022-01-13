import { Component, Injector, OnDestroy, OnInit, } from '@angular/core';
import { Validators } from '@angular/forms';
import { DoWizardStep } from '@dongkap/do-shared';
import { Pattern } from '@dongkap/do-core';
import { catchError, map, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'do-employee-add-personal-information',
  templateUrl: 'employee-add-personal-information.component.html',
  styleUrls: ['./employee-add-personal-information.component.scss'],
})
export class EmployeeAddPersonalInformationComponent extends DoWizardStep implements OnInit, OnDestroy {

  public formGroupName: string = 'personal-information';
  public patternEmail: string = Pattern.EMAIL;
  public patternPhoneNumber: string = Pattern.PHONE_NUMBER;
  public patternFullname: string = Pattern.FULLNAME;
  public genderData = [];

  constructor(
    public injector: Injector) {
    super(injector, 'personal-information', {
      name: [{
        value: null,
        disabled: false,
      }, Validators.required],
      nik: [{
        value: null,
        disabled: false,
      }, Validators.required],
      idNumber: [{
        value: null,
        disabled: false,
      }, Validators.required],
      email: [{
        value: null,
        disabled: false,
      }, Validators.required],
      phoneNumber: [{
        value: null,
        disabled: false,
      }, Validators.required],
      placeOfBirth: [{
        value: null,
        disabled: false,
      }, Validators.required],
      dateOfBirth: [{
        value: null,
        disabled: false,
      }, Validators.required],
      gender: [{
        value: 'GENDER.MALE',
        disabled: false,
      }],
      height: [{
        value: null,
        disabled: false,
      }],
      weight: [{
        value: null,
        disabled: false,
      }],
      bloodType: [{
        value: null,
        disabled: false,
      }],
    });
  }

  ngOnInit(): void {
    this.loadingForm = true;
    this.http.HTTP_AUTH(this.api['master']['radio-parameter'], {
      keyword : {
        parameterGroupCode: 'GENDER',
      },
    }).pipe(takeUntil(this.destroy$), map((response: any) => {
        this.genderData = response;
      }), catchError(() => of([]))).subscribe(() => {
        this.loadingForm = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  validateRoute() {}

}
