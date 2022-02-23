import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { API, HTTP_SERVICE, OAUTH_INFO, Pattern, ResponseCode, } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@dongkap/do-shared";
import * as i3 from "@ngx-translate/core";
import * as i4 from "@dongkap/do-core";
import * as i5 from "@nebular/theme";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
export class ForgotPageComponent {
    constructor(router, route, toastr, translate, enc, httpBaseService, oauthResource, apiPath) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.translate = translate;
        this.enc = enc;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.buttonForgotPassword = false;
        this.progressBar = 25;
        this.patternPassword = Pattern.PASSWORD_MEDIUM;
        this.form = new FormGroup({
            newPassword: new FormControl(),
            confirmPassword: new FormControl(),
        });
        this.destroy$ = new Subject();
        if (this.route.snapshot.params['id'] !== null && this.route.snapshot.params['code'] !== null) {
            this.verificationId = this.route.snapshot.params['id'];
            this.verificationCode = this.route.snapshot.params['code'];
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    forgotPassword() {
        if (!this.form.invalid) {
            this.initProgress();
            if (this.progressBar < 35) {
                this.setProgress(this.progressBar = 35);
            }
            this.responseError = null;
            const newPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['newPassword'].value);
            const confirmPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
            const data = {
                verificationId: this.verificationId,
                verificationCode: this.verificationCode,
                newPassword,
                confirmPassword,
            };
            const httpHeaders = new HttpHeaders({
                Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonForgotPassword = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['forgot-password'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.setProgress(this.progressBar = 95);
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_FORGOT_PASSWORD) {
                        this.router.navigate(['/auth/login']);
                    }
                    else {
                        this.form.reset();
                        this.buttonForgotPassword = false;
                    }
                }
                else {
                    this.form.reset();
                    this.buttonForgotPassword = false;
                }
            }, (error) => {
                this.buttonForgotPassword = false;
                this.progressBar = 0;
                this.doneProgress();
                if (!(error instanceof HttpErrorResponse)) {
                    if (error['respStatusCode']) {
                        this.responseError = error['respStatusMessage'][error['respStatusCode']];
                    }
                }
            });
        }
    }
    get hasErrorNewPassword() {
        if (this.form.controls['newPassword'].errors &&
            this.form.controls['newPassword'].invalid &&
            this.form.controls['newPassword'].touched) {
            this.errorMsgNewPassword = 'error.pattern.Password';
        }
        else {
            this.errorMsgNewPassword = null;
        }
        return (this.form.controls['newPassword'] &&
            this.form.controls['newPassword'].invalid &&
            this.form.controls['newPassword'].touched);
    }
    get hasSuccessNewPassword() {
        return (this.form.controls['newPassword'] &&
            this.form.controls['newPassword'].valid &&
            this.form.controls['newPassword'].touched);
    }
    get hasErrorConfirmPassword() {
        if (this.form.controls['confirmPassword'].errors &&
            this.form.controls['confirmPassword'].invalid &&
            this.form.controls['confirmPassword'].touched) {
            this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
        }
        else {
            if (this.form.controls['newPassword'].value !== this.form.controls['confirmPassword'].value) {
                this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
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
ForgotPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ForgotPageComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.DoToastrService }, { token: i3.TranslateService }, { token: i4.EncryptionService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
ForgotPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ForgotPageComponent, selector: "do-forgot-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Reset Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.reset-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.reset-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'New Password' | translate }}* :</label>\n    <input [formControlName]=\"'newPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorNewPassword,\n            'status-success': hasSuccessNewPassword\n          }\"\n          name=\"newPassword\"\n          type=\"password\"\n          id=\"inputNewPassword\"\n          placeholder=\"{{ 'New Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorNewPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgNewPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Reset Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.reset-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n", styles: [""], components: [{ type: i5.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i5.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ForgotPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-forgot-page',
                    styleUrls: ['forgot-page.component.scss'],
                    templateUrl: 'forgot-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.DoToastrService }, { type: i3.TranslateService }, { type: i4.EncryptionService }, { type: undefined, decorators: [{
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
            if (form.controls['newPassword'].value !== form.controls['confirmPassword'].value) {
                return { equal: true };
            }
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tYXV0aC9zcmMvbGliL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvcGFnZXMvZm9yZ290L2ZvcmdvdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFnQyxNQUFNLGdCQUFnQixDQUFDO0FBRXRGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsR0FBRyxFQUVILFlBQVksRUFDWixVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksR0FDYixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7QUFZMUIsTUFBTSxPQUFPLG1CQUFtQjtJQXFCOUIsWUFDVSxNQUFjLEVBQ2QsS0FBcUIsRUFDckIsTUFBdUIsRUFDdkIsU0FBMkIsRUFDM0IsR0FBc0IsRUFDRCxlQUFtQyxFQUNyQyxhQUFvQyxFQUMzQyxPQUFpQjtRQVA3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDRCxvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDckMsa0JBQWEs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QyxLQUFLLEVBQUM7Z0JBQ2hGLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDeEI7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7XG4gIEFQSSxcbiAgRW5jcnlwdGlvblNlcnZpY2UsXG4gIEhUVFBfU0VSVklDRSxcbiAgT0FVVEhfSU5GTyxcbiAgUGF0dGVybixcbiAgUmVzcG9uc2VDb2RlLFxufSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQVBJTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEh0dHBGYWN0b3J5U2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgU2VjdXJpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBEb1RvYXN0clNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RvLWZvcmdvdC1wYWdlJyxcbiAgICBzdHlsZVVybHM6IFsnZm9yZ290LXBhZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJ2ZvcmdvdC1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9yZ290UGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIHJlc3BvbnNlRXJyb3I6IGFueTtcbiAgcHVibGljIGJ1dHRvbkZvcmdvdFBhc3N3b3JkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDI1O1xuICBwcm90ZWN0ZWQgcHJvZ3Jlc3NET006IEhUTUxFbGVtZW50O1xuXG4gIHB1YmxpYyBwYXR0ZXJuUGFzc3dvcmQ6IHN0cmluZyA9IFBhdHRlcm4uUEFTU1dPUkRfTUVESVVNO1xuICBwdWJsaWMgZXJyb3JNc2dOZXdQYXNzd29yZDogc3RyaW5nO1xuICBwdWJsaWMgZXJyb3JNc2dDb25maXJtUGFzc3dvcmQ6IHN0cmluZztcblxuICBwcml2YXRlIHZlcmlmaWNhdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgdmVyaWZpY2F0aW9uQ29kZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBuZXdQYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgY29uZmlybVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHRvYXN0cjogRG9Ub2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICBASW5qZWN0KEhUVFBfU0VSVklDRSlwcml2YXRlIGh0dHBCYXNlU2VydmljZTogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgIEBJbmplY3QoT0FVVEhfSU5GTylwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICBASW5qZWN0KEFQSSlwcml2YXRlIGFwaVBhdGg6IEFQSU1vZGVsKSB7XG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddICE9PSBudWxsICYmIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydjb2RlJ10gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmVyaWZpY2F0aW9uSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snaWQnXTtcbiAgICAgIHRoaXMudmVyaWZpY2F0aW9uQ29kZSA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydjb2RlJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvbG9naW4nXSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgaWYgKCF0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgdGhpcy5pbml0UHJvZ3Jlc3MoKTtcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyIDwgMzUpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzQmFyID0gMzUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBudWxsO1xuXG4gICAgICBjb25zdCBuZXdQYXNzd29yZDogc3RyaW5nID0gdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnZhbHVlKTtcbiAgICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZDogc3RyaW5nID0gdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSk7XG4gICAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICAgIHZlcmlmaWNhdGlvbklkOiB0aGlzLnZlcmlmaWNhdGlvbklkLFxuICAgICAgICB2ZXJpZmljYXRpb25Db2RlOiB0aGlzLnZlcmlmaWNhdGlvbkNvZGUsXG4gICAgICAgIG5ld1Bhc3N3b3JkLFxuICAgICAgICBjb25maXJtUGFzc3dvcmQsXG4gICAgICB9O1xuICAgICAgY29uc3QgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJ0Jhc2ljICcgKyBidG9hKHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyB0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9zZWNyZXQnXSksXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5idXR0b25Gb3Jnb3RQYXNzd29yZCA9IHRydWU7XG4gICAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0JBU0UodGhpcy5hcGlQYXRoWydhdXRoJ11bJ2ZvcmdvdC1wYXNzd29yZCddLCBkYXRhLCBodHRwSGVhZGVycylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihyZXNwb25zZS5yZXNwU3RhdHVzTWVzc2FnZVtyZXNwb25zZS5yZXNwU3RhdHVzQ29kZV0pO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzQmFyID0gOTUpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19GT1JHT1RfUEFTU1dPUkQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkZvcmdvdFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5idXR0b25Gb3Jnb3RQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1dHRvbkZvcmdvdFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG4gICAgICAgICAgdGhpcy5kb25lUHJvZ3Jlc3MoKTtcblxuICAgICAgICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3JbJ3Jlc3BTdGF0dXNDb2RlJ10pIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gZXJyb3JbJ3Jlc3BTdGF0dXNNZXNzYWdlJ11bZXJyb3JbJ3Jlc3BTdGF0dXNDb2RlJ11dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc0Vycm9yTmV3UGFzc3dvcmQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS5lcnJvcnMgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10udG91Y2hlZCkge1xuICAgICAgdGhpcy5lcnJvck1zZ05ld1Bhc3N3b3JkID0gJ2Vycm9yLnBhdHRlcm4uUGFzc3dvcmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTXNnTmV3UGFzc3dvcmQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NOZXdQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyduZXdQYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ25ld1Bhc3N3b3JkJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNFcnJvckNvbmZpcm1QYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLmVycm9ycyAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWQpIHtcbiAgICAgIHRoaXMuZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgPSAnZXJyb3IuZXF1YWwuY29uZmlybVBhc3N3b3JkJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS52YWx1ZSAhPT0gdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSkge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gJ2Vycm9yLmVxdWFsLmNvbmZpcm1QYXNzd29yZCc7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uc2V0VmFsaWRhdG9ycyhbY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yKHRoaXMuZm9ybSldKTtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzQ29uZmlybVBhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQcm9ncmVzcygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1kb25lJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtaW5hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGRvbmVQcm9ncmVzcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1ydW5uaW5nJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICdwYWNlLWRvbmUnKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAncGFjZS1pbmFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgcHJvZ3Jlc3MgKyAnJSwgMHB4LCAwcHgpJztcbiAgICB0aGlzLnByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gcHJvZ3Jlc3MgKyAnJSc7XG4gICAgdGhpcy5wcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSBwcm9ncmVzcy50b1N0cmluZygpO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1QYXNzd29yZFZhbGlkYXRvcihmb3JtOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgIGlmIChmb3JtLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoZm9ybS5jb250cm9sc1snbmV3UGFzc3dvcmQnXS52YWx1ZSAhPT0gZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udmFsdWUpe1xuICAgICAgICByZXR1cm4geyBlcXVhbDogdHJ1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cbiIsIjxoMSBpZD1cInRpdGxlXCIgY2xhc3M9XCJ0aXRsZVwiPnt7ICdSZXNldCBQYXNzd29yZCcgfCB0cmFuc2xhdGUgfX08L2gxPlxuPHAgY2xhc3M9XCJzdWItdGl0bGVcIj57eyAnc3VidGl0bGUucmVzZXQtcGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19PC9wPlxuXG48bmItYWxlcnQgKm5nSWY9XCJyZXNwb25zZUVycm9yXCIgb3V0bGluZT1cImRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuICA8cCBjbGFzcz1cImFsZXJ0LXRpdGxlXCI+PGI+e3sgJ2FsZXJ0LnRpdGxlLnJlc2V0LXBhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fTwvYj48L3A+XG4gIDx1bCBjbGFzcz1cImFsZXJ0LW1lc3NhZ2UtbGlzdFwiPlxuICAgIDxsaSBjbGFzcz1cImFsZXJ0LW1lc3NhZ2VcIj57eyByZXNwb25zZUVycm9yIH19PC9saT5cbiAgPC91bD5cbjwvbmItYWxlcnQ+XG5cbjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJmb3Jnb3RQYXNzd29yZCgpXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVcIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiaW5wdXQtbmV3cGFzc3dvcmRcIj57eyAnTmV3IFBhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fSogOjwvbGFiZWw+XG4gICAgPGlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiJ25ld1Bhc3N3b3JkJ1wiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICAgIG1pbmxlbmd0aD1cIjhcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjUwXCJcbiAgICAgICAgICBbcGF0dGVybl09XCJwYXR0ZXJuUGFzc3dvcmRcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JOZXdQYXNzd29yZCxcbiAgICAgICAgICAgICdzdGF0dXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3NOZXdQYXNzd29yZFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBpZD1cImlucHV0TmV3UGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ05ldyBQYXNzd29yZCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgIGZpZWxkU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjRcIlxuICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICBmdWxsV2lkdGg+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0Vycm9yTmV3UGFzc3dvcmRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3sgZXJyb3JNc2dOZXdQYXNzd29yZCB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sLWdyb3VwXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJpbnB1dC1jb25maXJtcGFzc3dvcmRcIj57eyAnQ29uZmlybSBQYXNzd29yZCcgfCB0cmFuc2xhdGUgfX0qIDo8L2xhYmVsPlxuICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cIidjb25maXJtUGFzc3dvcmQnXCJcbiAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiOFwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiNTBcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JDb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgICAnc3RhdHVzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzQ29uZmlybVBhc3N3b3JkXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBpZD1cImlucHV0Q29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdDb25maXJtIFBhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgZmllbGRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgIHRhYmluZGV4PVwiNVwiXG4gICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgIGZ1bGxXaWR0aD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRXJyb3JDb25maXJtUGFzc3dvcmRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3sgZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZm9ybS5pbnZhbGlkIHx8IGJ1dHRvbkZvcmdvdFBhc3N3b3JkXCJcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgW2NsYXNzLmJ0bi1wdWxzZV09XCJmb3JtLmludmFsaWQgfHwgYnV0dG9uRm9yZ290UGFzc3dvcmRcIj5cbiAgICB7eyAnUmVzZXQgUGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19XG4gIDwvYnV0dG9uPlxuPC9mb3JtPlxuXG48c2VjdGlvbiBjbGFzcz1cImFub3RoZXItYWN0aW9uXCIgYXJpYS1sYWJlbD1cIlNpZ24gaW5cIj5cbiAge3sgJ21lc3NhZ2UucmVzZXQtcGFzc3dvcmQtZm9vdGVyJyB8IHRyYW5zbGF0ZX19IDxhIGNsYXNzPVwidGV4dC1saW5rXCIgcm91dGVyTGluaz1cIi9hdXRoL2xvZ2luXCIgdGFiaW5kZXg9XCItMVwiPnt7ICdMb2dpbicgfCB0cmFuc2xhdGV9fTwvYT5cbjwvc2VjdGlvbj5cbiJdfQ==