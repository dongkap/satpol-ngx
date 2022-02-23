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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG8tYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvZG8tYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsYUFBYSxFQUNiLGNBQWMsRUFDZCxZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxZQUFZLEVBQ1osYUFBYSxFQUNiLGVBQWUsR0FDaEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFDTCxlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLG1CQUFtQixFQUNuQixZQUFZLEdBQ2IsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMs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LGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWMsQ0FBQyxRQUFRLEVBQUU7d0JBQ3pCLGFBQWE7d0JBQ2IsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxHQUFHLGVBQWU7cUJBQ25CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IFJlY2FwdGNoYUZvcm1zTW9kdWxlLCBSZWNhcHRjaGFNb2R1bGUgfSBmcm9tICduZy1yZWNhcHRjaGEnO1xuaW1wb3J0IHtcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJDaGVja2JveE1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJJbnB1dE1vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBEb1RoZW1lTW9kdWxlIH0gZnJvbSAnQGRvbmdrYXAvZG8tdGhlbWUnO1xuaW1wb3J0IHsgRG9Ub2FzdHJNb2R1bGUgfSBmcm9tICdAZG9uZ2thcC9kby1zaGFyZWQnO1xuaW1wb3J0IHtcbiAgQVVUSF9JTkRFWEVEX0RCLFxuICBQUk9GSUxFX0lOREVYRURfREIsXG4gIFNFVFRJTkdTX0lOREVYRURfREIsXG4gIFVTRVJfU0VSVklDRSxcbn0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBEb0xheW91dEF1dGhNb2R1bGUgfSBmcm9tICcuL2RvLWxheW91dC1hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBEb0F1dGhSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9kby1hdXRoLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEF1dGhGb3JjZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZm9yY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmRDaGlsZFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtZ3VhcmQtY2hpbGQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC1sYW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtc2lnbmF0dXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC11c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yRXJyb3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLWVycm9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yTGFuZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvclNpZ25hdHVyZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3Itc2lnbmF0dXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZS9wcm9maWxlLWluZGV4ZWRkYi5zZXJ2aWNlJztcbmltcG9ydCB7IFNldHRpbmdzSW5kZXhlZERCU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZSc7XG5pbXBvcnQgeyBVbmF1dGhvcml6ZUd1YXJkU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdW5hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9naW5QYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jnb3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9mb3Jnb3QvZm9yZ290LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFJlcXVlc3RGb3Jnb3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9mb3Jnb3QvcmVxdWVzdC1mb3Jnb3QtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmF0ZUFjY291bnRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9hY3RpdmF0ZS1hY2NvdW50L2FjdGl2YXRlLWFjY291bnQtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT0F1dGgyQ2FsbGJhY2tDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29hdXRoMi9vYXV0aDItY2FsbGJhY2suY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEFVVEhfUFJPVklERVJTID0gW1xuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yVG9rZW5TZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JTaWduYXR1cmVTZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwSW50ZXJjZXB0b3JMYW5nU2VydmljZSwgbXVsdGk6IHRydWV9LFxuICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEludGVyY2VwdG9yRXJyb3JTZXJ2aWNlLCBtdWx0aTogdHJ1ZX0sXG4gIHsgcHJvdmlkZTogVVNFUl9TRVJWSUNFLCB1c2VDbGFzczogQXV0aFVzZXJTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogQVVUSF9JTkRFWEVEX0RCLCB1c2VDbGFzczogQXV0aEluZGV4ZWREQlNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBQUk9GSUxFX0lOREVYRURfREIsIHVzZUNsYXNzOiBQcm9maWxlSW5kZXhlZERCU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFNFVFRJTkdTX0lOREVYRURfREIsIHVzZUNsYXNzOiBTZXR0aW5nc0luZGV4ZWREQlNlcnZpY2UgfSxcbiAgQXV0aEd1YXJkU2VydmljZSxcbiAgVW5hdXRob3JpemVHdWFyZFNlcnZpY2UsXG4gIEF1dGhUb2tlblNlcnZpY2UsXG4gIEF1dGhHdWFyZENoaWxkU2VydmljZSxcbiAgQXV0aFNpZ25hdHVyZVNlcnZpY2UsXG4gIEF1dGhMYW5ndWFnZVNlcnZpY2UsXG4gIEF1dGhGb3JjZVNlcnZpY2Vcbl07XG5cbmV4cG9ydCBjb25zdCBBVVRIX0NPTVBPTkVOVFMgPSBbXG4gIExvZ2luUGFnZUNvbXBvbmVudCxcbiAgTG9nb3V0Q29tcG9uZW50LFxuICBGb3Jnb3RQYWdlQ29tcG9uZW50LFxuICBSZXF1ZXN0Rm9yZ290UGFnZUNvbXBvbmVudCxcbiAgUmVnaXN0ZXJQYWdlQ29tcG9uZW50LFxuICBBY3RpdmF0ZUFjY291bnRQYWdlQ29tcG9uZW50LFxuICBUZXJtc0NvbmRpdGlvbnNDb21wb25lbnQsXG4gIE9BdXRoMkNhbGxiYWNrQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQVVUSF9DT01QT05FTlRTLFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUmVjYXB0Y2hhTW9kdWxlLFxuICAgIFJlY2FwdGNoYUZvcm1zTW9kdWxlLFxuICAgIE5iQ2hlY2tib3hNb2R1bGUsXG4gICAgTmJBbGVydE1vZHVsZSxcbiAgICBOYklucHV0TW9kdWxlLFxuICAgIE5iQnV0dG9uTW9kdWxlLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJTcGlubmVyTW9kdWxlLFxuICAgIE5iRGlhbG9nTW9kdWxlLmZvckNoaWxkKCksXG4gICAgRG9UaGVtZU1vZHVsZSxcbiAgICBEb1RvYXN0ck1vZHVsZS5mb3JSb290KCksXG4gICAgRG9MYXlvdXRBdXRoTW9kdWxlLFxuICAgIERvQXV0aFJvdXRpbmdNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5BVVRIX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERvQXV0aE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RG9BdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEb0F1dGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uQVVUSF9QUk9WSURFUlMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==