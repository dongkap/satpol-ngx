import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, switchMap, takeUntil } from 'rxjs/operators';
import { API, HTTP_SERVICE, OAUTH_INFO, Pattern, ResponseCode, } from '@dongkap/do-core';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@dongkap/do-core";
import * as i3 from "@dongkap/do-shared";
import * as i4 from "@nebular/theme";
import * as i5 from "@ngx-translate/core";
import * as i6 from "ng-recaptcha";
import * as i7 from "@angular/common";
import * as i8 from "@angular/forms";
export class RegisterPageComponent {
    constructor(router, enc, toastr, dialogService, translate, httpBaseService, oauthResource, apiPath) {
        this.router = router;
        this.enc = enc;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.translate = translate;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.patternFullname = Pattern.FULLNAME;
        this.patternUsername = Pattern.USERNAME;
        this.patternEmail = Pattern.EMAIL;
        this.patternPassword = Pattern.PASSWORD_MEDIUM;
        this.minlengthUsername = 4;
        this.minlengthEmail = 5;
        this.form = new FormGroup({
            fullname: new FormControl(),
            username: new FormControl(),
            email: new FormControl(),
            password: new FormControl(),
            confirmPassword: new FormControl(),
            terms: new FormControl(),
            recaptcha: new FormControl(),
        });
        this.buttonRegister = false;
        this.progressBar = 25;
        this.isCheckUsername = true;
        this.isCheckEmail = true;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    register() {
        if (!this.form.invalid) {
            this.initProgress();
            if (this.progressBar < 35) {
                this.setProgress(this.progressBar = 35);
            }
            this.responseError = null;
            const data = this.form.value;
            data['password'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['password'].value);
            data['confirmPassword'] = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
            const httpHeaders = new HttpHeaders({
                Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonRegister = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['signup'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.setProgress(this.progressBar = 95);
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_REGISTERED) {
                        this.router.navigate(['/auth/login']);
                    }
                    else {
                        this.form.reset();
                        this.buttonRegister = false;
                    }
                }
                else {
                    this.form.reset();
                    this.buttonRegister = false;
                }
            }, (error) => {
                this.buttonRegister = false;
                this.progressBar = 0;
                this.doneProgress();
                if (!(error instanceof HttpErrorResponse)) {
                    if (error['respStatusCode']) {
                        switch (error['respStatusCode']) {
                            case ResponseCode.ERR_SCR0005.toString():
                                this.form.controls['password'].setErrors({
                                    invalid: true,
                                });
                                break;
                            case ResponseCode.ERR_SCR0011.toString():
                                this.form.controls['confirmPassword'].setErrors({
                                    equal: true,
                                });
                                break;
                            default:
                                break;
                        }
                        this.responseError = error['respStatusMessage'][error['respStatusCode']];
                    }
                }
                else {
                }
            });
        }
    }
    get hasErrorFullname() {
        if (this.form.controls['fullname'].errors && this.form.controls['fullname'].invalid && this.form.controls['fullname'].touched) {
            if (this.form.controls['fullname'].errors['required']) {
                this.errorMsgFullname = 'error.fullname.required';
            }
            else {
                this.errorMsgFullname = 'error.fullname.invalid';
            }
        }
        else {
            this.errorMsgFullname = null;
        }
        return (this.form.controls['fullname'] &&
            this.form.controls['fullname'].invalid &&
            this.form.controls['fullname'].touched);
    }
    get hasSuccessFullname() {
        return (this.form.controls['fullname'] &&
            this.form.controls['fullname'].valid &&
            this.form.controls['fullname'].touched);
    }
    get hasErrorUsername() {
        if (this.form.controls['username'].errors && this.form.controls['username'].invalid && this.form.controls['username'].touched) {
            if (this.form.controls['username'].errors['required']) {
                this.errorMsgUsername = 'error.username.required';
            }
            else if (this.form.controls['username'].errors['not-available']) {
                this.errorMsgUsername = 'error.username.not-available';
                this.paramMsgUsername = {
                    value: this.form.controls['username'].value,
                };
            }
            else if (this.form.controls['username'].errors['timeout']) {
                this.errorMsgUsername = 'error.0';
            }
            else if (this.form.controls['username'].errors['error']) {
                this.errorMsgUsername = 'error.500';
            }
            else {
                this.errorMsgUsername = 'error.username.invalid';
            }
        }
        else {
            if ((this.form.controls['username'].touched || this.form.controls['username'].dirty) && this.isCheckUsername) {
                this.isCheckUsername = false;
                this.form.controls['username'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
                this.form.controls['username'].updateValueAndValidity();
            }
            this.errorMsgUsername = null;
        }
        return (this.form.controls['username'] &&
            this.form.controls['username'].invalid &&
            this.form.controls['username'].touched);
    }
    get hasSuccessUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].valid &&
            this.form.controls['username'].touched);
    }
    get hasErrorEmail() {
        if (this.form.controls['email'].errors && this.form.controls['email'].invalid && this.form.controls['email'].touched) {
            if (this.form.controls['email'].errors['required']) {
                this.errorMsgEmail = 'error.email.required';
            }
            else if (this.form.controls['email'].errors['not-available']) {
                this.errorMsgEmail = 'error.email.not-available';
                this.paramMsgEmail = {
                    value: this.form.controls['email'].value,
                };
            }
            else if (this.form.controls['email'].errors['timeout']) {
                this.errorMsgEmail = 'error.0';
            }
            else if (this.form.controls['email'].errors['error']) {
                this.errorMsgEmail = 'error.500';
            }
            else {
                this.errorMsgEmail = 'error.email.invalid';
            }
        }
        else {
            if ((this.form.controls['email'].touched || this.form.controls['email'].dirty) && this.isCheckEmail) {
                this.isCheckEmail = false;
                this.form.controls['email'].setAsyncValidators([userValidator(this.oauthResource, this.httpBaseService, this.apiPath)]);
                this.form.controls['email'].updateValueAndValidity();
            }
            this.errorMsgEmail = null;
        }
        return (this.form.controls['email'] &&
            this.form.controls['email'].invalid &&
            this.form.controls['email'].touched);
    }
    get hasSuccessEmail() {
        return (this.form.controls['email'] &&
            this.form.controls['email'].valid &&
            this.form.controls['email'].touched);
    }
    get hasErrorPassword() {
        if (this.form.controls['password'].errors && this.form.controls['password'].invalid && this.form.controls['password'].touched) {
            this.errorMsgPassword = 'error.pattern.Password';
        }
        else {
            this.errorMsgPassword = null;
        }
        return (this.form.controls['password'] &&
            this.form.controls['password'].invalid &&
            this.form.controls['password'].touched);
    }
    get hasSuccessPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].valid &&
            this.form.controls['password'].touched);
    }
    get hasErrorConfirmPassword() {
        if (this.form.controls['confirmPassword'].errors &&
            this.form.controls['confirmPassword'].invalid &&
            this.form.controls['confirmPassword'].touched) {
            this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
        }
        else {
            if (this.form.controls['password'].value !== this.form.controls['confirmPassword'].value) {
                this.errorMsgConfirmPassword = 'error.equal.confirmPassword-register';
                this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator(this.form)]);
                this.form.controls['confirmPassword'].updateValueAndValidity();
            }
            else {
                this.errorMsgConfirmPassword = null;
            }
        }
        return (this.form.controls['confirmPassword'] &&
            this.form.controls['confirmPassword'].invalid &&
            this.form.controls['confirmPassword'].touched);
    }
    get hasSuccessConfirmPassword() {
        return (this.form.controls['confirmPassword'] &&
            this.form.controls['confirmPassword'].valid &&
            this.form.controls['confirmPassword'].touched);
    }
    onCheckedChange() {
        if (!this.form.controls['terms'].value) {
            this.form.controls['terms'].setValue(null);
        }
    }
    onClickTermsConditions() {
        const data = {
            parameterCode: 'TERMS_CONDITIONS.DONGKAP'
        };
        const httpHeaders = new HttpHeaders({
            Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            'Content-Type': 'application/json',
            'Accept-Language': this.translate.currentLang,
        });
        this.httpBaseService.HTTP_BASE(this.apiPath['openapi']['parameter'], data, httpHeaders)
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            this.dialogService.open(TermsConditionsComponent, {
                context: {
                    content: response['parameterValue'],
                },
            })
                .onClose.subscribe((terms) => {
                if (terms) {
                    this.form.controls['terms'].setValue(true);
                }
            });
        });
    }
    onKeyDownUsername(event) {
        if (event.key) {
            if (!event.key.match(/[!@#$%^&*()?":{}|<>\[\];\\=~`]/g)) {
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
                    this.isCheckUsername = true;
                }
            }
        }
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
    initProgress() {
        document.querySelectorAll('.pace-done').forEach(pace => {
            pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
            pace.className = pace.className.replace('pace-done', 'pace-running');
        });
        document.querySelectorAll('.pace-inactive').forEach(pace => {
            pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
            pace.className = pace.className.replace('pace-inactive', 'pace-active');
        });
        this.progressDOM = document.getElementsByClassName('pace-progress').item(0);
    }
    doneProgress() {
        document.querySelectorAll('.pace-running').forEach(pace => {
            pace.className = pace.className.replace('pace-running', 'pace-done');
        });
        document.querySelectorAll('.pace-active').forEach(pace => {
            pace.className = pace.className.replace('pace-active', 'pace-inactive');
        });
    }
    setProgress(progress) {
        this.progressDOM.style.transform = 'translate3d(' + progress + '%, 0px, 0px)';
        this.progressDOM.getAttributeNode('data-progress-text').value = progress + '%';
        this.progressDOM.getAttributeNode('data-progress').value = progress.toString();
    }
}
RegisterPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterPageComponent, deps: [{ token: i1.Router }, { token: i2.EncryptionService }, { token: i3.DoToastrService }, { token: i4.NbDialogService }, { token: i5.TranslateService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
RegisterPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RegisterPageComponent, selector: "do-register-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Register' | translate }}</h1>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.register' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"register()\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'Full name' | translate }}* :</label>\n    <input [formControlName]=\"'fullname'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternFullname\"\n          [ngClass]=\"{\n            'status-danger': hasErrorFullname,\n            'status-success': hasSuccessFullname\n          }\"\n          name=\"fullname\"\n          id=\"inputFullname\"\n          placeholder=\"{{ 'Full name' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorFullname\">\n      <span class=\"caption status-danger\">{{errorMsgFullname | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-username\">{{ 'Username' | translate }}* :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"20\"\n          [pattern]=\"patternUsername\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          (keydown)=\"onKeyDownUsername($event)\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{errorMsgUsername | translate:paramMsgUsername}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">{{ 'Email' | translate }}* :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          (keydown)=\"onKeyDownEmail($event)\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"3\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{errorMsgEmail | translate:paramMsgEmail}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <div class=\"terms-row row\">\n      <nb-checkbox\n        name=\"terms\"\n        [formControlName]=\"'terms'\"\n        [required]=\"true\"\n        (change)=\"onCheckedChange()\">\n        {{ 'message.terms-conditions-label' | translate}}\n      </nb-checkbox>\n      <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\"><strong>{{ 'message.terms-conditions' | translate}}</strong></span>\n    </div>\n  </div>\n\n  <div class=\"form-control-group\" style=\"transform:scale(0.7);transform-origin:0;\">\n    <re-captcha\n      [formControlName]=\"'recaptcha'\"\n      required>\n    </re-captcha>\n  </div>\n\n  <button [disabled]=\"!form.valid || buttonRegister\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"!form.valid || buttonRegister\">\n    {{ 'Register' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.register-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n", styles: [".terms-row{margin-left:0}.terms-conditions{padding:.1rem 0 0 .25rem;color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}\n"], components: [{ type: i4.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i4.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }, { type: i6.RecaptchaComponent, selector: "re-captcha", inputs: ["id", "errorMode", "siteKey", "theme", "type", "size", "badge", "tabIndex"], outputs: ["resolved", "error"], exportAs: ["reCaptcha"] }, { type: i4.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i8.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i8.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i8.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i8.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i8.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i8.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6.RecaptchaValueAccessorDirective, selector: "re-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]" }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i5.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-register-page',
                    styleUrls: ['register-page.component.scss'],
                    templateUrl: 'register-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.EncryptionService }, { type: i3.DoToastrService }, { type: i4.NbDialogService }, { type: i5.TranslateService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }]; } });
export function confirmPasswordValidator(form) {
    return (control) => {
        if (form.controls) {
            if (form.controls['password'].value !== form.controls['confirmPassword'].value) {
                return { equal: true };
            }
        }
        return null;
    };
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsR0FJWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakcsT0FBTyxFQUNMLEdBQUcsRUFFSCxZQUFZLEVBQ1osVUFBVSxFQUNWLE9BQU8sRUFDUCxZQUFZLEdBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQU0xQixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7Ozs7Ozs7OztBQU8xRixNQUFNLE9BQU8scUJBQXFCO0lBbUNoQyxZQUNVLE1BQWMsRUFDZCxHQUFzQixFQUN0QixNQUF1QixFQUN2QixhQUE4QixFQUM5QixTQUEyQixFQUNOLGVBQW1DLEVBQ3JDLGFBQW9DLEVBQzNDLE9BQWlCO1FBUDdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdB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LENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLFxuICBGb3JtQ29udHJvbCxcbiAgVmFsaWRhdG9yRm4sXG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQXN5bmNWYWxpZGF0b3JGbixcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaXJzdCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQge1xuICBBUEksXG4gIEVuY3J5cHRpb25TZXJ2aWNlLFxuICBIVFRQX1NFUlZJQ0UsXG4gIE9BVVRIX0lORk8sXG4gIFBhdHRlcm4sXG4gIFJlc3BvbnNlQ29kZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFQSU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBIdHRwRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgRG9Ub2FzdHJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcbmltcG9ydCB7IFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4uL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RvLXJlZ2lzdGVyLXBhZ2UnLFxuICAgIHN0eWxlVXJsczogWydyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwdWJsaWMgcGF0dGVybkZ1bGxuYW1lOiBzdHJpbmcgPSBQYXR0ZXJuLkZVTExOQU1FO1xuICBwdWJsaWMgcGF0dGVyblVzZXJuYW1lOiBzdHJpbmcgPSBQYXR0ZXJuLlVTRVJOQU1FO1xuICBwdWJsaWMgcGF0dGVybkVtYWlsOiBzdHJpbmcgPSBQYXR0ZXJuLkVNQUlMO1xuICBwdWJsaWMgcGF0dGVyblBhc3N3b3JkOiBzdHJpbmcgPSBQYXR0ZXJuLlBBU1NXT1JEX01FRElVTTtcbiAgcHVibGljIGVycm9yTXNnRnVsbG5hbWU6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnVXNlcm5hbWU6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnRW1haWw6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnUGFzc3dvcmQ6IHN0cmluZztcbiAgcHVibGljIGVycm9yTXNnQ29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gIHB1YmxpYyBwYXJhbU1zZ1VzZXJuYW1lOiBhbnk7XG4gIHB1YmxpYyBwYXJhbU1zZ0VtYWlsOiBhbnk7XG4gIHB1YmxpYyBtaW5sZW5ndGhVc2VybmFtZTogbnVtYmVyID0gNDtcbiAgcHVibGljIG1pbmxlbmd0aEVtYWlsOiBudW1iZXIgPSA1O1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBmdWxsbmFtZTogbmV3IEZvcm1Db250cm9sKCksXG4gICAgdXNlcm5hbWU6IG5ldyBGb3JtQ29udHJvbCgpLFxuICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgY29uZmlybVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICB0ZXJtczogbmV3IEZvcm1Db250cm9sKCksXG4gICAgcmVjYXB0Y2hhOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgfSk7XG5cbiAgcHVibGljIHJlc3BvbnNlRXJyb3I6IGFueTtcbiAgcHVibGljIGJ1dHRvblJlZ2lzdGVyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDI1O1xuICBwcm90ZWN0ZWQgcHJvZ3Jlc3NET006IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGlzQ2hlY2tVc2VybmFtZTogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgaXNDaGVja0VtYWlsOiBib29sZWFuID0gdHJ1ZTtcblxuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0cjogRG9Ub2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIEBJbmplY3QoSFRUUF9TRVJWSUNFKXByaXZhdGUgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gICAgQEluamVjdChPQVVUSF9JTkZPKXByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICAgIEBJbmplY3QoQVBJKXByaXZhdGUgYXBpUGF0aDogQVBJTW9kZWwpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgIGlmICghdGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIHRoaXMuaW5pdFByb2dyZXNzKCk7XG4gICAgICBpZiAodGhpcy5wcm9ncmVzc0JhciA8IDM1KSB7XG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzc0JhciA9IDM1KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gbnVsbDtcbiAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICAgIGRhdGFbJ3Bhc3N3b3JkJ10gPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsdWUpO1xuICAgICAgZGF0YVsnY29uZmlybVBhc3N3b3JkJ10gPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbHVlKTtcbiAgICAgIGNvbnN0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCYXNpYyAnICsgYnRvYSh0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYnV0dG9uUmVnaXN0ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5odHRwQmFzZVNlcnZpY2UuSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWydzaWdudXAnXSwgZGF0YSwgaHR0cEhlYWRlcnMpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy50b2FzdHIuc2hvd0kxOG4ocmVzcG9uc2UucmVzcFN0YXR1c01lc3NhZ2VbcmVzcG9uc2UucmVzcFN0YXR1c0NvZGVdKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzc0JhciA9IDk1KTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAwO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BTdGF0dXNDb2RlID09PSBSZXNwb25zZUNvZGUuT0tfUkVHSVNURVJFRCkge1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2xvZ2luJ10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgIHRoaXMuYnV0dG9uUmVnaXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblJlZ2lzdGVyID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuYnV0dG9uUmVnaXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMDtcbiAgICAgICAgICB0aGlzLmRvbmVQcm9ncmVzcygpO1xuXG4gICAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHtcbiAgICAgICAgICAgIGlmIChlcnJvclsncmVzcFN0YXR1c0NvZGUnXSkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGVycm9yWydyZXNwU3RhdHVzQ29kZSddKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBSZXNwb25zZUNvZGUuRVJSX1NDUjAwMDUudG9TdHJpbmcoKTpcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFJlc3BvbnNlQ29kZS5FUlJfU0NSMDAxMS50b1N0cmluZygpOlxuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS5zZXRFcnJvcnMoe1xuICAgICAgICAgICAgICAgICAgICBlcXVhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yWydyZXNwU3RhdHVzTWVzc2FnZSddW2Vycm9yWydyZXNwU3RhdHVzQ29kZSddXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc0Vycm9yRnVsbG5hbWUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXS5lcnJvcnMgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLmludmFsaWQgJiYgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLnRvdWNoZWQpIHtcbiAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10uZXJyb3JzWydyZXF1aXJlZCddKXtcbiAgICAgICAgdGhpcy5lcnJvck1zZ0Z1bGxuYW1lID0gJ2Vycm9yLmZ1bGxuYW1lLnJlcXVpcmVkJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXJyb3JNc2dGdWxsbmFtZSA9ICdlcnJvci5mdWxsbmFtZS5pbnZhbGlkJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvck1zZ0Z1bGxuYW1lID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzRnVsbG5hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZnVsbG5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydmdWxsbmFtZSddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2Z1bGxuYW1lJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JVc2VybmFtZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmVycm9ycyAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10uaW52YWxpZCAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5lcnJvcnNbJ3JlcXVpcmVkJ10pIHtcbiAgICAgICAgdGhpcy5lcnJvck1zZ1VzZXJuYW1lID0gJ2Vycm9yLnVzZXJuYW1lLnJlcXVpcmVkJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmVycm9yc1snbm90LWF2YWlsYWJsZSddKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNc2dVc2VybmFtZSA9ICdlcnJvci51c2VybmFtZS5ub3QtYXZhaWxhYmxlJztcbiAgICAgICAgdGhpcy5wYXJhbU1zZ1VzZXJuYW1lID0ge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5lcnJvcnNbJ3RpbWVvdXQnXSkge1xuICAgICAgICB0aGlzLmVycm9yTXNnVXNlcm5hbWUgPSAnZXJyb3IuMCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5lcnJvcnNbJ2Vycm9yJ10pIHtcbiAgICAgICAgdGhpcy5lcnJvck1zZ1VzZXJuYW1lID0gJ2Vycm9yLjUwMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTXNnVXNlcm5hbWUgPSAnZXJyb3IudXNlcm5hbWUuaW52YWxpZCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgodGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnRvdWNoZWQgfHwgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmRpcnR5KSAmJiB0aGlzLmlzQ2hlY2tVc2VybmFtZSkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tVc2VybmFtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10uc2V0QXN5bmNWYWxpZGF0b3JzKFt1c2VyVmFsaWRhdG9yKHRoaXMub2F1dGhSZXNvdXJjZSwgdGhpcy5odHRwQmFzZVNlcnZpY2UsIHRoaXMuYXBpUGF0aCldKTtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXJyb3JNc2dVc2VybmFtZSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc1VzZXJuYW1lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnRvdWNoZWRcbiAgICAgICk7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JFbWFpbCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLmVycm9ycyAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10uaW52YWxpZCAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10udG91Y2hlZCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5lcnJvcnNbJ3JlcXVpcmVkJ10pIHtcbiAgICAgICAgdGhpcy5lcnJvck1zZ0VtYWlsID0gJ2Vycm9yLmVtYWlsLnJlcXVpcmVkJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLmVycm9yc1snbm90LWF2YWlsYWJsZSddKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNc2dFbWFpbCA9ICdlcnJvci5lbWFpbC5ub3QtYXZhaWxhYmxlJztcbiAgICAgICAgdGhpcy5wYXJhbU1zZ0VtYWlsID0ge1xuICAgICAgICAgIHZhbHVlOiB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10udmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5lcnJvcnNbJ3RpbWVvdXQnXSkge1xuICAgICAgICB0aGlzLmVycm9yTXNnRW1haWwgPSAnZXJyb3IuMCc7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5lcnJvcnNbJ2Vycm9yJ10pIHtcbiAgICAgICAgdGhpcy5lcnJvck1zZ0VtYWlsID0gJ2Vycm9yLjUwMCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTXNnRW1haWwgPSAnZXJyb3IuZW1haWwuaW52YWxpZCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICgodGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWQgfHwgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLmRpcnR5KSAmJiB0aGlzLmlzQ2hlY2tFbWFpbCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tFbWFpbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10uc2V0QXN5bmNWYWxpZGF0b3JzKFt1c2VyVmFsaWRhdG9yKHRoaXMub2F1dGhSZXNvdXJjZSwgdGhpcy5odHRwQmFzZVNlcnZpY2UsIHRoaXMuYXBpUGF0aCldKTtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZXJyb3JNc2dFbWFpbCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc0VtYWlsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWRcbiAgICAgICk7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLmVycm9ycyAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJiB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udG91Y2hlZCkge1xuICAgICAgdGhpcy5lcnJvck1zZ1Bhc3N3b3JkID0gJ2Vycm9yLnBhdHRlcm4uUGFzc3dvcmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTXNnUGFzc3dvcmQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNFcnJvckNvbmZpcm1QYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLmVycm9ycyAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWQpIHtcbiAgICAgIHRoaXMuZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgPSAnZXJyb3IuZXF1YWwuY29uZmlybVBhc3N3b3JkLXJlZ2lzdGVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZSAhPT0gdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSkge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gJ2Vycm9yLmVxdWFsLmNvbmZpcm1QYXNzd29yZC1yZWdpc3Rlcic7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uc2V0VmFsaWRhdG9ycyhbY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yKHRoaXMuZm9ybSldKTtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzQ29uZmlybVBhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgb25DaGVja2VkQ2hhbmdlKCl7XG4gICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbJ3Rlcm1zJ10udmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndGVybXMnXS5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVGVybXNDb25kaXRpb25zKCl7XG4gICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgcGFyYW1ldGVyQ29kZTogJ1RFUk1TX0NPTkRJVElPTlMuRE9OR0tBUCdcbiAgICB9O1xuICAgIGNvbnN0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICBBdXRob3JpemF0aW9uOiAnQmFzaWMgJyArIGJ0b2EodGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfaWQnXSArICc6JyArIHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X3NlY3JldCddKSxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQWNjZXB0LUxhbmd1YWdlJzogdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcsXG4gICAgfSk7XG4gICAgdGhpcy5odHRwQmFzZVNlcnZpY2UuSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnb3BlbmFwaSddWydwYXJhbWV0ZXInXSwgZGF0YSwgaHR0cEhlYWRlcnMpXG4gICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCwge1xuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgY29udGVudDogcmVzcG9uc2VbJ3BhcmFtZXRlclZhbHVlJ10sXG4gICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5vbkNsb3NlLnN1YnNjcmliZSgodGVybXM6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAodGVybXMpIHtcbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Rlcm1zJ10uc2V0VmFsdWUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25LZXlEb3duVXNlcm5hbWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpe1xuICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgIGlmICghZXZlbnQua2V5Lm1hdGNoKC9bIUAjJCVeJiooKT9cIjp7fXw8PlxcW1xcXTtcXFxcPX5gXS9nKSkge1xuICAgICAgICBpZiAoKFtcbiAgICAgICAgICAnVEFCJyxcbiAgICAgICAgICAnRVNDQVBFJyxcbiAgICAgICAgICAnRU5URVInLFxuICAgICAgICAgICdIT01FJyxcbiAgICAgICAgICAnRU5EJyxcbiAgICAgICAgICAnQVJST1dMRUZUJyxcbiAgICAgICAgICAnQVJST1dSSUdIVCcsXG4gICAgICAgICAgJ0FSUk9XVVAnLFxuICAgICAgICAgICdBUlJPV0RPV04nLFxuICAgICAgICAgICdQQUdFVVAnLFxuICAgICAgICAgICdQQUdFRE9XTiddLmluZGV4T2YoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkpID09PSAtMSkgJiZcbiAgICAgICAgIWV2ZW50LmN0cmxLZXkgJiYgIWV2ZW50Lm1ldGFLZXkgJiYgIWV2ZW50LmFsdEtleSkge1xuICAgICAgICAgICAgdGhpcy5pc0NoZWNrVXNlcm5hbWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duRW1haWwoZXZlbnQ6IEtleWJvYXJkRXZlbnQpe1xuICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgIGlmICghZXZlbnQua2V5Lm1hdGNoKC9bISMkJV4mKigpP1wiOnt9fDw+XFxbXFxdO1xcXFw9fmBdL2cpKSB7XG4gICAgICAgIGlmICgoW1xuICAgICAgICAgICdUQUInLFxuICAgICAgICAgICdFU0NBUEUnLFxuICAgICAgICAgICdFTlRFUicsXG4gICAgICAgICAgJ0hPTUUnLFxuICAgICAgICAgICdFTkQnLFxuICAgICAgICAgICdBUlJPV0xFRlQnLFxuICAgICAgICAgICdBUlJPV1JJR0hUJyxcbiAgICAgICAgICAnQVJST1dVUCcsXG4gICAgICAgICAgJ0FSUk9XRE9XTicsXG4gICAgICAgICAgJ1BBR0VVUCcsXG4gICAgICAgICAgJ1BBR0VET1dOJ10uaW5kZXhPZihldmVudC5rZXkudG9VcHBlckNhc2UoKSkgPT09IC0xKSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuYWx0S2V5KSB7XG4gICAgICAgICAgdGhpcy5pc0NoZWNrRW1haWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQcm9ncmVzcygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1kb25lJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtaW5hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGRvbmVQcm9ncmVzcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1ydW5uaW5nJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICdwYWNlLWRvbmUnKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAncGFjZS1pbmFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgcHJvZ3Jlc3MgKyAnJSwgMHB4LCAwcHgpJztcbiAgICB0aGlzLnByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gcHJvZ3Jlc3MgKyAnJSc7XG4gICAgdGhpcy5wcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSBwcm9ncmVzcy50b1N0cmluZygpO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1QYXNzd29yZFZhbGlkYXRvcihmb3JtOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgIGlmIChmb3JtLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZSAhPT0gZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udmFsdWUpe1xuICAgICAgICByZXR1cm4geyBlcXVhbDogdHJ1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJWYWxpZGF0b3IoXG4gIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gIGFwaVBhdGg6IEFQSU1vZGVsKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlQ2hhbmdlcykge1xuICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdG9yU3ViamVjdCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PEFwaUJhc2VSZXNwb25zZT4oKTtcbiAgICAgICAgICBjb25zdCBodHRwSGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0Jhc2ljICcgKyBidG9hKG9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgb2F1dGhSZXNvdXJjZVsnY2xpZW50X3NlY3JldCddKSxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICAgICAgdXNlcjogY29udHJvbC52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGxldCBkYXRhVmFsaWRhdG9yOiBhbnk7XG4gICAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUpe1xuICAgICAgICAgICAgaHR0cEJhc2VTZXJ2aWNlLkhUVFBfQkFTRShhcGlQYXRoWydhdXRoJ11bJ2NoZWNrLXVzZXInXSwgZGF0YSwgaHR0cEhlYWRlcnMpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbJ3Jlc3BTdGF0dXNDb2RlJ10gPT09IFJlc3BvbnNlQ29kZS5PS19TQ1IwMTIudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yU3ViamVjdCQubmV4dChudWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZGF0YVZhbGlkYXRvciA9IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yU3ViamVjdCQubmV4dChkYXRhVmFsaWRhdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gMzAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFWYWxpZGF0b3IgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgJ25vdC1hdmFpbGFibGUnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVZhbGlkYXRvciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JTdWJqZWN0JC5uZXh0KGRhdGFWYWxpZGF0b3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRvclN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICB9KSkucGlwZShmaXJzdCgpKTtcbiAgICB9XG4gIH07XG59XG4iLCI8aDEgaWQ9XCJ0aXRsZVwiIGNsYXNzPVwidGl0bGVcIj57eyAnUmVnaXN0ZXInIHwgdHJhbnNsYXRlIH19PC9oMT5cblxuPG5iLWFsZXJ0ICpuZ0lmPVwicmVzcG9uc2VFcnJvclwiIG91dGxpbmU9XCJkYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgPHAgY2xhc3M9XCJhbGVydC10aXRsZVwiPjxiPnt7ICdhbGVydC50aXRsZS5yZWdpc3RlcicgfCB0cmFuc2xhdGUgfX08L2I+PC9wPlxuICA8dWwgY2xhc3M9XCJhbGVydC1tZXNzYWdlLWxpc3RcIj5cbiAgICA8bGkgY2xhc3M9XCJhbGVydC1tZXNzYWdlXCI+e3sgcmVzcG9uc2VFcnJvciB9fTwvbGk+XG4gIDwvdWw+XG48L25iLWFsZXJ0PlxuXG48Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiAobmdTdWJtaXQpPVwicmVnaXN0ZXIoKVwiIGFyaWEtbGFiZWxsZWRieT1cInRpdGxlXCI+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiaW5wdXQtbmFtZVwiPnt7ICdGdWxsIG5hbWUnIHwgdHJhbnNsYXRlIH19KiA6PC9sYWJlbD5cbiAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCInZnVsbG5hbWUnXCJcbiAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiNFwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiNTBcIlxuICAgICAgICAgIFtwYXR0ZXJuXT1cInBhdHRlcm5GdWxsbmFtZVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgJ3N0YXR1cy1kYW5nZXInOiBoYXNFcnJvckZ1bGxuYW1lLFxuICAgICAgICAgICAgJ3N0YXR1cy1zdWNjZXNzJzogaGFzU3VjY2Vzc0Z1bGxuYW1lXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgbmFtZT1cImZ1bGxuYW1lXCJcbiAgICAgICAgICBpZD1cImlucHV0RnVsbG5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ0Z1bGwgbmFtZScgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgIGZpZWxkU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjFcIlxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICBmdWxsV2lkdGg+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0Vycm9yRnVsbG5hbWVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3tlcnJvck1zZ0Z1bGxuYW1lIHwgdHJhbnNsYXRlfX08L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cImlucHV0LXVzZXJuYW1lXCI+e3sgJ1VzZXJuYW1lJyB8IHRyYW5zbGF0ZSB9fSogOjwvbGFiZWw+XG4gICAgPGlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiJ3VzZXJuYW1lJ1wiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICAgIG1pbmxlbmd0aD1cIjVcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjIwXCJcbiAgICAgICAgICBbcGF0dGVybl09XCJwYXR0ZXJuVXNlcm5hbWVcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JVc2VybmFtZSxcbiAgICAgICAgICAgICdzdGF0dXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3NVc2VybmFtZVxuICAgICAgICAgIH1cIlxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgaWQ9XCJpbnB1dFVzZXJuYW1lXCJcbiAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd25Vc2VybmFtZSgkZXZlbnQpXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdVc2VybmFtZScgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgIGZpZWxkU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjJcIlxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICBmdWxsV2lkdGg+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0Vycm9yVXNlcm5hbWVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3tlcnJvck1zZ1VzZXJuYW1lIHwgdHJhbnNsYXRlOnBhcmFtTXNnVXNlcm5hbWV9fTwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiaW5wdXQtZW1haWxcIj57eyAnRW1haWwnIHwgdHJhbnNsYXRlIH19KiA6PC9sYWJlbD5cbiAgICA8aW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCInZW1haWwnXCJcbiAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiNVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiNTBcIlxuICAgICAgICAgIFtwYXR0ZXJuXT1cInBhdHRlcm5FbWFpbFwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgJ3N0YXR1cy1kYW5nZXInOiBoYXNFcnJvckVtYWlsLFxuICAgICAgICAgICAgJ3N0YXR1cy1zdWNjZXNzJzogaGFzU3VjY2Vzc0VtYWlsXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBpZD1cImlucHV0RW1haWxcIlxuICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bkVtYWlsKCRldmVudClcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ0VtYWlsJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgZmllbGRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgIHRhYmluZGV4PVwiM1wiXG4gICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgIGZ1bGxXaWR0aD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRXJyb3JFbWFpbFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcIj57e2Vycm9yTXNnRW1haWwgfCB0cmFuc2xhdGU6cGFyYW1Nc2dFbWFpbH19PC9zcGFuPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sLWdyb3VwXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJpbnB1dC1wYXNzd29yZFwiPnt7ICdQYXNzd29yZCcgfCB0cmFuc2xhdGUgfX0qIDo8L2xhYmVsPlxuICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cIidwYXNzd29yZCdcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBtaW5sZW5ndGg9XCI4XCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCI1MFwiXG4gICAgICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblBhc3N3b3JkXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAnc3RhdHVzLWRhbmdlcic6IGhhc0Vycm9yUGFzc3dvcmQsXG4gICAgICAgICAgICAnc3RhdHVzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzUGFzc3dvcmRcbiAgICAgICAgICB9XCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgaWQ9XCJpbnB1dFBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdQYXNzd29yZCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgIGZpZWxkU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjRcIlxuICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICBmdWxsV2lkdGg+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0Vycm9yUGFzc3dvcmRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3sgZXJyb3JNc2dQYXNzd29yZCB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sLWdyb3VwXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJpbnB1dC1jb25maXJtcGFzc3dvcmRcIj57eyAnQ29uZmlybSBQYXNzd29yZCcgfCB0cmFuc2xhdGUgfX0qIDo8L2xhYmVsPlxuICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cIidjb25maXJtUGFzc3dvcmQnXCJcbiAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiOFwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiNTBcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JDb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgICAnc3RhdHVzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzQ29uZmlybVBhc3N3b3JkXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBpZD1cImlucHV0Q29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdDb25maXJtIFBhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgZmllbGRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgIHRhYmluZGV4PVwiNVwiXG4gICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgIGZ1bGxXaWR0aD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRXJyb3JDb25maXJtUGFzc3dvcmRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3sgZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cCBhY2NlcHQtZ3JvdXBcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGVybXMtcm93IHJvd1wiPlxuICAgICAgPG5iLWNoZWNrYm94XG4gICAgICAgIG5hbWU9XCJ0ZXJtc1wiXG4gICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiJ3Rlcm1zJ1wiXG4gICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgKGNoYW5nZSk9XCJvbkNoZWNrZWRDaGFuZ2UoKVwiPlxuICAgICAgICB7eyAnbWVzc2FnZS50ZXJtcy1jb25kaXRpb25zLWxhYmVsJyB8IHRyYW5zbGF0ZX19XG4gICAgICA8L25iLWNoZWNrYm94PlxuICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXJtcy1jb25kaXRpb25zXCIgKGNsaWNrKT1cIm9uQ2xpY2tUZXJtc0NvbmRpdGlvbnMoKVwiIHRhYmluZGV4PVwiLTFcIj48c3Ryb25nPnt7ICdtZXNzYWdlLnRlcm1zLWNvbmRpdGlvbnMnIHwgdHJhbnNsYXRlfX08L3N0cm9uZz48L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wtZ3JvdXBcIiBzdHlsZT1cInRyYW5zZm9ybTpzY2FsZSgwLjcpO3RyYW5zZm9ybS1vcmlnaW46MDtcIj5cbiAgICA8cmUtY2FwdGNoYVxuICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCIncmVjYXB0Y2hhJ1wiXG4gICAgICByZXF1aXJlZD5cbiAgICA8L3JlLWNhcHRjaGE+XG4gIDwvZGl2PlxuXG4gIDxidXR0b24gW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkIHx8IGJ1dHRvblJlZ2lzdGVyXCJcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgW2NsYXNzLmJ0bi1wdWxzZV09XCIhZm9ybS52YWxpZCB8fCBidXR0b25SZWdpc3RlclwiPlxuICAgIHt7ICdSZWdpc3RlcicgfCB0cmFuc2xhdGUgfX1cbiAgPC9idXR0b24+XG48L2Zvcm0+XG5cbjxzZWN0aW9uIGNsYXNzPVwiYW5vdGhlci1hY3Rpb25cIiBhcmlhLWxhYmVsPVwiU2lnbiBpblwiPlxuICB7eyAnbWVzc2FnZS5yZWdpc3Rlci1mb290ZXInIHwgdHJhbnNsYXRlfX0gPGEgY2xhc3M9XCJ0ZXh0LWxpbmtcIiByb3V0ZXJMaW5rPVwiL2F1dGgvbG9naW5cIiB0YWJpbmRleD1cIi0xXCI+e3sgJ0xvZ2luJyB8IHRyYW5zbGF0ZX19PC9hPlxuPC9zZWN0aW9uPlxuIl19