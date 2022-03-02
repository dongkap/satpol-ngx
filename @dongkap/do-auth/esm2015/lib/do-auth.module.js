import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbInputModule, NbSpinnerModule, } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import { DoToastrModule } from '@dongkap/do-shared';
import { AUTH_INDEXED_DB, PROFILE_INDEXED_DB, SETTINGS_INDEXED_DB, USER_SERVICE, } from '@dongkap/do-core';
import { DoLayoutAuthModule } from './do-layout-auth.module';
import { DoAuthRoutingModule } from './do-auth-routing.module';
import { AuthForceService } from './services/auth-force.service';
import { AuthGuardChildService } from './services/auth-guard-child.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthLanguageService } from './services/auth-lang.service';
import { AuthSignatureService } from './services/auth-signature.service';
import { AuthTokenService } from './services/auth-token.service';
import { AuthUserService } from './services/auth-user.service';
import { HttpInterceptorErrorService } from './services/http-interceptor-error.service';
import { HttpInterceptorLangService } from './services/http-interceptor-lang.service';
import { HttpInterceptorSignatureService } from './services/http-interceptor-signature.service';
import { HttpInterceptorTokenService } from './services/http-interceptor-token.service';
import { AuthIndexedDBService } from './services/storage/auth-indexeddb.service';
import { ProfileIndexedDBService } from './services/storage/profile-indexeddb.service';
import { SettingsIndexedDBService } from './services/storage/settings-indexeddb.service';
import { UnauthorizeGuardService } from './services/unauth-guard.service';
import { LoginPageComponent } from './pages/login/login-page.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ForceLoginPageComponent } from './pages/force/force-login-page.component';
import { ForgotPageComponent } from './pages/forgot/forgot-page.component';
import { RequestForgotPageComponent } from './pages/forgot/request-forgot-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';
import { ActivateAccountPageComponent } from './pages/activate-account/activate-account-page.component';
import { OAuth2CallbackComponent } from './pages/oauth2/oauth2-callback.component';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@dongkap/do-shared";
export const AUTH_PROVIDERS = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorTokenService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorSignatureService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorLangService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorErrorService, multi: true },
    { provide: USER_SERVICE, useClass: AuthUserService },
    { provide: AUTH_INDEXED_DB, useClass: AuthIndexedDBService },
    { provide: PROFILE_INDEXED_DB, useClass: ProfileIndexedDBService },
    { provide: SETTINGS_INDEXED_DB, useClass: SettingsIndexedDBService },
    AuthGuardService,
    UnauthorizeGuardService,
    AuthTokenService,
    AuthGuardChildService,
    AuthSignatureService,
    AuthLanguageService,
    AuthForceService
];
export const AUTH_COMPONENTS = [
    LoginPageComponent,
    LogoutComponent,
    ForceLoginPageComponent,
    ForgotPageComponent,
    RequestForgotPageComponent,
    RegisterPageComponent,
    ActivateAccountPageComponent,
    TermsConditionsComponent,
    OAuth2CallbackComponent,
];
export class DoAuthModule {
    static forRoot() {
        return {
            ngModule: DoAuthModule,
            providers: [
                ...AUTH_PROVIDERS,
            ],
        };
    }
}
DoAuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoAuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthModule, declarations: [LoginPageComponent,
        LogoutComponent,
        ForceLoginPageComponent,
        ForgotPageComponent,
        RequestForgotPageComponent,
        RegisterPageComponent,
        ActivateAccountPageComponent,
        TermsConditionsComponent,
        OAuth2CallbackComponent], imports: [CommonModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule,
        HttpClientModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        NbCheckboxModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbIconModule,
        NbCardModule,
        NbSpinnerModule, i1.NbDialogModule, DoThemeModule, i2.DoToastrModule, DoLayoutAuthModule,
        DoAuthRoutingModule], exports: [LoginPageComponent,
        LogoutComponent,
        ForceLoginPageComponent,
        ForgotPageComponent,
        RequestForgotPageComponent,
        RegisterPageComponent,
        ActivateAccountPageComponent,
        TermsConditionsComponent,
        OAuth2CallbackComponent] });
DoAuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthModule, imports: [[
            CommonModule,
            FormsModule,
            TranslateModule,
            ReactiveFormsModule,
            HttpClientModule,
            RecaptchaModule,
            RecaptchaFormsModule,
            NbCheckboxModule,
            NbAlertModule,
            NbInputModule,
            NbButtonModule,
            NbIconModule,
            NbCardModule,
            NbSpinnerModule,
            NbDialogModule.forChild(),
            DoThemeModule,
            DoToastrModule.forRoot(),
            DoLayoutAuthModule,
            DoAuthRoutingModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ...AUTH_COMPONENTS,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        TranslateModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        RecaptchaModule,
                        RecaptchaFormsModule,
                        NbCheckboxModule,
                        NbAlertModule,
                        NbInputModule,
                        NbButtonModule,
                        NbIconModule,
                        NbCardModule,
                        NbSpinnerModule,
                        NbDialogModule.forChild(),
                        DoThemeModule,
                        DoToastrModule.forRoot(),
                        DoLayoutAuthModule,
                        DoAuthRoutingModule,
                    ],
                    exports: [
                        ...AUTH_COMPONENTS,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvZG8tYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsYUFBYSxFQUNiLGNBQWMsRUFDZCxZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxZQUFZLEVBQ1osYUFBYSxFQUNiLGVBQWUsR0FDaEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFDTCxlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixZQUFZLEdBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMs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QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3pCLGFBQWE7d0JBQ2IsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLGVBQWU7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IFJlY2FwdGNoYUZvcm1zTW9kdWxlLCBSZWNhcHRjaGFNb2R1bGUgfSBmcm9tICduZy1yZWNhcHRjaGEnO1xuaW1wb3J0IHtcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJDaGVja2JveE1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJJbnB1dE1vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHsgRG9Ub2FzdHJNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHtcbiAgQVVUSF9JTkRFWEVEX0RCLFxuICBQUk9GSUxFX0lOREVYRURfREIsXG4gIFNFVFRJTkdTX0lOREVYRURfREIsXG4gIFVTRVJfU0VSVklDRSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBEb0xheW91dEF1dGhNb2R1bGUgfSBmcm9tICcuL2RvLWxheW91dC1hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0F1dGhSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kby1hdXRoLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEF1dGhGb3JjZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZm9yY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZ3VhcmQtY2hpbGQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC1sYW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtc2lnbmF0dXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC11c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLWVycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yTGFuZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3Itc2lnbmF0dXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZS9wcm9maWxlLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IFNldHRpbmdzSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBVbmF1dGhvcml6ZUd1YXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdW5hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JjZUxvZ2luUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZm9yY2UvZm9yY2UtbG9naW4tcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9yZ290UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZm9yZ290L2ZvcmdvdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXF1ZXN0Rm9yZ290UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZm9yZ290L3JlcXVlc3QtZm9yZ290LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdGVyUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZhdGVBY2NvdW50UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvYWN0aXZhdGUtYWNjb3VudC9hY3RpdmF0ZS1hY2NvdW50LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE9BdXRoMkNhbGxiYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vYXV0aDIvb2F1dGgyLWNhbGxiYWNrLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBBVVRIX1BST1ZJREVSUyA9IFtcbiAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBJbnRlcmNlcHRvclRva2VuU2VydmljZSwgbXVsdGk6IHRydWV9LFxuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yU2lnbmF0dXJlU2VydmljZSwgbXVsdGk6IHRydWV9LFxuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yTGFuZ1NlcnZpY2UsIG11bHRpOiB0cnVlfSxcbiAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBJbnRlcmNlcHRvckVycm9yU2VydmljZSwgbXVsdGk6IHRydWV9LFxuICB7IHByb3ZpZGU6IFVTRVJfU0VSVklDRSwgdXNlQ2xhc3M6IEF1dGhVc2VyU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IEFVVEhfSU5ERVhFRF9EQiwgdXNlQ2xhc3M6IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogUFJPRklMRV9JTkRFWEVEX0RCLCB1c2VDbGFzczogUHJvZmlsZUluZGV4ZWREQlNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBTRVRUSU5HU19JTkRFWEVEX0RCLCB1c2VDbGFzczogU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlIH0sXG4gIEF1dGhHdWFyZFNlcnZpY2UsXG4gIFVuYXV0aG9yaXplR3VhcmRTZXJ2aWNlLFxuICBBdXRoVG9rZW5TZXJ2aWNlLFxuICBBdXRoR3VhcmRDaGlsZFNlcnZpY2UsXG4gIEF1dGhTaWduYXR1cmVTZXJ2aWNlLFxuICBBdXRoTGFuZ3VhZ2VTZXJ2aWNlLFxuICBBdXRoRm9yY2VTZXJ2aWNlXG5dO1xuXG5leHBvcnQgY29uc3QgQVVUSF9DT01QT05FTlRTID0gW1xuICBMb2dpblBhZ2VDb21wb25lbnQsXG4gIExvZ291dENvbXBvbmVudCxcbiAgRm9yY2VMb2dpblBhZ2VDb21wb25lbnQsXG4gIEZvcmdvdFBhZ2VDb21wb25lbnQsXG4gIFJlcXVlc3RGb3Jnb3RQYWdlQ29tcG9uZW50LFxuICBSZWdpc3RlclBhZ2VDb21wb25lbnQsXG4gIEFjdGl2YXRlQWNjb3VudFBhZ2VDb21wb25lbnQsXG4gIFRlcm1zQ29uZGl0aW9uc0NvbXBvbmVudCxcbiAgT0F1dGgyQ2FsbGJhY2tDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5BVVRIX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSZWNhcHRjaGFNb2R1bGUsXG4gICAgUmVjYXB0Y2hhRm9ybXNNb2R1bGUsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgICBOYkFsZXJ0TW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJCdXR0b25Nb2R1bGUsXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYlNwaW5uZXJNb2R1bGUsXG4gICAgTmJEaWFsb2dNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICBEb1RoZW1lTW9kdWxlLFxuICAgIERvVG9hc3RyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBEb0xheW91dEF1dGhNb2R1bGUsXG4gICAgRG9BdXRoUm91dGluZ01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkFVVEhfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRG9BdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEb0F1dGhNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERvQXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5BVVRIX1BST1ZJREVSUyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19