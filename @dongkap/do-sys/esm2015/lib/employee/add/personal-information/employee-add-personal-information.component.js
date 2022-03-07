import { Component, Inject, } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, first, map, switchMap, takeUntil } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { DoWizardStep } from '@dongkap/do-shared';
import { API, HTTP_SERVICE, OAUTH_INFO, Pattern, ResponseCode } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "@dongkap/do-shared";
import * as i2 from "@angular/forms";
export class EmployeeAddPersonalInformationComponent extends DoWizardStep {
    constructor(injector, httpBaseService, oauthResource, apiPath) {
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
            address: [{
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
                    value: null,
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
        this.injector = injector;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.formGroupName = 'personal-information';
        this.patternEmail = Pattern.EMAIL;
        this.patternPhoneNumber = Pattern.PHONE_NUMBER;
        this.patternFullname = Pattern.FULLNAME;
        this.genderData = [];
        this.bloodTypeData = [{
                label: 'A',
                value: 'A',
                disabled: false,
            }, {
                label: 'B',
                value: 'B',
                disabled: false,
            }, {
                label: 'AB',
                value: 'AB',
                disabled: false,
            }, {
                label: 'O',
                value: 'O',
                disabled: false,
            }];
        this.isCheckEmail = true;
        this.formGroup.get('personal-information').get('email')
            .setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
    }
    ngOnInit() {
        this.formGroup.get('personal-information').get('gender').setValue('GENDER.MALE');
        this.loadingForm = true;
        this.http.HTTP_AUTH(this.api['master']['radio-parameter'], {
            keyword: {
                parameterGroupCode: 'GENDER',
            },
        }).pipe(takeUntil(this.destroy$), map((response) => {
            this.genderData = response;
        }), catchError(() => of([]))).subscribe(() => {
            this.loadingForm = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    onKeyDownEmail(event) {
        if (event.key) {
            if (!event.key.match(/[!#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
                if (([
                    'TAB',
                    'ESCAPE',
                    'ENTER',
                    'HOME',
                    'END',
                    'ARROWLEFT',
                    'ARROWRIGHT',
                    'ARROWUP',
                    'ARROWDOWN',
                    'PAGEUP',
                    'PAGEDOWN'
                ].indexOf(event.key.toUpperCase()) === -1) &&
                    !event.ctrlKey && !event.metaKey && !event.altKey) {
                    this.isCheckEmail = true;
                }
            }
        }
    }
    validateRoute() { }
}
EmployeeAddPersonalInformationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddPersonalInformationComponent, deps: [{ token: i0.Injector }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
EmployeeAddPersonalInformationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: EmployeeAddPersonalInformationComponent, selector: "do-employee-add-personal-information", usesInheritance: true, ngImport: i0, template: "<do-wizard-page-outlet>\n  <form class=\"form-horizontal\" autocomplete=\"on\" [formGroup]=\"formGroup\" wizardcontent>\n    <div [formGroupName]=\"formGroupName\">\n      <do-input-text\n        [name]=\"'name'\"\n        [label]=\"'Name'\"\n        [placeholder]=\"'Name'\"\n        [pattern]=\"patternFullname\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"name\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'nik'\"\n        [label]=\"'Employee Identification Number'\"\n        [placeholder]=\"'Employee Identification Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"nik\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'idNumber'\"\n        [label]=\"'ID Card Number'\"\n        [placeholder]=\"'ID Card Number'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"idNumber\">\n      </do-input-text>\n      <do-radio\n        [name]=\"'gender'\"\n        [label]=\"'Gender'\"\n        [placeholder]=\"'Gender'\"\n        [data]=\"genderData\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"gender\">\n      </do-radio>\n      <do-input-text\n        [name]=\"'placeOfBirth'\"\n        [label]=\"'Place of Birth'\"\n        [placeholder]=\"'Place of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"placeOfBirth\">\n      </do-input-text>\n      <do-datepicker\n        [name]=\"'dateOfBirth'\"\n        [label]=\"'Date of Birth'\"\n        [placeholder]=\"'Date of Birth'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"dateOfBirth\">\n      </do-datepicker>\n      <do-input-text\n        [name]=\"'email'\"\n        [label]=\"'Email'\"\n        [placeholder]=\"'Email'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        [pattern]=\"patternEmail\"\n        [paramError]=\"{value:5}\"\n        minlength=\"5\"\n        maxlength=\"50\"\n        formControlName=\"email\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'phoneNumber'\"\n        [label]=\"'Phone Number'\"\n        [placeholder]=\"'Phone Number'\"\n        [pattern]=\"patternPhoneNumber\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"phoneNumber\">\n      </do-input-text>\n      <do-textarea\n        [name]=\"'address'\"\n        [label]=\"'Address'\"\n        [placeholder]=\"'Address'\"\n        [required]=\"true\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"address\">\n      </do-textarea>\n      <do-input-text\n        [name]=\"'height'\"\n        [label]=\"'height.body'\"\n        [placeholder]=\"'Centimeter'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"height\">\n      </do-input-text>\n      <do-input-text\n        [name]=\"'weight'\"\n        [label]=\"'weight.body'\"\n        [placeholder]=\"'Kilogram'\"\n        [type]=\"'number'\"\n        [step]=\"'any'\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"weight\">\n      </do-input-text>\n      <do-select\n        [name]=\"'bloodType'\"\n        [label]=\"'Blood Type'\"\n        [placeholder]=\"'Blood Type'\"\n        [items]=\"bloodTypeData\"\n        [searchable]=\"false\"\n        [skeleton]=\"loadingForm\"\n        formControlName=\"bloodType\">\n      </do-select>\n    </div>\n  </form>\n</do-wizard-page-outlet>\n", styles: [""], components: [{ type: i1.DoWizardPageOutletComponent, selector: "do-wizard-page-outlet", inputs: ["width"] }, { type: i1.DoInputTextComponent, selector: "do-input-text", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "min", "max", "step", "capslock", "type", "togglePassword", "showPassword"] }, { type: i1.DoRadioComponent, selector: "do-radio", inputs: ["placeholder", "colLabel", "colInput", "data"] }, { type: i1.DoDatePickerComponent, selector: "do-datepicker", inputs: ["placeholder", "colLabel", "colInput", "min", "max", "size", "dateMask"] }, { type: i1.DoTextareaComponent, selector: "do-textarea", inputs: ["placeholder", "colLabel", "colInput", "minLength", "maxLength", "height"] }, { type: i1.DoSelectComponent, selector: "do-select", inputs: ["placeholder", "colLabel", "colInput", "items", "multiple", "loading", "addTag", "closeOnSelect", "clearable", "searchable", "hideSelected", "minTermLength", "maxTermLength", "api", "limit", "offsetNextLoad", "queryParam"], outputs: ["onSelect", "onClear"] }], directives: [{ type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i2.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: EmployeeAddPersonalInformationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-employee-add-personal-information',
                    templateUrl: 'employee-add-personal-information.component.html',
                    styleUrls: ['./employee-add-personal-information.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: undefined, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wbG95ZWUtYWRkLXBlcnNvbmFsLWluZm9ybWF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLXN5cy9zcmMvbGliL2VtcGxveWVlL2FkZC9wZXJzb25hbC1pbmZvcm1hdGlvbi9lbXBsb3llZS1hZGQtcGVyc29uYWwtaW5mb3JtYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tc3lzL3NyYy9saWIvZW1wbG95ZWUvYWRkL3BlcnNvbmFsLWluZm9ybWF0aW9uL2VtcGxveWVlLWFkZC1wZXJzb25hbC1pbmZvcm1hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sR0FBZ0MsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFxQyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEgsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsR0FBRyxFQUFpRCxZQUFZLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQXlCLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFPOUosTUFBTSxPQUFPLHVDQUF3QyxTQUFRLFlBQVk7SUEwQnZFLFlBQ1MsUUFBa0IsRUFDSSxlQUFtQyxFQUNyQyxhQUFvQyxFQUMz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Q0FDZCxLQUFLLEVBQUUsSUFBSTs2QkFDWixDQUFDO3lCQUNIOzZCQUFNOzRCQUNMLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0NBQ3hCLGFBQWEsR0FBRztvQ0FDZCxlQUFlLEVBQUUsSUFBSTtpQ0FDdEIsQ0FBQzs2QkFDSDtpQ0FBTTtnQ0FDTCxhQUFhLEdBQUc7b0NBQ2QsT0FBTyxFQUFFLElBQUk7aUNBQ2QsQ0FBQzs2QkFDSDt5QkFDRjt3QkFDRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3hDLENBQUMsQ0FBQyxDQUFDO2lCQUNOO2dCQUNELE9BQU8saUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5qZWN0b3IsIE9uRGVzdHJveSwgT25Jbml0LCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlyc3QsIG1hcCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRG9XaXphcmRTdGVwLCBTZWxlY3RSZXNwb25zZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IEFQSSwgQXBpQmFzZVJlc3BvbnNlLCBBUElNb2RlbCwgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIVFRQX1NFUlZJQ0UsIE9BVVRIX0lORk8sIFBhdHRlcm4sIFJlc3BvbnNlQ29kZSwgU2VjdXJpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLWVtcGxveWVlLWFkZC1wZXJzb25hbC1pbmZvcm1hdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnZW1wbG95ZWUtYWRkLXBlcnNvbmFsLWluZm9ybWF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW1wbG95ZWUtYWRkLXBlcnNvbmFsLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlQWRkUGVyc29uYWxJbmZvcm1hdGlvbkNvbXBvbmVudCBleHRlbmRzIERvV2l6YXJkU3RlcCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwdWJsaWMgZm9ybUdyb3VwTmFtZTogc3RyaW5nID0gJ3BlcnNvbmFsLWluZm9ybWF0aW9uJztcbiAgcHVibGljIHBhdHRlcm5FbWFpbDogc3RyaW5nID0gUGF0dGVybi5FTUFJTDtcbiAgcHVibGljIHBhdHRlcm5QaG9uZU51bWJlcjogc3RyaW5nID0gUGF0dGVybi5QSE9ORV9OVU1CRVI7XG4gIHB1YmxpYyBwYXR0ZXJuRnVsbG5hbWU6IHN0cmluZyA9IFBhdHRlcm4uRlVMTE5BTUU7XG4gIHB1YmxpYyBnZW5kZXJEYXRhID0gW107XG4gIHB1YmxpYyBibG9vZFR5cGVEYXRhOiBTZWxlY3RSZXNwb25zZU1vZGVsW10gPSBbe1xuICAgICAgbGFiZWw6ICdBJyxcbiAgICAgIHZhbHVlOiAnQScsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgfSwge1xuICAgICAgbGFiZWw6ICdCJyxcbiAgICAgIHZhbHVlOiAnQicsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgfSwge1xuICAgICAgbGFiZWw6ICdBQicsXG4gICAgICB2YWx1ZTogJ0FCJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB9LCB7XG4gICAgICBsYWJlbDogJ08nLFxuICAgICAgdmFsdWU6ICdPJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB9XTtcbiAgICBwcml2YXRlIGlzQ2hlY2tFbWFpbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KEhUVFBfU0VSVklDRSlwcml2YXRlIGh0dHBCYXNlU2VydmljZTogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgIEBJbmplY3QoT0FVVEhfSU5GTylwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICBASW5qZWN0KEFQSSlwcml2YXRlIGFwaVBhdGg6IEFQSU1vZGVsKSB7XG4gICAgc3VwZXIoaW5qZWN0b3IsICdwZXJzb25hbC1pbmZvcm1hdGlvbicsIHtcbiAgICAgIG5hbWU6IFt7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIG5pazogW3tcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgaWROdW1iZXI6IFt7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVtYWlsOiBbe1xuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBwaG9uZU51bWJlcjogW3tcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgYWRkcmVzczogW3tcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcGxhY2VPZkJpcnRoOiBbe1xuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBkYXRlT2ZCaXJ0aDogW3tcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZ2VuZGVyOiBbe1xuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfV0sXG4gICAgICBoZWlnaHQ6IFt7XG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9XSxcbiAgICAgIHdlaWdodDogW3tcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH1dLFxuICAgICAgYmxvb2RUeXBlOiBbe1xuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfV0sXG4gICAgfSk7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwZXJzb25hbC1pbmZvcm1hdGlvbicpLmdldCgnZW1haWwnKVxuICAgIC5zZXRBc3luY1ZhbGlkYXRvcnMoW3VzZXJWYWxpZGF0b3IodGhpcy5vYXV0aFJlc291cmNlLCB0aGlzLmh0dHBCYXNlU2VydmljZSwgdGhpcy5hcGlQYXRoKV0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwZXJzb25hbC1pbmZvcm1hdGlvbicpLmdldCgnZ2VuZGVyJykuc2V0VmFsdWUoJ0dFTkRFUi5NQUxFJyk7XG4gICAgdGhpcy5sb2FkaW5nRm9ybSA9IHRydWU7XG4gICAgdGhpcy5odHRwLkhUVFBfQVVUSCh0aGlzLmFwaVsnbWFzdGVyJ11bJ3JhZGlvLXBhcmFtZXRlciddLCB7XG4gICAgICBrZXl3b3JkIDoge1xuICAgICAgICBwYXJhbWV0ZXJHcm91cENvZGU6ICdHRU5ERVInLFxuICAgICAgfSxcbiAgICB9KS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSwgbWFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZ2VuZGVyRGF0YSA9IHJlc3BvbnNlO1xuICAgICAgfSksIGNhdGNoRXJyb3IoKCkgPT4gb2YoW10pKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nRm9ybSA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG9uS2V5RG93bkVtYWlsKGV2ZW50OiBLZXlib2FyZEV2ZW50KXtcbiAgICBpZiAoZXZlbnQua2V5KSB7XG4gICAgICBpZiAoIWV2ZW50LmtleS5tYXRjaCgvWyEjJCVeJiooKT9cIjp7fXw8PlxcW1xcXTtcXFxcPX5gXS9nKSkge1xuICAgICAgICBpZiAoKFtcbiAgICAgICAgICAnVEFCJyxcbiAgICAgICAgICAnRVNDQVBFJyxcbiAgICAgICAgICAnRU5URVInLFxuICAgICAgICAgICdIT01FJyxcbiAgICAgICAgICAnRU5EJyxcbiAgICAgICAgICAnQVJST1dMRUZUJyxcbiAgICAgICAgICAnQVJST1dSSUdIVCcsXG4gICAgICAgICAgJ0FSUk9XVVAnLFxuICAgICAgICAgICdBUlJPV0RPV04nLFxuICAgICAgICAgICdQQUdFVVAnLFxuICAgICAgICAgICdQQUdFRE9XTiddLmluZGV4T2YoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkpID09PSAtMSkgJiZcbiAgICAgICAgIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgIHRoaXMuaXNDaGVja0VtYWlsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlUm91dGUoKSB7fVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyVmFsaWRhdG9yKFxuICBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gIGh0dHBCYXNlU2VydmljZTogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICBhcGlQYXRoOiBBUElNb2RlbCk6IEFzeW5jVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgIGlmICghY29udHJvbC52YWx1ZUNoYW5nZXMpIHtcbiAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSg1MDApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRvclN1YmplY3QkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxBcGlCYXNlUmVzcG9uc2U+KCk7XG4gICAgICAgICAgY29uc3QgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCYXNpYyAnICsgYnRvYShvYXV0aFJlc291cmNlWydjbGllbnRfaWQnXSArICc6JyArIG9hdXRoUmVzb3VyY2VbJ2NsaWVudF9zZWNyZXQnXSksXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgICAgIHVzZXI6IGNvbnRyb2wudmFsdWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBsZXQgZGF0YVZhbGlkYXRvcjogYW55O1xuICAgICAgICAgIGlmIChjb250cm9sLnZhbHVlKXtcbiAgICAgICAgICAgIGh0dHBCYXNlU2VydmljZS5IVFRQX0JBU0UoYXBpUGF0aFsnYXV0aCddWydjaGVjay11c2VyJ10sIGRhdGEsIGh0dHBIZWFkZXJzKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlWydyZXNwU3RhdHVzQ29kZSddID09PSBSZXNwb25zZUNvZGUuT0tfU0NSMDEyLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclN1YmplY3QkLm5leHQobnVsbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvclN1YmplY3QkLm5leHQoZGF0YVZhbGlkYXRvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhVmFsaWRhdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDMwMikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhVmFsaWRhdG9yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICdub3QtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yU3ViamVjdCQubmV4dChkYXRhVmFsaWRhdG9yKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWxpZGF0b3JTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgICAgICAgfSkpLnBpcGUoZmlyc3QoKSk7XG4gICAgfVxuICB9O1xufVxuIiwiPGRvLXdpemFyZC1wYWdlLW91dGxldD5cbiAgPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiBhdXRvY29tcGxldGU9XCJvblwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgd2l6YXJkY29udGVudD5cbiAgICA8ZGl2IFtmb3JtR3JvdXBOYW1lXT1cImZvcm1Hcm91cE5hbWVcIj5cbiAgICAgIDxkby1pbnB1dC10ZXh0XG4gICAgICAgIFtuYW1lXT1cIiduYW1lJ1wiXG4gICAgICAgIFtsYWJlbF09XCInTmFtZSdcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ05hbWUnXCJcbiAgICAgICAgW3BhdHRlcm5dPVwicGF0dGVybkZ1bGxuYW1lXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInbmlrJ1wiXG4gICAgICAgIFtsYWJlbF09XCInRW1wbG95ZWUgSWRlbnRpZmljYXRpb24gTnVtYmVyJ1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInRW1wbG95ZWUgSWRlbnRpZmljYXRpb24gTnVtYmVyJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibmlrXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInaWROdW1iZXInXCJcbiAgICAgICAgW2xhYmVsXT1cIidJRCBDYXJkIE51bWJlcidcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ0lEIENhcmQgTnVtYmVyJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiaWROdW1iZXJcIj5cbiAgICAgIDwvZG8taW5wdXQtdGV4dD5cbiAgICAgIDxkby1yYWRpb1xuICAgICAgICBbbmFtZV09XCInZ2VuZGVyJ1wiXG4gICAgICAgIFtsYWJlbF09XCInR2VuZGVyJ1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInR2VuZGVyJ1wiXG4gICAgICAgIFtkYXRhXT1cImdlbmRlckRhdGFcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJnZW5kZXJcIj5cbiAgICAgIDwvZG8tcmFkaW8+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCIncGxhY2VPZkJpcnRoJ1wiXG4gICAgICAgIFtsYWJlbF09XCInUGxhY2Ugb2YgQmlydGgnXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidQbGFjZSBvZiBCaXJ0aCdcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBsYWNlT2ZCaXJ0aFwiPlxuICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgPGRvLWRhdGVwaWNrZXJcbiAgICAgICAgW25hbWVdPVwiJ2RhdGVPZkJpcnRoJ1wiXG4gICAgICAgIFtsYWJlbF09XCInRGF0ZSBvZiBCaXJ0aCdcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ0RhdGUgb2YgQmlydGgnXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkYXRlT2ZCaXJ0aFwiPlxuICAgICAgPC9kby1kYXRlcGlja2VyPlxuICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgW25hbWVdPVwiJ2VtYWlsJ1wiXG4gICAgICAgIFtsYWJlbF09XCInRW1haWwnXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidFbWFpbCdcIlxuICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgIFtza2VsZXRvbl09XCJsb2FkaW5nRm9ybVwiXG4gICAgICAgIFtwYXR0ZXJuXT1cInBhdHRlcm5FbWFpbFwiXG4gICAgICAgIFtwYXJhbUVycm9yXT1cInt2YWx1ZTo1fVwiXG4gICAgICAgIG1pbmxlbmd0aD1cIjVcIlxuICAgICAgICBtYXhsZW5ndGg9XCI1MFwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCIncGhvbmVOdW1iZXInXCJcbiAgICAgICAgW2xhYmVsXT1cIidQaG9uZSBOdW1iZXInXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidQaG9uZSBOdW1iZXInXCJcbiAgICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblBob25lTnVtYmVyXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwaG9uZU51bWJlclwiPlxuICAgICAgPC9kby1pbnB1dC10ZXh0PlxuICAgICAgPGRvLXRleHRhcmVhXG4gICAgICAgIFtuYW1lXT1cIidhZGRyZXNzJ1wiXG4gICAgICAgIFtsYWJlbF09XCInQWRkcmVzcydcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ0FkZHJlc3MnXCJcbiAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICBbc2tlbGV0b25dPVwibG9hZGluZ0Zvcm1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJhZGRyZXNzXCI+XG4gICAgICA8L2RvLXRleHRhcmVhPlxuICAgICAgPGRvLWlucHV0LXRleHRcbiAgICAgICAgW25hbWVdPVwiJ2hlaWdodCdcIlxuICAgICAgICBbbGFiZWxdPVwiJ2hlaWdodC5ib2R5J1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInQ2VudGltZXRlcidcIlxuICAgICAgICBbdHlwZV09XCInbnVtYmVyJ1wiXG4gICAgICAgIFtzdGVwXT1cIidhbnknXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiaGVpZ2h0XCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8taW5wdXQtdGV4dFxuICAgICAgICBbbmFtZV09XCInd2VpZ2h0J1wiXG4gICAgICAgIFtsYWJlbF09XCInd2VpZ2h0LmJvZHknXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidLaWxvZ3JhbSdcIlxuICAgICAgICBbdHlwZV09XCInbnVtYmVyJ1wiXG4gICAgICAgIFtzdGVwXT1cIidhbnknXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwid2VpZ2h0XCI+XG4gICAgICA8L2RvLWlucHV0LXRleHQ+XG4gICAgICA8ZG8tc2VsZWN0XG4gICAgICAgIFtuYW1lXT1cIidibG9vZFR5cGUnXCJcbiAgICAgICAgW2xhYmVsXT1cIidCbG9vZCBUeXBlJ1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInQmxvb2QgVHlwZSdcIlxuICAgICAgICBbaXRlbXNdPVwiYmxvb2RUeXBlRGF0YVwiXG4gICAgICAgIFtzZWFyY2hhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgW3NrZWxldG9uXT1cImxvYWRpbmdGb3JtXCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiYmxvb2RUeXBlXCI+XG4gICAgICA8L2RvLXNlbGVjdD5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuPC9kby13aXphcmQtcGFnZS1vdXRsZXQ+XG4iXX0=