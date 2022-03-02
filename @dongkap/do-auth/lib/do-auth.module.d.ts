import { ModuleWithProviders } from '@angular/core';
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
import * as i1 from "./pages/login/login-page.component";
import * as i2 from "./pages/logout/logout.component";
import * as i3 from "./pages/force/force-login-page.component";
import * as i4 from "./pages/forgot/forgot-page.component";
import * as i5 from "./pages/forgot/request-forgot-page.component";
import * as i6 from "./pages/register/register-page.component";
import * as i7 from "./pages/activate-account/activate-account-page.component";
import * as i8 from "./pages/terms-conditions/terms-conditions.component";
import * as i9 from "./pages/oauth2/oauth2-callback.component";
import * as i10 from "@angular/common";
import * as i11 from "@angular/forms";
import * as i12 from "@ngx-translate/core";
import * as i13 from "@angular/common/http";
import * as i14 from "ng-recaptcha";
import * as i15 from "@nebular/theme";
import * as i16 from "@dongkap/do-theme";
import * as i17 from "@dongkap/do-shared";
import * as i18 from "./do-layout-auth.module";
import * as i19 from "./do-auth-routing.module";
export declare const AUTH_PROVIDERS: (typeof AuthTokenService | typeof UnauthorizeGuardService | typeof AuthGuardService | typeof AuthForceService | typeof AuthGuardChildService | typeof AuthLanguageService | typeof AuthSignatureService | {
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof HttpInterceptorTokenService;
    multi: boolean;
} | {
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof HttpInterceptorSignatureService;
    multi: boolean;
} | {
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof HttpInterceptorLangService;
    multi: boolean;
} | {
    provide: import("@angular/core").InjectionToken<import("@angular/common/http").HttpInterceptor[]>;
    useClass: typeof HttpInterceptorErrorService;
    multi: boolean;
} | {
    provide: import("@angular/core").InjectionToken<import("@dongkap/do-core").UserService>;
    useClass: typeof AuthUserService;
    multi?: undefined;
} | {
    provide: import("@angular/core").InjectionToken<import("@dongkap/do-core").IndexedDBEncFactoryService>;
    useClass: typeof AuthIndexedDBService;
    multi?: undefined;
} | {
    provide: import("@angular/core").InjectionToken<import("@dongkap/do-core").IndexedDBFactoryService>;
    useClass: typeof ProfileIndexedDBService;
    multi?: undefined;
} | {
    provide: import("@angular/core").InjectionToken<import("@dongkap/do-core").IndexedDBFactoryService>;
    useClass: typeof SettingsIndexedDBService;
    multi?: undefined;
})[];
export declare const AUTH_COMPONENTS: (typeof TermsConditionsComponent | typeof LoginPageComponent | typeof LogoutComponent | typeof ForceLoginPageComponent | typeof RequestForgotPageComponent | typeof ForgotPageComponent | typeof RegisterPageComponent | typeof ActivateAccountPageComponent | typeof OAuth2CallbackComponent)[];
export declare class DoAuthModule {
    static forRoot(): ModuleWithProviders<DoAuthModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoAuthModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DoAuthModule, [typeof i1.LoginPageComponent, typeof i2.LogoutComponent, typeof i3.ForceLoginPageComponent, typeof i4.ForgotPageComponent, typeof i5.RequestForgotPageComponent, typeof i6.RegisterPageComponent, typeof i7.ActivateAccountPageComponent, typeof i8.TermsConditionsComponent, typeof i9.OAuth2CallbackComponent], [typeof i10.CommonModule, typeof i11.FormsModule, typeof i12.TranslateModule, typeof i11.ReactiveFormsModule, typeof i13.HttpClientModule, typeof i14.RecaptchaModule, typeof i14.RecaptchaFormsModule, typeof i15.NbCheckboxModule, typeof i15.NbAlertModule, typeof i15.NbInputModule, typeof i15.NbButtonModule, typeof i15.NbIconModule, typeof i15.NbCardModule, typeof i15.NbSpinnerModule, typeof i15.NbDialogModule, typeof i16.DoThemeModule, typeof i17.DoToastrModule, typeof i18.DoLayoutAuthModule, typeof i19.DoAuthRoutingModule], [typeof i1.LoginPageComponent, typeof i2.LogoutComponent, typeof i3.ForceLoginPageComponent, typeof i4.ForgotPageComponent, typeof i5.RequestForgotPageComponent, typeof i6.RegisterPageComponent, typeof i7.ActivateAccountPageComponent, typeof i8.TermsConditionsComponent, typeof i9.OAuth2CallbackComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DoAuthModule>;
}
