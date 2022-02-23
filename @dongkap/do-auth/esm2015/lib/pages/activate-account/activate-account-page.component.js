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
export class ActivateAccountPageComponent {
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
            password: new FormControl(),
            confirmPassword: new FormControl(),
        });
        this.destroy$ = new Subject();
        if (this.route.snapshot.params['id'] !== null && this.route.snapshot.params['code'] !== null) {
            this.activateId = this.route.snapshot.params['id'];
            this.activateCode = this.route.snapshot.params['code'];
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
    activateAccount() {
        if (!this.form.invalid) {
            this.initProgress();
            if (this.progressBar < 35) {
                this.setProgress(this.progressBar = 35);
            }
            this.responseError = null;
            const password = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['password'].value);
            const confirmPassword = this.enc.encryptAES(this.oauthResource['aes_key'], this.form.controls['confirmPassword'].value);
            const data = {
                activateId: this.activateId,
                activateCode: this.activateCode,
                password,
                confirmPassword,
            };
            const httpHeaders = new HttpHeaders({
                Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonForgotPassword = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['activate-account'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.setProgress(this.progressBar = 95);
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_ACTIVATE_ACCOUNT) {
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
    get hasErrorPassword() {
        if (this.form.controls['password'].errors &&
            this.form.controls['password'].invalid &&
            this.form.controls['password'].touched) {
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
            this.errorMsgConfirmPassword = 'error.equal.confirmPassword';
        }
        else {
            if (this.form.controls['password'].value !== this.form.controls['confirmPassword'].value) {
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
ActivateAccountPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ActivateAccountPageComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2.DoToastrService }, { token: i3.TranslateService }, { token: i4.EncryptionService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
ActivateAccountPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ActivateAccountPageComponent, selector: "do-activate-account-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'header.set-password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.set-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.set-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"activateAccount()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Set Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.set-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n", styles: [""], components: [{ type: i5.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i5.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ActivateAccountPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-activate-account-page',
                    styleUrls: ['activate-account-page.component.scss'],
                    templateUrl: 'activate-account-page.component.html',
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
            if (form.controls['password'].value !== form.controls['confirmPassword'].value) {
                return { equal: true };
            }
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGUtYWNjb3VudC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9wYWdlcy9hY3RpdmF0ZS1hY2NvdW50L2FjdGl2YXRlLWFjY291bnQtcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvcGFnZXMvYWN0aXZhdGUtYWNjb3VudC9hY3RpdmF0ZS1hY2NvdW50LXBhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxHQUFHLEVBRUgsWUFBWSxFQUNaLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7OztBQVkxQixNQUFNLE9BQU8sNEJBQTRCO0lBcUJ2QyxZQUNVLE1BQWMsRUFDZCxLQUFxQixFQUNyQixNQUF1QixFQUN2QixTQUEyQixFQUMzQixHQUFzQixFQUNELGVBQW1DLEVBQ3JDLGFBQW9DLEVBQzNDLE9BQWlCO1FBUDdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixRQUFHLEdBQUgs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QUFLLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssRUFBQztnQkFDN0UsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN4QjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtcbiAgQVBJLFxuICBFbmNyeXB0aW9uU2VydmljZSxcbiAgSFRUUF9TRVJWSUNFLFxuICBPQVVUSF9JTkZPLFxuICBQYXR0ZXJuLFxuICBSZXNwb25zZUNvZGUsXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBUElNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgSHR0cEZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBTZWN1cml0eVJlc291cmNlTW9kZWwgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IERvVG9hc3RyU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLXNoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZG8tYWN0aXZhdGUtYWNjb3VudC1wYWdlJyxcbiAgICBzdHlsZVVybHM6IFsnYWN0aXZhdGUtYWNjb3VudC1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdhY3RpdmF0ZS1hY2NvdW50LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmF0ZUFjY291bnRQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwdWJsaWMgcmVzcG9uc2VFcnJvcjogYW55O1xuICBwdWJsaWMgYnV0dG9uRm9yZ290UGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwcm9ncmVzc0JhcjogbnVtYmVyID0gMjU7XG4gIHByb3RlY3RlZCBwcm9ncmVzc0RPTTogSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIHBhdHRlcm5QYXNzd29yZDogc3RyaW5nID0gUGF0dGVybi5QQVNTV09SRF9NRURJVU07XG4gIHB1YmxpYyBlcnJvck1zZ1Bhc3N3b3JkOiBzdHJpbmc7XG4gIHB1YmxpYyBlcnJvck1zZ0NvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgYWN0aXZhdGVJZDogc3RyaW5nO1xuICBwcml2YXRlIGFjdGl2YXRlQ29kZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCksXG4gICAgY29uZmlybVBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHRvYXN0cjogRG9Ub2FzdHJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICBASW5qZWN0KEhUVFBfU0VSVklDRSlwcml2YXRlIGh0dHBCYXNlU2VydmljZTogSHR0cEZhY3RvcnlTZXJ2aWNlLFxuICAgIEBJbmplY3QoT0FVVEhfSU5GTylwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICBASW5qZWN0KEFQSSlwcml2YXRlIGFwaVBhdGg6IEFQSU1vZGVsKSB7XG4gICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddICE9PSBudWxsICYmIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydjb2RlJ10gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVJZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydpZCddO1xuICAgICAgdGhpcy5hY3RpdmF0ZUNvZGUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snY29kZSddO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2xvZ2luJ10pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGFjdGl2YXRlQWNjb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICB0aGlzLmluaXRQcm9ncmVzcygpO1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIgPCAzNSkge1xuICAgICAgICB0aGlzLnNldFByb2dyZXNzKHRoaXMucHJvZ3Jlc3NCYXIgPSAzNSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IG51bGw7XG5cbiAgICAgIGNvbnN0IHBhc3N3b3JkOiBzdHJpbmcgPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsdWUpO1xuICAgICAgY29uc3QgY29uZmlybVBhc3N3b3JkOiBzdHJpbmcgPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbHVlKTtcbiAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgYWN0aXZhdGVJZDogdGhpcy5hY3RpdmF0ZUlkLFxuICAgICAgICBhY3RpdmF0ZUNvZGU6IHRoaXMuYWN0aXZhdGVDb2RlLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCYXNpYyAnICsgYnRvYSh0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYnV0dG9uRm9yZ290UGFzc3dvcmQgPSB0cnVlO1xuICAgICAgdGhpcy5odHRwQmFzZVNlcnZpY2UuSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWydhY3RpdmF0ZS1hY2NvdW50J10sIGRhdGEsIGh0dHBIZWFkZXJzKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlOiBBcGlCYXNlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RyLnNob3dJMThuKHJlc3BvbnNlLnJlc3BTdGF0dXNNZXNzYWdlW3Jlc3BvbnNlLnJlc3BTdGF0dXNDb2RlXSk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzKHRoaXMucHJvZ3Jlc3NCYXIgPSA5NSk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMDtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwU3RhdHVzQ29kZSA9PT0gUmVzcG9uc2VDb2RlLk9LX0FDVElWQVRFX0FDQ09VTlQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkZvcmdvdFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5idXR0b25Gb3Jnb3RQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmJ1dHRvbkZvcmdvdFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG4gICAgICAgICAgdGhpcy5kb25lUHJvZ3Jlc3MoKTtcblxuICAgICAgICAgIGlmICghKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3JbJ3Jlc3BTdGF0dXNDb2RlJ10pIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gZXJyb3JbJ3Jlc3BTdGF0dXNNZXNzYWdlJ11bZXJyb3JbJ3Jlc3BTdGF0dXNDb2RlJ11dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc0Vycm9yUGFzc3dvcmQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS5lcnJvcnMgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udG91Y2hlZCkge1xuICAgICAgdGhpcy5lcnJvck1zZ1Bhc3N3b3JkID0gJ2Vycm9yLnBhdHRlcm4uUGFzc3dvcmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTXNnUGFzc3dvcmQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNFcnJvckNvbmZpcm1QYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLmVycm9ycyAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWQpIHtcbiAgICAgIHRoaXMuZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgPSAnZXJyb3IuZXF1YWwuY29uZmlybVBhc3N3b3JkJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZSAhPT0gdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS52YWx1ZSkge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gJ2Vycm9yLmVxdWFsLmNvbmZpcm1QYXNzd29yZCc7XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uc2V0VmFsaWRhdG9ycyhbY29uZmlybVBhc3N3b3JkVmFsaWRhdG9yKHRoaXMuZm9ybSldKTtcbiAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTXNnQ29uZmlybVBhc3N3b3JkID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydjb25maXJtUGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzQ29uZmlybVBhc3N3b3JkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQcm9ncmVzcygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1kb25lJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtaW5hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGRvbmVQcm9ncmVzcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1ydW5uaW5nJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICdwYWNlLWRvbmUnKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAncGFjZS1pbmFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgcHJvZ3Jlc3MgKyAnJSwgMHB4LCAwcHgpJztcbiAgICB0aGlzLnByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gcHJvZ3Jlc3MgKyAnJSc7XG4gICAgdGhpcy5wcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSBwcm9ncmVzcy50b1N0cmluZygpO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpcm1QYXNzd29yZFZhbGlkYXRvcihmb3JtOiBGb3JtR3JvdXApOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgIGlmIChmb3JtLmNvbnRyb2xzKSB7XG4gICAgICBpZiAoZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZSAhPT0gZm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ10udmFsdWUpe1xuICAgICAgICByZXR1cm4geyBlcXVhbDogdHJ1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cbiIsIjxoMSBpZD1cInRpdGxlXCIgY2xhc3M9XCJ0aXRsZVwiPnt7ICdoZWFkZXIuc2V0LXBhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG48cCBjbGFzcz1cInN1Yi10aXRsZVwiPnt7ICdzdWJ0aXRsZS5zZXQtcGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19PC9wPlxuXG48bmItYWxlcnQgKm5nSWY9XCJyZXNwb25zZUVycm9yXCIgb3V0bGluZT1cImRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuICA8cCBjbGFzcz1cImFsZXJ0LXRpdGxlXCI+PGI+e3sgJ2FsZXJ0LnRpdGxlLnNldC1wYXNzd29yZCcgfCB0cmFuc2xhdGUgfX08L2I+PC9wPlxuICA8dWwgY2xhc3M9XCJhbGVydC1tZXNzYWdlLWxpc3RcIj5cbiAgICA8bGkgY2xhc3M9XCJhbGVydC1tZXNzYWdlXCI+e3sgcmVzcG9uc2VFcnJvciB9fTwvbGk+XG4gIDwvdWw+XG48L25iLWFsZXJ0PlxuXG48Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiAobmdTdWJtaXQpPVwiYWN0aXZhdGVBY2NvdW50KClcIiBhcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZVwiPlxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sLWdyb3VwXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJpbnB1dC1uZXdwYXNzd29yZFwiPnt7ICdQYXNzd29yZCcgfCB0cmFuc2xhdGUgfX0qIDo8L2xhYmVsPlxuICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cIidwYXNzd29yZCdcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBtaW5sZW5ndGg9XCI4XCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCI1MFwiXG4gICAgICAgICAgW3BhdHRlcm5dPVwicGF0dGVyblBhc3N3b3JkXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAnc3RhdHVzLWRhbmdlcic6IGhhc0Vycm9yUGFzc3dvcmQsXG4gICAgICAgICAgICAnc3RhdHVzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzUGFzc3dvcmRcbiAgICAgICAgICB9XCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgaWQ9XCJpbnB1dFBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdQYXNzd29yZCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgIGZpZWxkU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjRcIlxuICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICBmdWxsV2lkdGg+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0Vycm9yUGFzc3dvcmRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3sgZXJyb3JNc2dQYXNzd29yZCB8IHRyYW5zbGF0ZX19PC9zcGFuPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sLWdyb3VwXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJpbnB1dC1jb25maXJtcGFzc3dvcmRcIj57eyAnQ29uZmlybSBQYXNzd29yZCcgfCB0cmFuc2xhdGUgfX0qIDo8L2xhYmVsPlxuICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cIidjb25maXJtUGFzc3dvcmQnXCJcbiAgICAgICAgICBbcmVxdWlyZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgbWlubGVuZ3RoPVwiOFwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiNTBcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JDb25maXJtUGFzc3dvcmQsXG4gICAgICAgICAgICAnc3RhdHVzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzQ29uZmlybVBhc3N3b3JkXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBpZD1cImlucHV0Q29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdDb25maXJtIFBhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgZmllbGRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgIHRhYmluZGV4PVwiNVwiXG4gICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgIGZ1bGxXaWR0aD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRXJyb3JDb25maXJtUGFzc3dvcmRcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3sgZXJyb3JNc2dDb25maXJtUGFzc3dvcmQgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZm9ybS5pbnZhbGlkIHx8IGJ1dHRvbkZvcmdvdFBhc3N3b3JkXCJcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgW2NsYXNzLmJ0bi1wdWxzZV09XCJmb3JtLmludmFsaWQgfHwgYnV0dG9uRm9yZ290UGFzc3dvcmRcIj5cbiAgICB7eyAnU2V0IFBhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fVxuICA8L2J1dHRvbj5cbjwvZm9ybT5cblxuPHNlY3Rpb24gY2xhc3M9XCJhbm90aGVyLWFjdGlvblwiIGFyaWEtbGFiZWw9XCJTaWduIGluXCI+XG4gIHt7ICdtZXNzYWdlLnNldC1wYXNzd29yZC1mb290ZXInIHwgdHJhbnNsYXRlfX0gPGEgY2xhc3M9XCJ0ZXh0LWxpbmtcIiByb3V0ZXJMaW5rPVwiL2F1dGgvbG9naW5cIiB0YWJpbmRleD1cIi0xXCI+e3sgJ0xvZ2luJyB8IHRyYW5zbGF0ZX19PC9hPlxuPC9zZWN0aW9uPlxuIl19