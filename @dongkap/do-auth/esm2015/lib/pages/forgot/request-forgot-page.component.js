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
import * as i4 from "@nebular/theme";
import * as i5 from "@angular/common";
import * as i6 from "@angular/forms";
export class RequestForgotPageComponent {
    constructor(router, toastr, translate, httpBaseService, oauthResource, apiPath) {
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.buttonForgotPassword = false;
        this.progressBar = 25;
        this.patternEmail = Pattern.EMAIL;
        this.form = new FormGroup({
            email: new FormControl(),
        });
        this.destroy$ = new Subject();
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
            // const urlForgotPassword: string = `${document.getElementsByTagName('base')[0].href}auth/forgot-password`;
            const data = {
                email: this.form.controls['email'].value,
            };
            const httpHeaders = new HttpHeaders({
                Authorization: 'Basic ' + btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang,
            });
            this.buttonForgotPassword = true;
            this.httpBaseService.HTTP_BASE(this.apiPath['auth']['request-forgot-password'], data, httpHeaders)
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                if (response) {
                    this.toastr.showI18n(response.respStatusMessage[response.respStatusCode]);
                    this.setProgress(this.progressBar = 95);
                    this.progressBar = 0;
                    if (response.respStatusCode === ResponseCode.OK_REQUEST_FORGOT_PASSWORD) {
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
                else {
                }
            });
        }
    }
    get hasErrorEmail() {
        return (this.form.controls['email'] &&
            this.form.controls['email'].invalid &&
            this.form.controls['email'].touched);
    }
    get hasSuccessEmail() {
        return (this.form.controls['email'] &&
            this.form.controls['email'].valid &&
            this.form.controls['email'].touched);
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
RequestForgotPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RequestForgotPageComponent, deps: [{ token: i1.Router }, { token: i2.DoToastrService }, { token: i3.TranslateService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
RequestForgotPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RequestForgotPageComponent, selector: "do-request-forgot-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Forgot Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.forgot-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.forgot' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'message.email-forgot-password' | translate }} :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{'error.pattern.email' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Send' | translate }}\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"/auth/login\">{{ 'message.forgot-password-link' | translate}}</a></p>\n  <!--\n  <p><a routerLink=\"/auth/register\" class=\"text-link\">{{ 'Register' | translate}}</a></p>\n  -->\n</section>\n", styles: [""], components: [{ type: i4.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i4.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i6.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i6.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i6.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i6.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i6.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i6.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RequestForgotPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-request-forgot-page',
                    styleUrls: ['request-forgot-page.component.scss'],
                    templateUrl: 'request-forgot-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.DoToastrService }, { type: i3.TranslateService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1mb3Jnb3QtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvcGFnZXMvZm9yZ290L3JlcXVlc3QtZm9yZ290LXBhZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tYXV0aC9zcmMvbGliL3BhZ2VzL2ZvcmdvdC9yZXF1ZXN0LWZvcmdvdC1wYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFDTCxHQUFHLEVBQ0gsWUFBWSxFQUNaLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxHQUNiLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7O0FBWTFCLE1BQU0sT0FBTywwQkFBMEI7SUFlckMsWUFDVSxNQUFjLEVBQ2QsTUFBdUIsRUFDdkIsU0FBMkIsRUFDTixlQUFtQyxFQUNyQyxhQUFvQyxFQUMzQyxPQUFpQjtRQUw3QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDTixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFDckMsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQzNDLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFsQmhDLHlCQUFvQixH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Q0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUMvRSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakYsQ0FBQzs7d0hBM0hVLDBCQUEwQix1R0FtQjNCLFlBQVksYUFDWixVQUFVLGFBQ1YsR0FBRzs0R0FyQkYsMEJBQTBCLDhEQzFCdkMsMjREQW1EQTs0RkR6QmEsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO29CQUNqRCxXQUFXLEVBQUUsb0NBQW9DO2lCQUNwRDs7MEJBb0JJLE1BQU07MkJBQUMsWUFBWTs7MEJBQ25CLE1BQU07MkJBQUMsVUFBVTs7MEJBQ2pCLE1BQU07MkJBQUMsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtcbiAgQVBJLFxuICBIVFRQX1NFUlZJQ0UsXG4gIE9BVVRIX0lORk8sXG4gIFBhdHRlcm4sXG4gIFJlc3BvbnNlQ29kZSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBcGlCYXNlUmVzcG9uc2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IEFQSU1vZGVsIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBIdHRwRmFjdG9yeVNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1jb3JlJztcbmltcG9ydCB7IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgRG9Ub2FzdHJTZXJ2aWNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkby1yZXF1ZXN0LWZvcmdvdC1wYWdlJyxcbiAgICBzdHlsZVVybHM6IFsncmVxdWVzdC1mb3Jnb3QtcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAncmVxdWVzdC1mb3Jnb3QtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlcXVlc3RGb3Jnb3RQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwdWJsaWMgcmVzcG9uc2VFcnJvcjogYW55O1xuICBwdWJsaWMgYnV0dG9uRm9yZ290UGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBwcm9ncmVzc0JhcjogbnVtYmVyID0gMjU7XG4gIHByb3RlY3RlZCBwcm9ncmVzc0RPTTogSFRNTEVsZW1lbnQ7XG5cbiAgcHVibGljIHBhdHRlcm5FbWFpbDogc3RyaW5nID0gUGF0dGVybi5FTUFJTDtcblxuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbCgpLFxuICB9KTtcblxuICBwcm90ZWN0ZWQgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdG9hc3RyOiBEb1RvYXN0clNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgQEluamVjdChIVFRQX1NFUlZJQ0UpcHJpdmF0ZSBodHRwQmFzZVNlcnZpY2U6IEh0dHBGYWN0b3J5U2VydmljZSxcbiAgICBASW5qZWN0KE9BVVRIX0lORk8pcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gICAgQEluamVjdChBUEkpcHJpdmF0ZSBhcGlQYXRoOiBBUElNb2RlbCkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3Jnb3RQYXNzd29yZCgpIHtcbiAgICBpZiAoIXRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICB0aGlzLmluaXRQcm9ncmVzcygpO1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIgPCAzNSkge1xuICAgICAgICB0aGlzLnNldFByb2dyZXNzKHRoaXMucHJvZ3Jlc3NCYXIgPSAzNSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IG51bGw7XG5cbiAgICAgIC8vIGNvbnN0IHVybEZvcmdvdFBhc3N3b3JkOiBzdHJpbmcgPSBgJHtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWZ9YXV0aC9mb3Jnb3QtcGFzc3dvcmRgO1xuICAgICAgY29uc3QgZGF0YTogYW55ID0ge1xuICAgICAgICBlbWFpbDogdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnZhbHVlLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCYXNpYyAnICsgYnRvYSh0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9pZCddICsgJzonICsgdGhpcy5vYXV0aFJlc291cmNlWydjbGllbnRfc2VjcmV0J10pLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYnV0dG9uRm9yZ290UGFzc3dvcmQgPSB0cnVlO1xuICAgICAgdGhpcy5odHRwQmFzZVNlcnZpY2UuSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWydyZXF1ZXN0LWZvcmdvdC1wYXNzd29yZCddLCBkYXRhLCBodHRwSGVhZGVycylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZTogQXBpQmFzZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bihyZXNwb25zZS5yZXNwU3RhdHVzTWVzc2FnZVtyZXNwb25zZS5yZXNwU3RhdHVzQ29kZV0pO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzQmFyID0gOTUpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcFN0YXR1c0NvZGUgPT09IFJlc3BvbnNlQ29kZS5PS19SRVFVRVNUX0ZPUkdPVF9QQVNTV09SRCkge1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hdXRoL2xvZ2luJ10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgIHRoaXMuYnV0dG9uRm9yZ290UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkZvcmdvdFBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuYnV0dG9uRm9yZ290UGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMDtcbiAgICAgICAgICB0aGlzLmRvbmVQcm9ncmVzcygpO1xuXG4gICAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHtcbiAgICAgICAgICAgIGlmIChlcnJvclsncmVzcFN0YXR1c0NvZGUnXSkge1xuICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBlcnJvclsncmVzcFN0YXR1c01lc3NhZ2UnXVtlcnJvclsncmVzcFN0YXR1c0NvZGUnXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBoYXNFcnJvckVtYWlsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS5pbnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzU3VjY2Vzc0VtYWlsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ2VtYWlsJ10gJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydlbWFpbCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQcm9ncmVzcygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1kb25lJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtaW5hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGRvbmVQcm9ncmVzcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1ydW5uaW5nJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICdwYWNlLWRvbmUnKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAncGFjZS1pbmFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgcHJvZ3Jlc3MgKyAnJSwgMHB4LCAwcHgpJztcbiAgICB0aGlzLnByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gcHJvZ3Jlc3MgKyAnJSc7XG4gICAgdGhpcy5wcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSBwcm9ncmVzcy50b1N0cmluZygpO1xuICB9XG5cbn1cbiIsIjxoMSBpZD1cInRpdGxlXCIgY2xhc3M9XCJ0aXRsZVwiPnt7ICdGb3Jnb3QgUGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19PC9oMT5cbjxwIGNsYXNzPVwic3ViLXRpdGxlXCI+e3sgJ3N1YnRpdGxlLmZvcmdvdC1wYXNzd29yZCcgfCB0cmFuc2xhdGUgfX08L3A+XG5cbjxuYi1hbGVydCAqbmdJZj1cInJlc3BvbnNlRXJyb3JcIiBvdXRsaW5lPVwiZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG4gIDxwIGNsYXNzPVwiYWxlcnQtdGl0bGVcIj48Yj57eyAnYWxlcnQudGl0bGUuZm9yZ290JyB8IHRyYW5zbGF0ZSB9fTwvYj48L3A+XG4gIDx1bCBjbGFzcz1cImFsZXJ0LW1lc3NhZ2UtbGlzdFwiPlxuICAgIDxsaSBjbGFzcz1cImFsZXJ0LW1lc3NhZ2VcIj57eyByZXNwb25zZUVycm9yIH19PC9saT5cbiAgPC91bD5cbjwvbmItYWxlcnQ+XG5cbjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChuZ1N1Ym1pdCk9XCJmb3Jnb3RQYXNzd29yZCgpXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVcIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiaW5wdXQtbmFtZVwiPnt7ICdtZXNzYWdlLmVtYWlsLWZvcmdvdC1wYXNzd29yZCcgfCB0cmFuc2xhdGUgfX0gOjwvbGFiZWw+XG4gICAgPGlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiJ2VtYWlsJ1wiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInRydWVcIlxuICAgICAgICAgIG1pbmxlbmd0aD1cIjRcIlxuICAgICAgICAgIG1heGxlbmd0aD1cIjUwXCJcbiAgICAgICAgICBbcGF0dGVybl09XCJwYXR0ZXJuRW1haWxcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdzdGF0dXMtZGFuZ2VyJzogaGFzRXJyb3JFbWFpbCxcbiAgICAgICAgICAgICdzdGF0dXMtc3VjY2Vzcyc6IGhhc1N1Y2Nlc3NFbWFpbFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgaWQ9XCJpbnB1dEVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdFbWFpbCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgIGZpZWxkU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjFcIlxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICBmdWxsV2lkdGg+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc0Vycm9yRW1haWxcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCI+e3snZXJyb3IucGF0dGVybi5lbWFpbCcgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZm9ybS5pbnZhbGlkIHx8IGJ1dHRvbkZvcmdvdFBhc3N3b3JkXCJcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgW2NsYXNzLmJ0bi1wdWxzZV09XCJmb3JtLmludmFsaWQgfHwgYnV0dG9uRm9yZ290UGFzc3dvcmRcIj5cbiAgICB7eyAnU2VuZCcgfCB0cmFuc2xhdGUgfX1cbiAgPC9idXR0b24+XG48L2Zvcm0+XG5cbjxzZWN0aW9uIGNsYXNzPVwic2lnbi1pbi1vci11cFwiIGFyaWEtbGFiZWw9XCJTaWduIGluIG9yIHNpZ24gdXBcIj5cbiAgPHA+PGEgY2xhc3M9XCJ0ZXh0LWxpbmtcIiByb3V0ZXJMaW5rPVwiL2F1dGgvbG9naW5cIj57eyAnbWVzc2FnZS5mb3Jnb3QtcGFzc3dvcmQtbGluaycgfCB0cmFuc2xhdGV9fTwvYT48L3A+XG4gIDwhLS1cbiAgPHA+PGEgcm91dGVyTGluaz1cIi9hdXRoL3JlZ2lzdGVyXCIgY2xhc3M9XCJ0ZXh0LWxpbmtcIj57eyAnUmVnaXN0ZXInIHwgdHJhbnNsYXRlfX08L2E+PC9wPlxuICAtLT5cbjwvc2VjdGlvbj5cbiJdfQ==