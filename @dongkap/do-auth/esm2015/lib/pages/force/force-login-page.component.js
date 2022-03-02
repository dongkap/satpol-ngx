import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/auth-token.service";
import * as i3 from "../../services/auth-force.service";
import * as i4 from "@dongkap/do-shared";
import * as i5 from "@nebular/theme";
import * as i6 from "@ngx-translate/core";
export class ForceLoginPageComponent {
    constructor(router, authTokenService, authForceService, toastr) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.authForceService = authForceService;
        this.toastr = toastr;
        this.buttonForceLogin = false;
        this.progress = 25;
        this.destroy$ = new Subject();
        if (this.authForceService.isEmpty()) {
            this.router.navigate(['/auth']);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    forcelogin() {
        if (!this.authForceService.isEmpty()) {
            this.initProgress();
            if (this.progress < 35) {
                this.setProgress(this.progress = 35);
            }
            this.buttonForceLogin = true;
            this.authTokenService.force(this.authForceService.username, this.authForceService.password)
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
                    this.responseError = response === null || response === void 0 ? void 0 : response.respStatusMessage[response === null || response === void 0 ? void 0 : response.respStatusCode];
                }
                catch (error) {
                    this.responseError = 'error.500';
                }
                this.toastr.showI18n(this.responseError, true, null, 'danger');
                this.buttonForceLogin = false;
                this.progress = 0;
                this.doneProgress();
            });
            if (this.progress >= 35 && this.progress < 65) {
                this.setProgress(this.progress = 65);
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
ForceLoginPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ForceLoginPageComponent, deps: [{ token: i1.Router }, { token: i2.AuthTokenService }, { token: i3.AuthForceService }, { token: i4.DoToastrService }], target: i0.ɵɵFactoryTarget.Component });
ForceLoginPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ForceLoginPageComponent, selector: "do-force-login-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Login Warning' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.force' | translate }}</p>\n\n<div class=\"form-control-group\">\n  <button fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"buttonForceLogin\"\n          [disabled]=\"buttonForceLogin\"\n          (click)=\"forcelogin()\">\n    {{ 'Force Login' | translate }}\n  </button>\n</div>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p>\n    {{ 'subtitle.force-footer' | translate }} <a class=\"text-link\" routerLink=\"/auth/login\">{{ 'Click here' | translate }}</a>\n  </p>\n  <!--\n  <p><a routerLink=\"/auth/register\" class=\"text-link\">{{ 'Register' | translate}}</a></p>\n  -->\n</section>\n", styles: [""], components: [{ type: i5.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i6.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ForceLoginPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-force-login-page',
                    styleUrls: ['./force-login-page.component.scss'],
                    templateUrl: 'force-login-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.AuthTokenService }, { type: i3.AuthForceService }, { type: i4.DoToastrService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yY2UtbG9naW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvcGFnZXMvZm9yY2UvZm9yY2UtbG9naW4tcGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvcGFnZXMvZm9yY2UvZm9yY2UtbG9naW4tcGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0FBVy9CLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFDVSxNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLGdCQUFrQyxFQUNsQyxNQUF1QjtRQUh2QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBVDFCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNqQyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXBCLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQU9sRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FB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QkFMbkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztvQkFDaEQsV0FBVyxFQUFFLGlDQUFpQztpQkFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBpQmFzZVJlc3BvbnNlIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBEb1RvYXN0clNlcnZpY2UgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoRm9yY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC1mb3JjZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkby1mb3JjZS1sb2dpbi1wYWdlJyxcbiAgICBzdHlsZVVybHM6IFsnLi9mb3JjZS1sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGVVcmw6ICdmb3JjZS1sb2dpbi1wYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9yY2VMb2dpblBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyByZXNwb25zZUVycm9yOiBhbnk7XG4gIHB1YmxpYyByZXNwb25zZUVycm9yQ29kZTogYW55O1xuICBwdWJsaWMgYnV0dG9uRm9yY2VMb2dpbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHByb2dyZXNzOiBudW1iZXIgPSAyNTtcbiAgcHJvdGVjdGVkIHByb2dyZXNzRE9NOiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoRm9yY2VTZXJ2aWNlOiBBdXRoRm9yY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9hc3RyOiBEb1RvYXN0clNlcnZpY2UpIHtcbiAgICAgIGlmICh0aGlzLmF1dGhGb3JjZVNlcnZpY2UuaXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JjZWxvZ2luKCkge1xuICAgIGlmICghdGhpcy5hdXRoRm9yY2VTZXJ2aWNlLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5pbml0UHJvZ3Jlc3MoKTtcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzIDwgMzUpIHtcbiAgICAgICAgdGhpcy5zZXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzID0gMzUpO1xuICAgICAgfVxuICAgICAgdGhpcy5idXR0b25Gb3JjZUxvZ2luID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXV0aFRva2VuU2VydmljZS5mb3JjZShcbiAgICAgICAgdGhpcy5hdXRoRm9yY2VTZXJ2aWNlLnVzZXJuYW1lLFxuICAgICAgICB0aGlzLmF1dGhGb3JjZVNlcnZpY2UucGFzc3dvcmQpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFByb2dyZXNzKHRoaXMucHJvZ3Jlc3MgPSA5NSk7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hcHAvaG9tZSddKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGVycm9yID0gZXJyb3JbJ2Vycm9yJ10gYXMgQXBpQmFzZVJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSA9IChlcnJvciBhcyBBcGlCYXNlUmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5yZXNwb25zZUVycm9yID0gcmVzcG9uc2U/LnJlc3BTdGF0dXNNZXNzYWdlW3Jlc3BvbnNlPy5yZXNwU3RhdHVzQ29kZV07XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9ICdlcnJvci41MDAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRvYXN0ci5zaG93STE4bih0aGlzLnJlc3BvbnNlRXJyb3IsIHRydWUsIG51bGwsICdkYW5nZXInKTtcbiAgICAgICAgICB0aGlzLmJ1dHRvbkZvcmNlTG9naW4gPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgICB0aGlzLmRvbmVQcm9ncmVzcygpO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzID49IDM1ICYmIHRoaXMucHJvZ3Jlc3MgPCA2NSkge1xuICAgICAgICB0aGlzLnNldFByb2dyZXNzKHRoaXMucHJvZ3Jlc3MgPSA2NSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRQcm9ncmVzcygpOiB2b2lkIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1kb25lJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtaW5hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgcGFjZS5jbGFzc05hbWUgPSBwYWNlLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgdGhpcy5wcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGRvbmVQcm9ncmVzcygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1ydW5uaW5nJykuZm9yRWFjaChwYWNlID0+IHtcbiAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtcnVubmluZycsICdwYWNlLWRvbmUnKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1hY3RpdmUnLCAncGFjZS1pbmFjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICB0aGlzLnByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgcHJvZ3Jlc3MgKyAnJSwgMHB4LCAwcHgpJztcbiAgICB0aGlzLnByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gcHJvZ3Jlc3MgKyAnJSc7XG4gICAgdGhpcy5wcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzJykudmFsdWUgPSBwcm9ncmVzcy50b1N0cmluZygpO1xuICB9XG5cbn1cbiIsIjxoMSBpZD1cInRpdGxlXCIgY2xhc3M9XCJ0aXRsZVwiPnt7ICdMb2dpbiBXYXJuaW5nJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG48cCBjbGFzcz1cInN1Yi10aXRsZVwiPnt7ICdzdWJ0aXRsZS5mb3JjZScgfCB0cmFuc2xhdGUgfX08L3A+XG5cbjxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wtZ3JvdXBcIj5cbiAgPGJ1dHRvbiBmdWxsV2lkdGhcbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgW2NsYXNzLmJ0bi1wdWxzZV09XCJidXR0b25Gb3JjZUxvZ2luXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiYnV0dG9uRm9yY2VMb2dpblwiXG4gICAgICAgICAgKGNsaWNrKT1cImZvcmNlbG9naW4oKVwiPlxuICAgIHt7ICdGb3JjZSBMb2dpbicgfCB0cmFuc2xhdGUgfX1cbiAgPC9idXR0b24+XG48L2Rpdj5cblxuPHNlY3Rpb24gY2xhc3M9XCJzaWduLWluLW9yLXVwXCIgYXJpYS1sYWJlbD1cIlNpZ24gaW4gb3Igc2lnbiB1cFwiPlxuICA8cD5cbiAgICB7eyAnc3VidGl0bGUuZm9yY2UtZm9vdGVyJyB8IHRyYW5zbGF0ZSB9fSA8YSBjbGFzcz1cInRleHQtbGlua1wiIHJvdXRlckxpbms9XCIvYXV0aC9sb2dpblwiPnt7ICdDbGljayBoZXJlJyB8IHRyYW5zbGF0ZSB9fTwvYT5cbiAgPC9wPlxuICA8IS0tXG4gIDxwPjxhIHJvdXRlckxpbms9XCIvYXV0aC9yZWdpc3RlclwiIGNsYXNzPVwidGV4dC1saW5rXCI+e3sgJ1JlZ2lzdGVyJyB8IHRyYW5zbGF0ZX19PC9hPjwvcD5cbiAgLS0+XG48L3NlY3Rpb24+XG4iXX0=