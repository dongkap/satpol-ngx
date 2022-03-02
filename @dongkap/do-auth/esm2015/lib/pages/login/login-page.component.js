import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { API, HTTP_SERVICE, OAUTH_INFO, ResponseCode, } from '@dongkap/do-core';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@nebular/theme";
import * as i3 from "@ngx-translate/core";
import * as i4 from "../../services/auth-token.service";
import * as i5 from "../../services/auth-force.service";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
export class LoginPageComponent {
    constructor(router, dialogService, translate, authTokenService, authForceService, apiPath, httpBaseService, oauthResource, route) {
        this.router = router;
        this.dialogService = dialogService;
        this.translate = translate;
        this.authTokenService = authTokenService;
        this.authForceService = authForceService;
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.buttonLogin = false;
        this.progress = 25;
        this.destroy$ = new Subject();
        this.formGroup = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
        });
        this.urlAuthorizeGoogle = this.httpBaseService.API(this.apiPath['auth']['authorize']) +
            '/google?redirect_uri=' +
            `${document.getElementsByTagName('base')[0].href}auth/callback`;
        this.socialLinks = [
            {
                url: this.urlAuthorizeGoogle,
                target: '_self',
                icon: 'google',
            }
        ];
        if (route.snapshot.queryParams['error']) {
            this.responseError = 'error.' + route.snapshot.queryParams['error'];
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    login() {
        if (!this.formGroup.invalid) {
            this.initProgress();
            if (this.progress < 35) {
                this.setProgress(this.progress = 35);
            }
            this.buttonLogin = true;
            this.authTokenService.login(this.formGroup.get('username').value, this.formGroup.get('password').value)
                .then(() => {
                this.setProgress(this.progress = 95);
                this.progress = 0;
                this.responseError = null;
                this.router.navigate(['/app/home']);
            })
                .catch((error) => {
                try {
                    if (error instanceof HttpErrorResponse) {
                        error = error['error'];
                    }
                    const response = error;
                    this.responseErrorCode = response === null || response === void 0 ? void 0 : response.respStatusCode;
                    this.responseError = response === null || response === void 0 ? void 0 : response.respStatusMessage[response === null || response === void 0 ? void 0 : response.respStatusCode];
                }
                catch (error) {
                    this.responseError = 'error.500';
                }
                this.buttonLogin = false;
                this.progress = 0;
                this.doneProgress();
                if (this.responseErrorCode === ResponseCode.ERR_SCR0000.toString()) {
                    this.authForceService.setData(this.formGroup.get('username').value, this.formGroup.get('password').value);
                    this.router.navigate(['/auth/force']);
                }
            });
            if (this.progress >= 35 && this.progress < 65) {
                this.setProgress(this.progress = 65);
            }
        }
    }
    get hasErrorUsername() {
        return (this.formGroup.controls['username'] &&
            this.formGroup.controls['username'].invalid &&
            this.formGroup.controls['username'].touched);
    }
    get hasSuccessUsername() {
        return (this.formGroup.controls['username'] &&
            this.formGroup.controls['username'].valid &&
            this.formGroup.controls['username'].touched);
    }
    get hasErrorPassword() {
        return (this.formGroup.controls['password'] &&
            this.formGroup.controls['password'].invalid &&
            this.formGroup.controls['password'].touched);
    }
    get hasSuccessPassword() {
        return (this.formGroup.controls['password'] &&
            this.formGroup.controls['password'].valid &&
            this.formGroup.controls['password'].touched);
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
                    action: 'Close',
                },
            });
        });
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
LoginPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginPageComponent, deps: [{ token: i1.Router }, { token: i2.NbDialogService }, { token: i3.TranslateService }, { token: i4.AuthTokenService }, { token: i5.AuthForceService }, { token: API }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
LoginPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LoginPageComponent, selector: "do-login-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError | translate }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'message.username-login' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'message.username-login-placeholder' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username-login' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\">{{ 'Password' | translate }} :</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"/auth/forgot-password\" tabindex=\"-1\">{{ 'Forgot Password' | translate}}?</a>\n    </span>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"formGroup.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"formGroup.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n<!--\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  {{ 'message.login-footer-social' | translate}}:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  {{ 'message.login-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/register\">{{ 'Register' | translate}}</a>\n</section>\n-->\n<section class=\"another-action\" aria-label=\"Terms and Conditions\">\n  <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\">{{ 'message.terms-conditions' | translate}}</span>\n</section>\n", styles: [".terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}\n"], components: [{ type: i2.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-login-page',
                    styleUrls: ['login-page.component.scss'],
                    templateUrl: 'login-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.NbDialogService }, { type: i3.TranslateService }, { type: i4.AuthTokenService }, { type: i5.AuthForceService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: i1.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvcGFnZXMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvcGFnZXMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyxPQUFPLEVBQ0wsR0FBRyxFQUNILFlBQVksRUFDWixVQUFVLEVBQ1YsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFPMUIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7Ozs7OztBQU8xRixNQUFNLE9BQU8sa0JBQWtCO0lBMEI3QixZQUNVLE1BQWMsRUFDZCxhQUE4QixFQUM5QixTQUEyQixFQUMzQixnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ3JCLE9BQWlCLEVBQ1IsZUFBbUMsRUFDdEMsYUFBb0MsRUFDL0QsS0FBcUI7UUFSYixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQzlCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhC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Q3pCLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUN4QyxXQUFXLEVBQUUsMkJBQTJCO2lCQUMzQzs7MEJBaUNJLE1BQU07MkJBQUMsR0FBRzs7MEJBQ1YsTUFBTTsyQkFBQyxZQUFZOzswQkFDbkIsTUFBTTsyQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTmJBdXRoU29jaWFsTGluayB9IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHtcbiAgQVBJLFxuICBIVFRQX1NFUlZJQ0UsXG4gIE9BVVRIX0lORk8sXG4gIFJlc3BvbnNlQ29kZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFQSU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBIdHRwRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoRm9yY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC1mb3JjZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4uL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RvLWxvZ2luLXBhZ2UnLFxuICAgIHN0eWxlVXJsczogWydsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdsb2dpbi1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwdWJsaWMgcmVzcG9uc2VFcnJvcjogYW55O1xuICBwdWJsaWMgcmVzcG9uc2VFcnJvckNvZGU6IGFueTtcbiAgcHVibGljIGJ1dHRvbkxvZ2luOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3M6IG51bWJlciA9IDI1O1xuICBwcm90ZWN0ZWQgcHJvZ3Jlc3NET006IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBwdWJsaWMgZm9ybUdyb3VwOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICB1c2VybmFtZTogbmV3IEZvcm1Db250cm9sKCksXG4gICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgpLFxuICB9KTtcblxuICBwcml2YXRlIHVybEF1dGhvcml6ZUdvb2dsZTogc3RyaW5nID0gdGhpcy5odHRwQmFzZVNlcnZpY2UuQVBJKHRoaXMuYXBpUGF0aFsnYXV0aCddWydhdXRob3JpemUnXSkgK1xuICAgICcvZ29vZ2xlP3JlZGlyZWN0X3VyaT0nICtcbiAgICBgJHtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWZ9YXV0aC9jYWxsYmFja2A7XG5cbiAgcHVibGljIHNvY2lhbExpbmtzOiBOYkF1dGhTb2NpYWxMaW5rW10gPSBbXG4gICAge1xuICAgICAgdXJsOiB0aGlzLnVybEF1dGhvcml6ZUdvb2dsZSxcbiAgICAgIHRhcmdldDogJ19zZWxmJyxcbiAgICAgIGljb246ICdnb29nbGUnLFxuICAgIH1cbiAgXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFRva2VuU2VydmljZTogQXV0aFRva2VuU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhGb3JjZVNlcnZpY2U6IEF1dGhGb3JjZVNlcnZpY2UsXG4gICAgQEluamVjdChBUEkpIHByaXZhdGUgYXBpUGF0aDogQVBJTW9kZWwsXG4gICAgQEluamVjdChIVFRQX1NFUlZJQ0UpIHByaXZhdGUgaHR0cEJhc2VTZXJ2aWNlOiBIdHRwRmFjdG9yeVNlcnZpY2UsXG4gICAgQEluamVjdChPQVVUSF9JTkZPKXByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsLFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIGlmIChyb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snZXJyb3InXSkge1xuICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gJ2Vycm9yLicgKyByb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snZXJyb3InXTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbigpIHtcbiAgICBpZiAoIXRoaXMuZm9ybUdyb3VwLmludmFsaWQpIHtcbiAgICAgIHRoaXMuaW5pdFByb2dyZXNzKCk7XG4gICAgICBpZiAodGhpcy5wcm9ncmVzcyA8IDM1KSB7XG4gICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcyA9IDM1KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnV0dG9uTG9naW4gPSB0cnVlO1xuICAgICAgdGhpcy5hdXRoVG9rZW5TZXJ2aWNlLmxvZ2luKFxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3VzZXJuYW1lJykudmFsdWUsXG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFzc3dvcmQnKS52YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcyA9IDk1KTtcbiAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBudWxsO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9ob21lJ10pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZXJyb3IgPSBlcnJvclsnZXJyb3InXSBhcyBBcGlCYXNlUmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlID0gKGVycm9yIGFzIEFwaUJhc2VSZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3JDb2RlID0gcmVzcG9uc2U/LnJlc3BTdGF0dXNDb2RlO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gcmVzcG9uc2U/LnJlc3BTdGF0dXNNZXNzYWdlW3Jlc3BvbnNlPy5yZXNwU3RhdHVzQ29kZV07XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9ICdlcnJvci41MDAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmJ1dHRvbkxvZ2luID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgdGhpcy5kb25lUHJvZ3Jlc3MoKTtcbiAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZUVycm9yQ29kZSA9PT0gUmVzcG9uc2VDb2RlLkVSUl9TQ1IwMDAwLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aEZvcmNlU2VydmljZS5zZXREYXRhKFxuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3VzZXJuYW1lJykudmFsdWUsXG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFzc3dvcmQnKS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2ZvcmNlJ10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAzNSAmJiB0aGlzLnByb2dyZXNzIDwgNjUpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzID0gNjUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBoYXNFcnJvclVzZXJuYW1lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3VzZXJuYW1lJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc1VzZXJuYW1lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3VzZXJuYW1lJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWyd1c2VybmFtZSddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc0Vycm9yUGFzc3dvcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGFzc3dvcmQnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzUGFzc3dvcmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGFzc3dvcmQnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bhc3N3b3JkJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb25DbGlja1Rlcm1zQ29uZGl0aW9ucygpIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7XG4gICAgICBwYXJhbWV0ZXJDb2RlOiAnVEVSTVNfQ09ORElUSU9OUy5ET05HS0FQJ1xuICAgIH07XG4gICAgY29uc3QgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgIEF1dGhvcml6YXRpb246ICdCYXNpYyAnICsgYnRvYSh0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiB0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyxcbiAgICB9KTtcbiAgICB0aGlzLmh0dHBCYXNlU2VydmljZS5IVFRQX0JBU0UodGhpcy5hcGlQYXRoWydvcGVuYXBpJ11bJ3BhcmFtZXRlciddLCBkYXRhLCBodHRwSGVhZGVycylcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oVGVybXNDb25kaXRpb25zQ29tcG9uZW50LCB7XG4gICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZVsncGFyYW1ldGVyVmFsdWUnXSxcbiAgICAgICAgICBhY3Rpb246ICdDbG9zZScsXG4gICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQcm9ncmVzcygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1kb25lJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtaW5hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGRvbmVQcm9ncmVzcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1ydW5uaW5nJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICdwYWNlLWRvbmUnKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAncGFjZS1pbmFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgcHJvZ3Jlc3MgKyAnJSwgMHB4LCAwcHgpJztcbiAgICB0aGlzLnByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gcHJvZ3Jlc3MgKyAnJSc7XG4gICAgdGhpcy5wcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSBwcm9ncmVzcy50b1N0cmluZygpO1xuICB9XG5cbn1cbiIsIjxoMSBpZD1cInRpdGxlXCIgY2xhc3M9XCJ0aXRsZVwiPnt7ICdMb2dpbicgfCB0cmFuc2xhdGUgfX08L2gxPlxuPHAgY2xhc3M9XCJzdWItdGl0bGVcIj57eyAnc3VidGl0bGUubG9naW4nIHwgdHJhbnNsYXRlIH19PC9wPlxuPG5iLWFsZXJ0ICpuZ0lmPVwicmVzcG9uc2VFcnJvclwiIG91dGxpbmU9XCJkYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgPHAgY2xhc3M9XCJhbGVydC10aXRsZVwiPjxiPnt7ICdhbGVydC50aXRsZS5sb2dpbicgfCB0cmFuc2xhdGUgfX08L2I+PC9wPlxuICA8dWwgY2xhc3M9XCJhbGVydC1tZXNzYWdlLWxpc3RcIj5cbiAgICA8bGkgY2xhc3M9XCJhbGVydC1tZXNzYWdlXCI+e3sgcmVzcG9uc2VFcnJvciB8IHRyYW5zbGF0ZSB9fTwvbGk+XG4gIDwvdWw+XG48L25iLWFsZXJ0PlxuXG48Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJsb2dpbigpXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVcIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgJ21lc3NhZ2UudXNlcm5hbWUtbG9naW4nIHwgdHJhbnNsYXRlIH19IDo8L2xhYmVsPlxuICAgIDxpbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cIid1c2VybmFtZSdcIlxuICAgICAgICAgIFtyZXF1aXJlZF09XCJ0cnVlXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAnc3RhdHVzLWRhbmdlcic6IGhhc0Vycm9yVXNlcm5hbWUsXG4gICAgICAgICAgICAnc3RhdHVzLXN1Y2Nlc3MnOiBoYXNTdWNjZXNzVXNlcm5hbWVcbiAgICAgICAgICB9XCJcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgIGlkPVwiaW5wdXRVc2VybmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyAnbWVzc2FnZS51c2VybmFtZS1sb2dpbi1wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgIGZpZWxkU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjFcIlxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICBmdWxsV2lkdGg+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0Vycm9yVXNlcm5hbWVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3snZXJyb3IudXNlcm5hbWUtbG9naW4nIHwgdHJhbnNsYXRlfX08L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICA8c3BhbiBjbGFzcz1cImxhYmVsLXdpdGgtbGlua1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyAnUGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19IDo8L2xhYmVsPlxuICAgICAgPGEgY2xhc3M9XCJmb3Jnb3QtcGFzc3dvcmQgY2FwdGlvbi0yXCIgcm91dGVyTGluaz1cIi9hdXRoL2ZvcmdvdC1wYXNzd29yZFwiIHRhYmluZGV4PVwiLTFcIj57eyAnRm9yZ290IFBhc3N3b3JkJyB8IHRyYW5zbGF0ZX19PzwvYT5cbiAgICA8L3NwYW4+XG4gICAgPGlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiJ3Bhc3N3b3JkJ1wiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JQYXNzd29yZCxcbiAgICAgICAgICAgICdzdGF0dXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3NQYXNzd29yZFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBpZD1cImlucHV0UGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ1Bhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgZmllbGRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgIHRhYmluZGV4PVwiMlwiXG4gICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgIGZ1bGxXaWR0aD5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzRXJyb3JQYXNzd29yZFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcIj57eyAnZXJyb3IucGFzc3dvcmQnIHwgdHJhbnNsYXRlfX08L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxidXR0b24gW2Rpc2FibGVkXT1cImZvcm1Hcm91cC5pbnZhbGlkIHx8IGJ1dHRvbkxvZ2luXCJcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgW2NsYXNzLmJ0bi1wdWxzZV09XCJmb3JtR3JvdXAuaW52YWxpZCB8fCBidXR0b25Mb2dpblwiPlxuICAgIHt7ICdMb2dpbicgfCB0cmFuc2xhdGUgfX1cbiAgPC9idXR0b24+XG48L2Zvcm0+XG48IS0tXG48c2VjdGlvbiAqbmdJZj1cInNvY2lhbExpbmtzICYmIHNvY2lhbExpbmtzLmxlbmd0aCA+IDBcIiBjbGFzcz1cImxpbmtzXCIgYXJpYS1sYWJlbD1cIlNvY2lhbCBzaWduIGluXCI+XG4gIHt7ICdtZXNzYWdlLmxvZ2luLWZvb3Rlci1zb2NpYWwnIHwgdHJhbnNsYXRlfX06XG4gIDxkaXYgY2xhc3M9XCJzb2NpYWxzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc29jaWFsTGluayBvZiBzb2NpYWxMaW5rc1wiPlxuICAgICAgPGEgKm5nSWY9XCJzb2NpYWxMaW5rLmxpbmtcIlxuICAgICAgICAgW3JvdXRlckxpbmtdPVwic29jaWFsTGluay5saW5rXCJcbiAgICAgICAgIFthdHRyLnRhcmdldF09XCJzb2NpYWxMaW5rLnRhcmdldFwiXG4gICAgICAgICBbYXR0ci5jbGFzc109XCJzb2NpYWxMaW5rLmljb25cIlxuICAgICAgICAgW2NsYXNzLndpdGgtaWNvbl09XCJzb2NpYWxMaW5rLmljb25cIj5cbiAgICAgICAgPG5iLWljb24gKm5nSWY9XCJzb2NpYWxMaW5rLmljb247IGVsc2UgdGl0bGVcIiBbaWNvbl09XCJzb2NpYWxMaW5rLmljb25cIj48L25iLWljb24+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGU+e3sgc29jaWFsTGluay50aXRsZSB9fTwvbmctdGVtcGxhdGU+XG4gICAgICA8L2E+XG4gICAgICA8YSAqbmdJZj1cInNvY2lhbExpbmsudXJsXCJcbiAgICAgICAgIFthdHRyLmhyZWZdPVwic29jaWFsTGluay51cmxcIlxuICAgICAgICAgW2F0dHIudGFyZ2V0XT1cInNvY2lhbExpbmsudGFyZ2V0XCJcbiAgICAgICAgIFthdHRyLmNsYXNzXT1cInNvY2lhbExpbmsuaWNvblwiXG4gICAgICAgICBbY2xhc3Mud2l0aC1pY29uXT1cInNvY2lhbExpbmsuaWNvblwiPlxuICAgICAgICA8bmItaWNvbiAqbmdJZj1cInNvY2lhbExpbmsuaWNvbjsgZWxzZSB0aXRsZVwiIFtpY29uXT1cInNvY2lhbExpbmsuaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICN0aXRsZT57eyBzb2NpYWxMaW5rLnRpdGxlIH19PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvYT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxzZWN0aW9uIGNsYXNzPVwiYW5vdGhlci1hY3Rpb25cIiBhcmlhLWxhYmVsPVwiUmVnaXN0ZXJcIj5cbiAge3sgJ21lc3NhZ2UubG9naW4tZm9vdGVyJyB8IHRyYW5zbGF0ZX19IDxhIGNsYXNzPVwidGV4dC1saW5rXCIgcm91dGVyTGluaz1cIi9hdXRoL3JlZ2lzdGVyXCI+e3sgJ1JlZ2lzdGVyJyB8IHRyYW5zbGF0ZX19PC9hPlxuPC9zZWN0aW9uPlxuLS0+XG48c2VjdGlvbiBjbGFzcz1cImFub3RoZXItYWN0aW9uXCIgYXJpYS1sYWJlbD1cIlRlcm1zIGFuZCBDb25kaXRpb25zXCI+XG4gIDxzcGFuIGNsYXNzPVwidGVybXMtY29uZGl0aW9uc1wiIChjbGljayk9XCJvbkNsaWNrVGVybXNDb25kaXRpb25zKClcIiB0YWJpbmRleD1cIi0xXCI+e3sgJ21lc3NhZ2UudGVybXMtY29uZGl0aW9ucycgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbjwvc2VjdGlvbj5cbiJdfQ==