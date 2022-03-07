import { Component, Inject } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map, switchMap, takeUntil } from 'rxjs/operators';
import { ResponseCode, Pattern, HTTP_SERVICE, OAUTH_INFO, API } from '@dongkap/do-core';
import { BaseFormComponent } from '@dongkap/do-shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/employee.service";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@angular/forms";
let emailExist;
export class EmployeeEditPersonalInformationComponent extends BaseFormComponent {
    constructor(injector, router, employeeService, httpBaseService, oauthResource, apiPath) {
        super(injector, {
            employeeName: [],
            nik: [],
            idNumber: [],
            email: [],
            phoneNumber: [],
            address: [],
        });
        this.injector = injector;
        this.router = router;
        this.employeeService = employeeService;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.patternFullname = Pattern.FULLNAME;
        this.formGroup.get('email')
            .setAsyncValidators([
            userValidator(this.oauthResource, this.httpBaseService, this.apiPath)
        ]);
        if (!this.employeeService.getEmployeeHeader()) {
            this.router.navigate(['/app/mgmt/employee']);
        }
    }
    ngOnInit() { }
    loadDataMenu() {
        var _a;
        this.loadingForm = true;
        return this.exec('security', 'get-employee-personal-info', {
            employeeId: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id
        }).pipe(map((success) => {
            var _a, _b, _c;
            this.loadingForm = false;
            emailExist = success.email;
            this.personalInfo = success === null || success === void 0 ? void 0 : success.personalInfo;
            this.formGroup.controls['employeeName'].setValue(success.fullname);
            this.formGroup.controls['nik'].setValue(success.idEmployee);
            this.formGroup.controls['idNumber'].setValue((_a = success.personalInfo) === null || _a === void 0 ? void 0 : _a.idNumber);
            this.formGroup.controls['email'].setValue(success.email);
            this.formGroup.controls['phoneNumber'].setValue((_b = success.contact) === null || _b === void 0 ? void 0 : _b.phoneNumber);
            this.formGroup.controls['address'].setValue((_c = success.contact) === null || _c === void 0 ? void 0 : _c.address);
            this.formGroup.markAsPristine();
        }));
    }
    onReset() {
        this.router.navigate(['/app/mgmt/employee']);
    }
    onSubmit() {
        var _a;
        const data = {
            id: (_a = this.employeeService.getEmployeeHeader()) === null || _a === void 0 ? void 0 : _a.id,
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
        super.onSubmit(data, 'security', 'put-employee-personal-info')
            .pipe(takeUntil(this.destroy$))
            .subscribe(response => {
            if (response.respStatusCode === ResponseCode.OK_DEFAULT.toString()) {
                this.router.navigate(['/app/mgmt/employee']);
            }
        });
    }
}
EmployeeEditPersonalInformationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditPersonalInformationComponent, deps: [{ token: i0.Injector }, { token: i1.Router }, { token: i2.EmployeeService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
EmployeeEditPersonalInformationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeEditPersonalInformationComponent, selector: "do-employee-edit-personal-information", usesInheritance: true, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"col-md-12 col-lg-12\">\n    <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\">\n      <do-input-text\n        [name]=\"'name'\"\n        [label]=\"'Employee Name'\"\n        [placeholder]=\"'Employee Name'\"\n        [pattern]=\"patternFullname\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"employeeName\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'nik'\"\n        [label]=\"'Employee Identification Number'\"\n        [placeholder]=\"'Employee Identification Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"nik\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'idNumber'\"\n        [label]=\"'ID Card Number'\"\n        [placeholder]=\"'ID Card Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"idNumber\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [placeholder]=\"'Email'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [pattern]=\"patternEmail\"\n        [paramError]=\"{value:5}\"\n        minlength=\"5\"\n        maxlength=\"50\"\n        formControlName=\"email\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'phoneNumber'\"\n        [label]=\"'Phone Number'\"\n        [placeholder]=\"'Phone Number'\"\n        [pattern]=\"patternPhoneNumber\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"phoneNumber\">\n      </do-input-text>\n      <do-textarea\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [placeholder]=\"'Address'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"address\">\n      </do-textarea>\n      <do-label-text\n        [name]=\"'pobdob'\"\n        [label]=\"'label.pobdob'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.placeOfBirth + ', ' +personalInfo?.dateOfBirth\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'gender'\"\n        [label]=\"'Gender'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.genderValue\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'height'\"\n        [label]=\"'Height'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.height\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'weight'\"\n        [label]=\"'Weight'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.weight\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-label-text\n        [name]=\"'bloodType'\"\n        [label]=\"'Blood Type'\"\n        [skeleton]=\"loadingForm\"\n        [content]=\"personalInfo?.bloodType\"\n        [colLabel]=\"3\"\n        [colContent]=\"9\"\n        [dividerlabel]=\"false\">\n      </do-label-text>\n      <do-button-submit\n        [submitTitle]=\"'Edit'\"\n        [resetTitle]=\"'Cancel'\"\n        [formGroupButton]=\"formGroup\"\n        [disabledButton]=\"disabled\"\n        (onReset)=\"onReset()\"\n        (onSubmit)=\"onSubmit()\">\n      </do-button-submit>\n    </form>\n  </div>\n</div>", styles: [""], components: [{ type: i3.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i3.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i3.DoLabelTextComponent, selector: "do-label-text", inputs: ["colLabel", "colContent", "skeleton", "name", "content", "dividerlabel", "numeric", "label", "nolabel", "required", "showMoreMode", "maxShowMore", "paramError"] }, { type: i3.DoButtonSubmitComponent, selector: "do-button-submit", inputs: ["colLabel", "colButton", "resetTitle", "submitTitle", "disabledButton", "disabledReset", "type", "status", "skeleton", "formGroupButton"], outputs: ["onSubmit", "onReset"] }], directives: [{ type: i4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i4.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i4.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeEditPersonalInformationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-edit-personal-information',
                    styleUrls: ['./employee-edit-personal-information.component.scss'],
                    templateUrl: './employee-edit-personal-information.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }, { type: i2.EmployeeService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }]; } });
export function userValidator(oauthResource, httpBaseService, apiPath) {
    return (control) => {
        if (!control.valueChanges) {
            return of(null);
        }
        else {
            return control.valueChanges.pipe(debounceTime(500), distinctUntilChanged(), switchMap(() => {
                const validatorSubject$ = new Subject();
                const httpHeaders = new HttpHeaders({
                    Authorization: 'Basic ' + btoa(oauthResource['client_id'] + ':' + oauthResource['client_secret']),
                    'Content-Type': 'application/json',
                });
                const data = {
                    user: control.value,
                    exist: emailExist,
                };
                let dataValidator;
                if (control.value) {
                    httpBaseService.HTTP_BASE(apiPath['auth']['check-user'], data, httpHeaders).subscribe((response) => {
                        if (response['respStatusCode'] === ResponseCode.OK_SCR012.toString()) {
                            validatorSubject$.next(null);
                        }
                        else {
                            dataValidator = {
                                error: true,
                            };
                            validatorSubject$.next(dataValidator);
                        }
                    }, (error) => {
                        if (!(error instanceof HttpErrorResponse)) {
                            dataValidator = {
                                error: true,
                            };
                        }
                        else {
                            if (error.status === 302) {
                                dataValidator = {
                                    'not-available': true,
                                };
                            }
                            else {
                                dataValidator = {
                                    timeout: true,
                                };
                            }
                        }
                        validatorSubject$.next(dataValidator);
                    });
                }
                return validatorSubject$.asObservable();
            })).pipe(first());
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtZWRpdC1wZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1zeXMvc3JjL2xpYi9lbXBsb3llZS9lZGl0L3BlcnNvbmFsLWluZm9ybWF0aW9uL2VtcGxveWVlLWVkaXQtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvZW1wbG95ZWUvZWRpdC9wZXJzb25hbC1pbmZvcm1hdGlvbi9lbXBsb3llZS1lZGl0LXBlcnNvbmFsLWluZm9ybWF0aW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBSTVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RHLE9BQU8sRUFBbUIsWUFBWSxFQUFFLE9BQU8sRUFBdUQsWUFBWSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5SixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBR3ZELElBQUksVUFBZSxDQUFDO0FBT3BCLE1BQU0sT0FBTyx3Q0FBeUMsU0FBUSxpQkFBc0I7SUFPbEYsWUFDUyxRQUFrQixFQUNqQixNQUFjLEVBQ2QsZUFBZ0MsRUFDWCxlQUFtQyxFQUNyQyxhQUFvQyxFQUMzQyxP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fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQXN5bmNWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSwgUmVzcG9uc2VDb2RlLCBQYXR0ZXJuLCBTZWN1cml0eVJlc291cmNlTW9kZWwsIEh0dHBGYWN0b3J5U2VydmljZSwgQVBJTW9kZWwsIEhUVFBfU0VSVklDRSwgT0FVVEhfSU5GTywgQVBJIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBCYXNlRm9ybUNvbXBvbmVudCB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5pbXBvcnQgeyBFbXBsb3llZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9lbXBsb3llZS5zZXJ2aWNlJztcblxubGV0IGVtYWlsRXhpc3Q6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG8tZW1wbG95ZWUtZWRpdC1wZXJzb25hbC1pbmZvcm1hdGlvbicsXG4gIHN0eWxlVXJsczogWycuL2VtcGxveWVlLWVkaXQtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2VtcGxveWVlLWVkaXQtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZUVkaXRQZXJzb25hbEluZm9ybWF0aW9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1Db21wb25lbnQ8YW55PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIHBhdHRlcm5FbWFpbDogc3RyaW5nID0gUGF0dGVybi5FTUFJTDtcbiAgcHVibGljIHBhdHRlcm5QaG9uZU51bWJlcjogc3RyaW5nID0gUGF0dGVybi5QSE9ORV9OVU1CRVI7XG4gIHB1YmxpYyBwYXR0ZXJuRnVsbG5hbWU6IHN0cmluZyA9IFBhdHRlcm4uRlVMTE5BTUU7XG4gIHB1YmxpYyBwZXJzb25hbEluZm86IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbXBsb3llZVNlcnZpY2U6IEVtcGxveWVlU2VydmljZSxcbiAgICBASW5qZWN0KEhUVFBfU0VSVklDRSlwcml2YXRlIGh0dHBCYXNlU2VydmljZTogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgIEBJbmplY3QoT0FVVEhfSU5GTylwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICBASW5qZWN0KEFQSSlwcml2YXRlIGFwaVBhdGg6IEFQSU1vZGVsKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsXG4gICAgICB7XG4gICAgICAgIGVtcGxveWVlTmFtZTogW10sXG4gICAgICAgIG5pazogW10sXG4gICAgICAgIGlkTnVtYmVyOiBbXSxcbiAgICAgICAgZW1haWw6IFtdLFxuICAgICAgICBwaG9uZU51bWJlcjogW10sXG4gICAgICAgIGFkZHJlc3M6IFtdLFxuICAgICAgfSk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpXG4gICAgLnNldEFzeW5jVmFsaWRhdG9ycyhbXG4gICAgICB1c2VyVmFsaWRhdG9yKHRoaXMub2F1dGhSZXNvdXJjZSwgdGhpcy5odHRwQmFzZVNlcnZpY2UsIHRoaXMuYXBpUGF0aClcbiAgICBdKTtcbiAgICBpZiAoIXRoaXMuZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlSGVhZGVyKCkpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9tZ210L2VtcGxveWVlJ10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBsb2FkRGF0YU1lbnUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmxvYWRpbmdGb3JtID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5leGVjKCdzZWN1cml0eScsICdnZXQtZW1wbG95ZWUtcGVyc29uYWwtaW5mbycsIHtcbiAgICAgIGVtcGxveWVlSWQ6IHRoaXMuZW1wbG95ZWVTZXJ2aWNlLmdldEVtcGxveWVlSGVhZGVyKCk/LmlkXG4gICAgfSkucGlwZShtYXAoXG4gICAgICAoc3VjY2VzczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZ0Zvcm0gPSBmYWxzZTtcbiAgICAgICAgZW1haWxFeGlzdCA9IHN1Y2Nlc3MuZW1haWw7XG4gICAgICAgIHRoaXMucGVyc29uYWxJbmZvID0gc3VjY2Vzcz8ucGVyc29uYWxJbmZvO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1wbG95ZWVOYW1lJ10uc2V0VmFsdWUoc3VjY2Vzcy5mdWxsbmFtZSk7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyduaWsnXS5zZXRWYWx1ZShzdWNjZXNzLmlkRW1wbG95ZWUpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snaWROdW1iZXInXS5zZXRWYWx1ZShzdWNjZXNzLnBlcnNvbmFsSW5mbz8uaWROdW1iZXIpO1xuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snZW1haWwnXS5zZXRWYWx1ZShzdWNjZXNzLmVtYWlsKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bob25lTnVtYmVyJ10uc2V0VmFsdWUoc3VjY2Vzcy5jb250YWN0Py5waG9uZU51bWJlcik7XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydhZGRyZXNzJ10uc2V0VmFsdWUoc3VjY2Vzcy5jb250YWN0Py5hZGRyZXNzKTtcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgIH0pKTtcbiAgfVxuXG4gIG9uUmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL21nbXQvZW1wbG95ZWUnXSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBpZDogdGhpcy5lbXBsb3llZVNlcnZpY2UuZ2V0RW1wbG95ZWVIZWFkZXIoKT8uaWQsXG4gICAgICBpZEVtcGxveWVlOiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snbmlrJ10udmFsdWUsXG4gICAgICBmdWxsbmFtZTogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ2VtcGxveWVlTmFtZSddLnZhbHVlLFxuICAgICAgZW1haWw6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydlbWFpbCddLnZhbHVlLFxuICAgICAgY29udGFjdDoge1xuICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bob25lTnVtYmVyJ10udmFsdWUsXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydhZGRyZXNzJ10udmFsdWUsXG4gICAgICB9LFxuICAgICAgcGVyc29uYWxJbmZvOiB7XG4gICAgICAgIGlkTnVtYmVyOiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1snaWROdW1iZXInXS52YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICAoc3VwZXIub25TdWJtaXQoZGF0YSwgJ3NlY3VyaXR5JywgJ3B1dC1lbXBsb3llZS1wZXJzb25hbC1pbmZvJykgIGFzIE9ic2VydmFibGU8QXBpQmFzZVJlc3BvbnNlPilcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19ERUZBVUxULnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvbWdtdC9lbXBsb3llZSddKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlclZhbGlkYXRvcihcbiAgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICBodHRwQmFzZVNlcnZpY2U6IEh0dHBGYWN0b3J5U2VydmljZSxcbiAgYXBpUGF0aDogQVBJTW9kZWwpOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpID0+IHtcbiAgICBpZiAoIWNvbnRyb2wudmFsdWVDaGFuZ2VzKSB7XG4gICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0b3JTdWJqZWN0JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8QXBpQmFzZVJlc3BvbnNlPigpO1xuICAgICAgICAgIGNvbnN0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmFzaWMgJyArIGJ0b2Eob2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyBvYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAgICAgICB1c2VyOiBjb250cm9sLnZhbHVlLFxuICAgICAgICAgICAgZXhpc3Q6IGVtYWlsRXhpc3QsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBsZXQgZGF0YVZhbGlkYXRvcjogYW55O1xuICAgICAgICAgIGlmIChjb250cm9sLnZhbHVlKXtcbiAgICAgICAgICAgIGh0dHBCYXNlU2VydmljZS5IVFRQX0JBU0UoYXBpUGF0aFsnYXV0aCddWydjaGVjay11c2VyJ10sIGRhdGEsIGh0dHBIZWFkZXJzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydyZXNwU3RhdHVzQ29kZSddID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDEyLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclN1YmplY3QkLm5leHQobnVsbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclN1YmplY3QkLm5leHQoZGF0YVZhbGlkYXRvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhVmFsaWRhdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDMwMikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsaWRhdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICdub3QtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yU3ViamVjdCQubmV4dChkYXRhVmFsaWRhdG9yKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgICAgICAgfSkpLnBpcGUoZmlyc3QoKSk7XG4gICAgfVxuICB9O1xufVxuIiwiPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxuICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgYXV0b2NvbXBsZXRlPVwib25cIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiPlxuICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgW25hbWVdPVwiJ25hbWUnXCJcbiAgICAgICAgW2xhYmVsXT1cIidFbXBsb3llZSBOYW1lJ1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInRW1wbG95ZWUgTmFtZSdcIlxuICAgICAgICBbcGF0dGVybl09XCJwYXR0ZXJuRnVsbG5hbWVcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVtcGxveWVlTmFtZVwiPlxuICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgW25hbWVdPVwiJ25paydcIlxuICAgICAgICBbbGFiZWxdPVwiJ0VtcGxveWVlIElkZW50aWZpY2F0aW9uIE51bWJlcidcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ0VtcGxveWVlIElkZW50aWZpY2F0aW9uIE51bWJlcidcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cIm5pa1wiPlxuICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgW25hbWVdPVwiJ2lkTnVtYmVyJ1wiXG4gICAgICAgIFtsYWJlbF09XCInSUQgQ2FyZCBOdW1iZXInXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidJRCBDYXJkIE51bWJlcidcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImlkTnVtYmVyXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInZW1haWwnXCJcbiAgICAgICAgW2xhYmVsXT1cIidFbWFpbCdcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ0VtYWlsJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgW3BhdHRlcm5dPVwicGF0dGVybkVtYWlsXCJcbiAgICAgICAgW3BhcmFtRXJyb3JdPVwie3ZhbHVlOjV9XCJcbiAgICAgICAgbWlubGVuZ3RoPVwiNVwiXG4gICAgICAgIG1heGxlbmd0aD1cIjUwXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIj5cbiAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIidwaG9uZU51bWJlcidcIlxuICAgICAgICBbbGFiZWxdPVwiJ1Bob25lIE51bWJlcidcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ1Bob25lIE51bWJlcidcIlxuICAgICAgICBbcGF0dGVybl09XCJwYXR0ZXJuUGhvbmVOdW1iZXJcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBob25lTnVtYmVyXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8tdGV4dGFyZWFcbiAgICAgICAgW25hbWVdPVwiJ2FkZHJlc3MnXCJcbiAgICAgICAgW2xhYmVsXT1cIidBZGRyZXNzJ1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInQWRkcmVzcydcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImFkZHJlc3NcIj5cbiAgICAgIDwvZG8tdGV4dGFyZWE+XG4gICAgICA8ZG8tbGFiZWwtdGV4dFxuICAgICAgICBbbmFtZV09XCIncG9iZG9iJ1wiXG4gICAgICAgIFtsYWJlbF09XCInbGFiZWwucG9iZG9iJ1wiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIFtjb250ZW50XT1cInBlcnNvbmFsSW5mbz8ucGxhY2VPZkJpcnRoICsgJywgJyArcGVyc29uYWxJbmZvPy5kYXRlT2ZCaXJ0aFwiXG4gICAgICAgIFtjb2xMYWJlbF09XCIzXCJcbiAgICAgICAgW2NvbENvbnRlbnRdPVwiOVwiXG4gICAgICAgIFtkaXZpZGVybGFiZWxdPVwiZmFsc2VcIj5cbiAgICAgIDwvZG8tbGFiZWwtdGV4dD5cbiAgICAgIDxkby1sYWJlbC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIidnZW5kZXInXCJcbiAgICAgICAgW2xhYmVsXT1cIidHZW5kZXInXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgW2NvbnRlbnRdPVwicGVyc29uYWxJbmZvPy5nZW5kZXJWYWx1ZVwiXG4gICAgICAgIFtjb2xMYWJlbF09XCIzXCJcbiAgICAgICAgW2NvbENvbnRlbnRdPVwiOVwiXG4gICAgICAgIFtkaXZpZGVybGFiZWxdPVwiZmFsc2VcIj5cbiAgICAgIDwvZG8tbGFiZWwtdGV4dD5cbiAgICAgIDxkby1sYWJlbC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIidoZWlnaHQnXCJcbiAgICAgICAgW2xhYmVsXT1cIidIZWlnaHQnXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgW2NvbnRlbnRdPVwicGVyc29uYWxJbmZvPy5oZWlnaHRcIlxuICAgICAgICBbY29sTGFiZWxdPVwiM1wiXG4gICAgICAgIFtjb2xDb250ZW50XT1cIjlcIlxuICAgICAgICBbZGl2aWRlcmxhYmVsXT1cImZhbHNlXCI+XG4gICAgICA8L2RvLWxhYmVsLXRleHQ+XG4gICAgICA8ZG8tbGFiZWwtdGV4dFxuICAgICAgICBbbmFtZV09XCInd2VpZ2h0J1wiXG4gICAgICAgIFtsYWJlbF09XCInV2VpZ2h0J1wiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIFtjb250ZW50XT1cInBlcnNvbmFsSW5mbz8ud2VpZ2h0XCJcbiAgICAgICAgW2NvbExhYmVsXT1cIjNcIlxuICAgICAgICBbY29sQ29udGVudF09XCI5XCJcbiAgICAgICAgW2RpdmlkZXJsYWJlbF09XCJmYWxzZVwiPlxuICAgICAgPC9kby1sYWJlbC10ZXh0PlxuICAgICAgPGRvLWxhYmVsLXRleHRcbiAgICAgICAgW25hbWVdPVwiJ2Jsb29kVHlwZSdcIlxuICAgICAgICBbbGFiZWxdPVwiJ0Jsb29kIFR5cGUnXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgW2NvbnRlbnRdPVwicGVyc29uYWxJbmZvPy5ibG9vZFR5cGVcIlxuICAgICAgICBbY29sTGFiZWxdPVwiM1wiXG4gICAgICAgIFtjb2xDb250ZW50XT1cIjlcIlxuICAgICAgICBbZGl2aWRlcmxhYmVsXT1cImZhbHNlXCI+XG4gICAgICA8L2RvLWxhYmVsLXRleHQ+XG4gICAgICA8ZG8tYnV0dG9uLXN1Ym1pdFxuICAgICAgICBbc3VibWl0VGl0bGVdPVwiJ0VkaXQnXCJcbiAgICAgICAgW3Jlc2V0VGl0bGVdPVwiJ0NhbmNlbCdcIlxuICAgICAgICBbZm9ybUdyb3VwQnV0dG9uXT1cImZvcm1Hcm91cFwiXG4gICAgICAgIFtkaXNhYmxlZEJ1dHRvbl09XCJkaXNhYmxlZFwiXG4gICAgICAgIChvblJlc2V0KT1cIm9uUmVzZXQoKVwiXG4gICAgICAgIChvblN1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICA8L2RvLWJ1dHRvbi1zdWJtaXQ+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==