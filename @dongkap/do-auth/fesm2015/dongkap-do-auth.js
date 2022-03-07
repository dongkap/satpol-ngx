import * as i6 from '@angular/common';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HttpHeaders, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as i0 from '@angular/core';
import { Component, NgModule, Injectable, Inject, Input, LOCALE_ID } from '@angular/core';
import * as i7 from '@angular/forms';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@ngx-translate/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import * as i6$1 from 'ng-recaptcha';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import * as i2 from '@nebular/theme';
import { NbLayoutModule, NbCardModule, NbIconModule, NbCheckboxModule, NbAlertModule, NbInputModule, NbButtonModule, NbSpinnerModule, NbDialogModule } from '@nebular/theme';
import { DoThemeModule } from '@dongkap/do-theme';
import * as i2$1 from '@dongkap/do-shared';
import { DoToastrModule } from '@dongkap/do-shared';
import * as i4 from '@dongkap/do-core';
import { IndexedDBService, oauthInfoModels, TypeDataOauth, additionalInfoModels, oauthInfo, signatureHeader, HTTP_SERVICE, OAUTH_INFO, API, USER_SERVICE, ResponseCode, Pattern, DateFormat, UserService, AUTH_INDEXED_DB, PROFILE_INDEXED_DB, SETTINGS_INDEXED_DB } from '@dongkap/do-core';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import { Subject, of, from, combineLatest, BehaviorSubject, throwError, EMPTY } from 'rxjs';
import { __awaiter } from 'tslib';
import { takeUntil, switchMap, map, debounceTime, distinctUntilChanged, first, take, catchError, filter } from 'rxjs/operators';
import * as i5 from '@ng-idle/core';
import { DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';

class AuthBlockComponent {
}
AuthBlockComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthBlockComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AuthBlockComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AuthBlockComponent, selector: "do-auth-block", ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, styles: [":host{display:block;width:100%;max-width:35rem}:host ::ng-deep form{width:100%}:host ::ng-deep .label{display:block;margin-bottom:.5rem}:host ::ng-deep .forgot-password{text-decoration:none;margin-bottom:.5rem}:host ::ng-deep .caption{margin-top:.5rem}:host ::ng-deep .alert{text-align:center}:host ::ng-deep .title{margin-top:0;margin-bottom:.75rem;text-align:center}:host ::ng-deep .sub-title{margin-bottom:2rem;text-align:center}:host ::ng-deep .form-control-group{margin-bottom:2rem}:host ::ng-deep .form-control-group.accept-group{display:flex;justify-content:space-between;margin:2rem 0}:host ::ng-deep .label-with-link{display:flex;justify-content:space-between}:host ::ng-deep .links{text-align:center;margin-top:1.75rem}:host ::ng-deep .links .socials{margin-top:1.5rem}:host ::ng-deep .links .socials a{margin:0 1rem;text-decoration:none;vertical-align:middle}:host ::ng-deep .links .socials a.with-icon{font-size:2rem}:host ::ng-deep .another-action{margin-top:2rem;text-align:center}:host ::ng-deep .sign-in-or-up{margin-top:2rem;display:flex;justify-content:space-between}:host ::ng-deep nb-alert .alert-title,:host ::ng-deep nb-alert .alert-message{margin:0 0 .5rem}:host ::ng-deep nb-alert .alert-message-list{list-style-type:none;padding:0;margin:0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthBlockComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-auth-block',
                    styleUrls: ['auth-block.component.scss'],
                    template: `
    <ng-content></ng-content>
  `,
                }]
        }] });

class AuthComponent {
    constructor(location) {
        this.location = location;
    }
    back() {
        this.location.back();
        return false;
    }
    ngOnDestroy() {
        this.alive = false;
    }
}
AuthComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthComponent, deps: [{ token: i6.Location }], target: i0.ɵɵFactoryTarget.Component });
AuthComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AuthComponent, selector: "do-auth", ngImport: i0, template: "<nb-layout>\n    <nb-layout-column>\n        <nb-card>\n            <nb-card-header>\n                <nav class=\"navigation\">\n                    <a href=\"#\" (click)=\"back()\" class=\"link back-link\" aria-label=\"Back\" tabindex=\"-1\">\n                        <nb-icon icon=\"arrow-back\"></nb-icon>\n                    </a>\n                </nav>\n            </nb-card-header>\n            <nb-card-body>\n                <do-auth-block>\n                    <router-outlet></router-outlet>\n                </do-auth-block>\n            </nb-card-body>\n        </nb-card>\n    </nb-layout-column>\n</nb-layout>", styles: [":host nb-card{margin:0;height:calc(100vh - 2 * 2.5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host do-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n"], components: [{ type: i2.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i2.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i2.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i2.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i2.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i2.NbCardBodyComponent, selector: "nb-card-body" }, { type: AuthBlockComponent, selector: "do-auth-block" }], directives: [{ type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-auth',
                    styleUrls: ['auth.component.scss'],
                    templateUrl: 'auth.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i6.Location }]; } });

class DoLayoutAuthModule {
}
DoLayoutAuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLayoutAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoLayoutAuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLayoutAuthModule, declarations: [AuthComponent,
        AuthBlockComponent], imports: [NbLayoutModule,
        NbCardModule,
        NbIconModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
        DoThemeModule], exports: [AuthComponent,
        AuthBlockComponent] });
DoLayoutAuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLayoutAuthModule, imports: [[
            NbLayoutModule,
            NbCardModule,
            NbIconModule,
            CommonModule,
            HttpClientModule,
            RouterModule,
            DoThemeModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoLayoutAuthModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AuthComponent,
                        AuthBlockComponent,
                    ],
                    imports: [
                        NbLayoutModule,
                        NbCardModule,
                        NbIconModule,
                        CommonModule,
                        HttpClientModule,
                        RouterModule,
                        DoThemeModule,
                    ],
                    exports: [
                        AuthComponent,
                        AuthBlockComponent,
                    ],
                }]
        }] });

class AuthIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-auth');
    }
    getEnc(key, storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            return ((yield this.$dbPromise).get(storeName ? storeName : '#do-auth', keyEncrypted)).then((value) => {
                return this.enc.decryptAES(this.oauthResource['aes_key'], value);
            });
        });
    }
    putEnc(key, val, storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], val);
            return (yield this.$dbPromise).put(storeName ? storeName : '#do-auth', valueEncrypted, keyEncrypted);
        });
    }
    removeEnc(key, storeName) {
        return __awaiter(this, void 0, void 0, function* () {
            const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
            return (yield this.$dbPromise).delete(storeName ? storeName : '#do-auth', keyEncrypted);
        });
    }
    getOfEnc(key, storeName) {
        const result$ = new Subject();
        this.getEnc(key, storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    putOfEnc(key, val, storeName) {
        const result$ = new Subject();
        this.putEnc(key, val, storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    removeOfEnc(key, storeName) {
        const result$ = new Subject();
        this.removeEnc(key, storeName).then((value) => {
            result$.next(value);
        });
        return result$.asObservable();
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.OAUTH && data.persist) {
                    if (data.enc) {
                        this.putEnc(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                    else {
                        this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    }
                }
            }
        });
    }
    logout() {
        oauthInfoModels.forEach(data => {
            if (data.enc) {
                if (data.type === TypeDataOauth.OAUTH) {
                    this.removeEnc(data.key).then();
                }
            }
        });
        additionalInfoModels.forEach(data => {
            if (data.enc) {
                if (data.type === TypeDataOauth.OAUTH) {
                    this.removeEnc(data.key).then();
                }
            }
        });
    }
    isLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.getEnc(oauthInfo.access_token)) {
                return true;
            }
            oauthInfoModels.forEach(data => {
                this.removeEnc(data.key).then();
            });
            return false;
        });
    }
}
AuthIndexedDBService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthIndexedDBService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
AuthIndexedDBService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthIndexedDBService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthIndexedDBService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class ProfileIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-profile');
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.PROFILE && data.persist) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                }
            }
        });
    }
    logout() {
        oauthInfoModels.forEach(data => {
            if (data.type === TypeDataOauth.PROFILE) {
                this.remove(data.key);
            }
        });
        additionalInfoModels.forEach(data => {
            if (data.type === TypeDataOauth.PROFILE) {
                this.remove(data.key);
            }
        });
    }
}
ProfileIndexedDBService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfileIndexedDBService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
ProfileIndexedDBService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfileIndexedDBService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ProfileIndexedDBService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class SettingsIndexedDBService extends IndexedDBService {
    constructor(injector) {
        super(injector, 'do-core', 1, '#do-settings');
        this.translate = injector.get(TranslateService);
    }
    loginStorage(response) {
        oauthInfoModels.forEach(data => {
            if (response[data.key]) {
                if (data.type === TypeDataOauth.SETTINGS && data.persist) {
                    this.put(data.key, data.string ? response[data.key] : JSON.stringify(response[data.key])).then();
                    if (data.key === 'locale') {
                        this.translate.getTranslation(response[data.key]).subscribe((lang) => {
                            this.translate.use(response[data.key]);
                            this.translate.setTranslation(response[data.key], lang, true);
                        });
                    }
                }
            }
        });
    }
}
SettingsIndexedDBService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsIndexedDBService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
SettingsIndexedDBService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsIndexedDBService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: SettingsIndexedDBService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });

class AuthTokenService {
    constructor(httpBaseService, oauthResource, apiPath, router, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.router = router;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.settingsIndexedDB = settingsIndexedDB;
        this.idle = idle;
        this.destroy$ = new Subject();
        idle.setIdle(oauthResource['session_idle']);
        idle.setTimeout(oauthResource['session_timeout']);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onTimeout.subscribe(() => {
            /* console.log('[Dongkap] Session Timeout'); */
            this.logout();
        });
        idle.onIdleEnd.subscribe(() => {
            /* console.log('[Dongkap] Session Idle End'); */
        });
    }
    ngOnDestroy() {
        clearInterval(this.timer);
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    login(username, password) {
        this.authIndexedDB.logout();
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['token'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
            .pipe(takeUntil(this.destroy$))
            .toPromise()
            .then((response) => {
            this.idle.setIdle(+response['expires_in']);
            this.idle.watch();
            /* console.log('[DONGKAP] Session Idle Start'); */
            /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
            this.authIndexedDB.loginStorage(response);
            this.profileIndexedDB.loginStorage(response);
            this.settingsIndexedDB.loginStorage(response);
        });
    }
    force(username, password) {
        this.authIndexedDB.logout();
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['force'], this.getAuthBody(username, password).toString(), this.getAuthHeader())
            .pipe(takeUntil(this.destroy$))
            .toPromise()
            .then((response) => {
            this.idle.setIdle(+response['expires_in']);
            this.idle.watch();
            /* console.log('[DONGKAP] Session Idle Start'); */
            /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
            this.authIndexedDB.loginStorage(response);
            this.profileIndexedDB.loginStorage(response);
            this.settingsIndexedDB.loginStorage(response);
        });
    }
    refresh() {
        return this.getBodyRefresh().pipe(switchMap((body) => {
            return this.httpBaseService.
                HTTP_BASE(this.apiPath['auth']['token'], body, this.getAuthHeader())
                .pipe(takeUntil(this.destroy$))
                .pipe(map((response) => {
                this.idle.setIdle(response['expires_in']);
                this.authIndexedDB.logout();
                this.authIndexedDB.loginStorage(response);
            }));
        }));
    }
    logout() {
        this.timer = setInterval(() => {
            this.doLogout();
        }, 5000);
        this.httpBaseService.HTTP_AUTH(this.apiPath['security']['revoke'])
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.doLogout();
        });
    }
    doLogout() {
        this.authIndexedDB.logout();
        this.profileIndexedDB.logout();
        clearInterval(this.timer);
        this.idle.stop();
        this.router.navigate(['/auth']);
    }
    isLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.authIndexedDB.isLogin();
        });
    }
    oauthHeaders(request) {
        const result$ = new Subject();
        let httpHeaders = request.headers ? request.headers : new HttpHeaders();
        httpHeaders = httpHeaders.has(signatureHeader.authorization) ?
            httpHeaders.delete(signatureHeader.authorization) : httpHeaders;
        Promise.all([
            this.authIndexedDB.getEnc(oauthInfo.token_type),
            this.authIndexedDB.getEnc(oauthInfo.access_token)
        ])
            .then((value) => {
            httpHeaders = httpHeaders.set(signatureHeader.authorization, value[0] + ' ' + value[1]);
            result$.next(request.clone({ headers: httpHeaders }));
        });
        return result$.asObservable();
    }
    getAuthHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            Accept: 'application/json',
        });
    }
    getAuthBody(username, password) {
        const body = new URLSearchParams();
        body.append('client_id', this.oauthResource['client_id']);
        body.append('grant_type', this.oauthResource['grant_type']);
        body.append('username', username);
        body.append('password', password);
        body.append('platform', 'web');
        return body;
    }
    getBodyRefresh() {
        const result$ = new Subject();
        this.authIndexedDB.getEnc(oauthInfo.refresh_token).then((value) => {
            const body = new URLSearchParams();
            body.append('client_id', this.oauthResource['client_id']);
            body.append('grant_type', 'refresh_token');
            body.append('refresh_token', value);
            result$.next(body.toString());
        });
        return result$.asObservable();
    }
}
AuthTokenService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthTokenService, deps: [{ token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }, { token: i1.Router }, { token: AuthIndexedDBService }, { token: ProfileIndexedDBService }, { token: SettingsIndexedDBService }, { token: i5.Idle }], target: i0.ɵɵFactoryTarget.Injectable });
AuthTokenService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthTokenService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthTokenService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: i1.Router }, { type: AuthIndexedDBService }, { type: ProfileIndexedDBService }, { type: SettingsIndexedDBService }, { type: i5.Idle }]; } });

class UnauthorizeGuardService {
    constructor(router, authTokenService) {
        this.router = router;
        this.authTokenService = authTokenService;
    }
    canActivate(route, state) {
        const result$ = new Subject();
        this.authTokenService.isLogin().then((value) => {
            result$.next(!value);
            if (value) {
                this.router.navigate(['/app']);
            }
        });
        return result$.asObservable();
    }
}
UnauthorizeGuardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UnauthorizeGuardService, deps: [{ token: i1.Router }, { token: AuthTokenService }], target: i0.ɵɵFactoryTarget.Injectable });
UnauthorizeGuardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UnauthorizeGuardService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UnauthorizeGuardService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: AuthTokenService }]; } });

class AuthGuardService {
    constructor(router, authTokenService, authService) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.authService = authService;
    }
    canActivate(route, state) {
        const result$ = new Subject();
        this.authTokenService.isLogin().then((value) => {
            result$.next(value);
            if (!value) {
                this.router.navigate(['/auth']);
            }
            else {
                if (state.url !== '/auth/logout') {
                    this.authService.loadUser();
                }
            }
        });
        return result$.asObservable();
    }
}
AuthGuardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardService, deps: [{ token: i1.Router }, { token: AuthTokenService }, { token: USER_SERVICE }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: AuthTokenService }, { type: i4.UserService, decorators: [{
                    type: Inject,
                    args: [USER_SERVICE]
                }] }]; } });

class TermsConditionsComponent {
    constructor(ref) {
        this.ref = ref;
        this.action = 'Agree';
    }
    submit() {
        this.ref.close(true);
    }
}
TermsConditionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TermsConditionsComponent, deps: [{ token: i2.NbDialogRef }], target: i0.ɵɵFactoryTarget.Component });
TermsConditionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: TermsConditionsComponent, selector: "do-terms-conditions", inputs: { content: "content", action: "action" }, ngImport: i0, template: "<nb-card [size]=\"'medium'\">\n  <nb-card-header>\n    <h2>\n      <strong>\n        {{ 'header.terms-conditions' | translate }}\n      </strong>\n    </h2>\n  </nb-card-header>\n  <nb-card-body>\n    <div [innerHTML]=\"content\"></div>\n  </nb-card-body>\n  <nb-card-footer>\n    <button\n      type=\"submit\"\n      status=\"primary\"\n      size=\"large\"\n      class=\"terms-button\"\n      (click)=\"submit()\"\n      nbButton>\n      {{ action | translate }}\n    </button>\n  </nb-card-footer>\n</nb-card>\n", styles: [".nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.terms-button{width:100%}@media (max-width: 767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.terms-button{font-size:.6rem}}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.terms-button{width:100%}@media (max-width: 767.98px){.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.terms-button{font-size:.6rem}}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.terms-button{width:100%}@media (max-width: 767.98px){.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.terms-button{font-size:.6rem}}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.terms-button{width:100%}@media (max-width: 767.98px){.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.terms-button{font-size:.6rem}}\n"], components: [{ type: i2.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i2.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i2.NbCardBodyComponent, selector: "nb-card-body" }, { type: i2.NbCardFooterComponent, selector: "nb-card-footer" }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: TermsConditionsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-terms-conditions',
                    templateUrl: 'terms-conditions.component.html',
                    styleUrls: ['terms-conditions.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i2.NbDialogRef }]; }, propDecorators: { content: [{
                type: Input
            }], action: [{
                type: Input
            }] } });

class AuthForceService {
    isEmpty() {
        return (this.user && this.pass) ? false : true;
    }
    setData(user, pass) {
        this.user = user;
        this.pass = pass;
    }
    get username() {
        return this.user;
    }
    get password() {
        return this.pass;
    }
}
AuthForceService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthForceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthForceService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthForceService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthForceService, decorators: [{
            type: Injectable
        }] });

class LoginPageComponent {
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
        this.showPassword = false;
        this.icon = 'eye-outline';
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
    onShowPassword() {
        this.showPassword = !this.showPassword;
        this.icon = this.showPassword ? 'eye-off-outline' : 'eye-outline';
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
LoginPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginPageComponent, deps: [{ token: i1.Router }, { token: i2.NbDialogService }, { token: i3.TranslateService }, { token: AuthTokenService }, { token: AuthForceService }, { token: API }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
LoginPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LoginPageComponent, selector: "do-login-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError | translate }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"formGroup\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'message.username-login' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'message.username-login-placeholder' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username-login' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <span class=\"label-with-link\">\n      <label class=\"label\">{{ 'Password' | translate }} :</label>\n      <a class=\"forgot-password caption-2\" routerLink=\"/auth/forgot-password\" tabindex=\"-1\">{{ 'Forgot Password' | translate}}?</a>\n    </span>\n    <div class=\"input-group\">\n      <input [formControlName]=\"'password'\"\n            [required]=\"true\"\n            [ngClass]=\"{\n              'status-danger': hasErrorPassword,\n              'status-success': hasSuccessPassword\n            }\"\n            name=\"password\"\n            [type]=\"!showPassword ? 'password' : 'text'\"\n            id=\"inputPassword\"\n            placeholder=\"{{ 'Password' | translate }}\"\n            fieldSize=\"large\"\n            tabindex=\"2\"\n            nbInput\n            fullWidth>\n      <div class=\"input-icon\">\n        <nb-icon [options]=\"{ animation: { type: 'zoom' } }\" class=\"input-icon-hover\" icon=\"{{icon}}\" (click)=\"onShowPassword()\"></nb-icon>\n      </div>\n    </div>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"formGroup.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"formGroup.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n<!--\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  {{ 'message.login-footer-social' | translate}}:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Register\">\n  {{ 'message.login-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/register\">{{ 'Register' | translate}}</a>\n</section>\n-->\n<section class=\"another-action\" aria-label=\"Terms and Conditions\">\n  <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\">{{ 'message.terms-conditions' | translate}}</span>\n</section>\n", styles: [".nb-theme-default :host nb-icon{color:#8f9bb3}.nb-theme-default :host .input-icon{position:absolute;right:0;padding:.9rem}.nb-theme-default :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-default :host .terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.nb-theme-default :host .terms-conditions:hover{color:#598bff}.nb-theme-dark :host nb-icon{color:#8f9bb3}.nb-theme-dark :host .input-icon{position:absolute;right:0;padding:.9rem}.nb-theme-dark :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-dark :host .terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.nb-theme-dark :host .terms-conditions:hover{color:#598bff}.nb-theme-cosmic :host nb-icon{color:#8f9bb3}.nb-theme-cosmic :host .input-icon{position:absolute;right:0;padding:.9rem}.nb-theme-cosmic :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-cosmic :host .terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.nb-theme-cosmic :host .terms-conditions:hover{color:#598bff}.nb-theme-corporate :host nb-icon{color:#8f9bb3}.nb-theme-corporate :host .input-icon{position:absolute;right:0;padding:.9rem}.nb-theme-corporate :host .input-icon-hover:hover{color:#598bff;cursor:pointer}.nb-theme-corporate :host .terms-conditions{color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.nb-theme-corporate :host .terms-conditions:hover{color:#598bff}\n"], components: [{ type: i2.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LoginPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-login-page',
                    styleUrls: ['login-page.component.scss'],
                    templateUrl: 'login-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.NbDialogService }, { type: i3.TranslateService }, { type: AuthTokenService }, { type: AuthForceService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: i1.ActivatedRoute }]; } });

class LogoutComponent {
    constructor(authTokenService) {
        this.authTokenService = authTokenService;
        this.authTokenService.logout();
    }
}
LogoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LogoutComponent, deps: [{ token: AuthTokenService }], target: i0.ɵɵFactoryTarget.Component });
LogoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: LogoutComponent, selector: "do-logout", ngImport: i0, template: "<p class=\"sub-title\">{{ 'message.logout' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">", styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:transparent!important}\n"], directives: [{ type: i2.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: LogoutComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-logout',
                    styleUrls: ['logout.component.scss'],
                    templateUrl: 'logout.component.html',
                }]
        }], ctorParameters: function () { return [{ type: AuthTokenService }]; } });

class ForceLoginPageComponent {
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
ForceLoginPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ForceLoginPageComponent, deps: [{ token: i1.Router }, { token: AuthTokenService }, { token: AuthForceService }, { token: i2$1.DoToastrService }], target: i0.ɵɵFactoryTarget.Component });
ForceLoginPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ForceLoginPageComponent, selector: "do-force-login-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Login Warning' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.force' | translate }}</p>\n\n<div class=\"form-control-group\">\n  <button fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"buttonForceLogin\"\n          [disabled]=\"buttonForceLogin\"\n          (click)=\"forcelogin()\">\n    {{ 'Force Login' | translate }}\n  </button>\n</div>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p>\n    {{ 'subtitle.force-footer' | translate }} <a class=\"text-link\" routerLink=\"/auth/login\">{{ 'Click here' | translate }}</a>\n  </p>\n  <!--\n  <p><a routerLink=\"/auth/register\" class=\"text-link\">{{ 'Register' | translate}}</a></p>\n  -->\n</section>\n", styles: [""], components: [{ type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ForceLoginPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-force-login-page',
                    styleUrls: ['./force-login-page.component.scss'],
                    templateUrl: 'force-login-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: AuthTokenService }, { type: AuthForceService }, { type: i2$1.DoToastrService }]; } });

class RequestForgotPageComponent {
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
RequestForgotPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RequestForgotPageComponent, deps: [{ token: i1.Router }, { token: i2$1.DoToastrService }, { token: i3.TranslateService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
RequestForgotPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RequestForgotPageComponent, selector: "do-request-forgot-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Forgot Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.forgot-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.forgot' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'message.email-forgot-password' | translate }} :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{'error.pattern.email' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Send' | translate }}\n  </button>\n</form>\n\n<section class=\"sign-in-or-up\" aria-label=\"Sign in or sign up\">\n  <p><a class=\"text-link\" routerLink=\"/auth/login\">{{ 'message.forgot-password-link' | translate}}</a></p>\n  <!--\n  <p><a routerLink=\"/auth/register\" class=\"text-link\">{{ 'Register' | translate}}</a></p>\n  -->\n</section>\n", styles: [""], components: [{ type: i2.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RequestForgotPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-request-forgot-page',
                    styleUrls: ['request-forgot-page.component.scss'],
                    templateUrl: 'request-forgot-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2$1.DoToastrService }, { type: i3.TranslateService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }]; } });

class ForgotPageComponent {
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
                this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator$2(this.form)]);
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
ForgotPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ForgotPageComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2$1.DoToastrService }, { token: i3.TranslateService }, { token: i4.EncryptionService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
ForgotPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ForgotPageComponent, selector: "do-forgot-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Reset Password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.reset-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.reset-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"forgotPassword()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'New Password' | translate }}* :</label>\n    <input [formControlName]=\"'newPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorNewPassword,\n            'status-success': hasSuccessNewPassword\n          }\"\n          name=\"newPassword\"\n          type=\"password\"\n          id=\"inputNewPassword\"\n          placeholder=\"{{ 'New Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorNewPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgNewPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Reset Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.reset-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n", styles: [""], components: [{ type: i2.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ForgotPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-forgot-page',
                    styleUrls: ['forgot-page.component.scss'],
                    templateUrl: 'forgot-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2$1.DoToastrService }, { type: i3.TranslateService }, { type: i4.EncryptionService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }]; } });
function confirmPasswordValidator$2(form) {
    return (control) => {
        if (form.controls) {
            if (form.controls['newPassword'].value !== form.controls['confirmPassword'].value) {
                return { equal: true };
            }
        }
        return null;
    };
}

class RegisterPageComponent {
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
                this.form.controls['confirmPassword'].setValidators([confirmPasswordValidator$1(this.form)]);
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
RegisterPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterPageComponent, deps: [{ token: i1.Router }, { token: i4.EncryptionService }, { token: i2$1.DoToastrService }, { token: i2.NbDialogService }, { token: i3.TranslateService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
RegisterPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: RegisterPageComponent, selector: "do-register-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'Register' | translate }}</h1>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.register' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"register()\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">{{ 'Full name' | translate }}* :</label>\n    <input [formControlName]=\"'fullname'\"\n          [required]=\"true\"\n          minlength=\"4\"\n          maxlength=\"50\"\n          [pattern]=\"patternFullname\"\n          [ngClass]=\"{\n            'status-danger': hasErrorFullname,\n            'status-success': hasSuccessFullname\n          }\"\n          name=\"fullname\"\n          id=\"inputFullname\"\n          placeholder=\"{{ 'Full name' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"1\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorFullname\">\n      <span class=\"caption status-danger\">{{errorMsgFullname | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-username\">{{ 'Username' | translate }}* :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"20\"\n          [pattern]=\"patternUsername\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          (keydown)=\"onKeyDownUsername($event)\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"2\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{errorMsgUsername | translate:paramMsgUsername}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">{{ 'Email' | translate }}* :</label>\n    <input [formControlName]=\"'email'\"\n          [required]=\"true\"\n          minlength=\"5\"\n          maxlength=\"50\"\n          [pattern]=\"patternEmail\"\n          [ngClass]=\"{\n            'status-danger': hasErrorEmail,\n            'status-success': hasSuccessEmail\n          }\"\n          name=\"email\"\n          id=\"inputEmail\"\n          (keydown)=\"onKeyDownEmail($event)\"\n          placeholder=\"{{ 'Email' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"3\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorEmail\">\n      <span class=\"caption status-danger\">{{errorMsgEmail | translate:paramMsgEmail}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\">\n    <div class=\"terms-row row\">\n      <nb-checkbox\n        name=\"terms\"\n        [formControlName]=\"'terms'\"\n        [required]=\"true\"\n        (change)=\"onCheckedChange()\">\n        {{ 'message.terms-conditions-label' | translate}}\n      </nb-checkbox>\n      <span class=\"terms-conditions\" (click)=\"onClickTermsConditions()\" tabindex=\"-1\"><strong>{{ 'message.terms-conditions' | translate}}</strong></span>\n    </div>\n  </div>\n\n  <div class=\"form-control-group\" style=\"transform:scale(0.7);transform-origin:0;\">\n    <re-captcha\n      [formControlName]=\"'recaptcha'\"\n      required>\n    </re-captcha>\n  </div>\n\n  <button [disabled]=\"!form.valid || buttonRegister\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"!form.valid || buttonRegister\">\n    {{ 'Register' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.register-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n", styles: [".terms-row{margin-left:0}.terms-conditions{padding:.1rem 0 0 .25rem;color:#36f;text-decoration:underline;font-size:inherit;font-style:inherit;font-weight:inherit;line-height:inherit;cursor:pointer}.terms-conditions:hover{color:#598bff}\n"], components: [{ type: i2.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["status", "checked", "disabled", "indeterminate"], outputs: ["checkedChange"] }, { type: i6$1.RecaptchaComponent, selector: "re-captcha", inputs: ["id", "errorMode", "siteKey", "theme", "type", "size", "badge", "tabIndex"], outputs: ["resolved", "error"], exportAs: ["reCaptcha"] }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6$1.RecaptchaValueAccessorDirective, selector: "re-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]" }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: RegisterPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-register-page',
                    styleUrls: ['register-page.component.scss'],
                    templateUrl: 'register-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i4.EncryptionService }, { type: i2$1.DoToastrService }, { type: i2.NbDialogService }, { type: i3.TranslateService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }]; } });
function confirmPasswordValidator$1(form) {
    return (control) => {
        if (form.controls) {
            if (form.controls['password'].value !== form.controls['confirmPassword'].value) {
                return { equal: true };
            }
        }
        return null;
    };
}
function userValidator(oauthResource, httpBaseService, apiPath) {
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

class ActivateAccountPageComponent {
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
ActivateAccountPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ActivateAccountPageComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: i2$1.DoToastrService }, { token: i3.TranslateService }, { token: i4.EncryptionService }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }], target: i0.ɵɵFactoryTarget.Component });
ActivateAccountPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: ActivateAccountPageComponent, selector: "do-activate-account-page", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">{{ 'header.set-password' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.set-password' | translate }}</p>\n\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.set-password' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"activateAccount()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-newpassword\">{{ 'Password' | translate }}* :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [pattern]=\"patternPassword\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"4\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-confirmpassword\">{{ 'Confirm Password' | translate }}* :</label>\n    <input [formControlName]=\"'confirmPassword'\"\n          [required]=\"true\"\n          minlength=\"8\"\n          maxlength=\"50\"\n          [ngClass]=\"{\n            'status-danger': hasErrorConfirmPassword,\n            'status-success': hasSuccessConfirmPassword\n          }\"\n          name=\"confirmPassword\"\n          type=\"password\"\n          id=\"inputConfirmPassword\"\n          placeholder=\"{{ 'Confirm Password' | translate }}\"\n          fieldSize=\"large\"\n          tabindex=\"5\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorConfirmPassword\">\n      <span class=\"caption status-danger\">{{ errorMsgConfirmPassword | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonForgotPassword\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonForgotPassword\">\n    {{ 'Set Password' | translate }}\n  </button>\n</form>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  {{ 'message.set-password-footer' | translate}} <a class=\"text-link\" routerLink=\"/auth/login\" tabindex=\"-1\">{{ 'Login' | translate}}</a>\n</section>\n", styles: [""], components: [{ type: i2.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i7.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i7.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i7.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i7.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i7.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i7.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i7.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i7.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: ActivateAccountPageComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-activate-account-page',
                    styleUrls: ['activate-account-page.component.scss'],
                    templateUrl: 'activate-account-page.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2$1.DoToastrService }, { type: i3.TranslateService }, { type: i4.EncryptionService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }]; } });
function confirmPasswordValidator(form) {
    return (control) => {
        if (form.controls) {
            if (form.controls['password'].value !== form.controls['confirmPassword'].value) {
                return { equal: true };
            }
        }
        return null;
    };
}

class OAuth2CallbackComponent {
    constructor(router, route, httpBaseService, oauthResource, apiPath, authIndexedDB, profileIndexedDB, settingsIndexedDB, idle) {
        this.router = router;
        this.httpBaseService = httpBaseService;
        this.oauthResource = oauthResource;
        this.apiPath = apiPath;
        this.authIndexedDB = authIndexedDB;
        this.profileIndexedDB = profileIndexedDB;
        this.settingsIndexedDB = settingsIndexedDB;
        this.idle = idle;
        this.destroy$ = new Subject();
        if (route.snapshot.queryParams['access_token']) {
            this.extractToken(route.snapshot.queryParams['access_token']);
        }
        else if (route.snapshot.queryParams['error']) {
            this.router.navigate(['/auth'], { queryParams: { error: route.snapshot.queryParams['error'] } });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
    extractToken(accessToken) {
        return this.httpBaseService.
            HTTP_BASE(this.apiPath['auth']['extract-token'], this.getAuthBody(accessToken).toString(), this.getAuthHeader())
            .pipe(takeUntil(this.destroy$))
            .toPromise()
            .then((response) => {
            this.idle.setIdle(+response['expires_in']);
            this.idle.watch();
            /* console.log('[DONGKAP] Session Idle Start'); */
            /* console.log('[DONGKAP] Session Timeout in ' + response['expires_in'] + ' seconds'); */
            this.authIndexedDB.loginStorage(response);
            this.profileIndexedDB.loginStorage(response);
            this.settingsIndexedDB.loginStorage(response);
            this.router.navigate(['/app/home']);
        })
            .catch((error) => {
            this.router.navigate(['/auth']);
        });
    }
    getAuthBody(accessToken) {
        const body = new URLSearchParams();
        body.append('access_token', accessToken);
        return body;
    }
    getAuthHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' +
                btoa(this.oauthResource['client_id'] + ':' + this.oauthResource['client_secret']),
            Accept: 'application/json',
        });
    }
}
OAuth2CallbackComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OAuth2CallbackComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }, { token: AuthIndexedDBService }, { token: ProfileIndexedDBService }, { token: SettingsIndexedDBService }, { token: i5.Idle }], target: i0.ɵɵFactoryTarget.Component });
OAuth2CallbackComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: OAuth2CallbackComponent, selector: "do-oauth2-callback", ngImport: i0, template: "<p class=\"sub-title\">{{ 'message.callback' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">", styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:transparent!important}\n"], directives: [{ type: i2.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OAuth2CallbackComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-oauth2-callback',
                    styleUrls: ['oauth2-callback.component.scss'],
                    templateUrl: 'oauth2-callback.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: AuthIndexedDBService }, { type: ProfileIndexedDBService }, { type: SettingsIndexedDBService }, { type: i5.Idle }]; } });

const routes$1 = [{
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'login',
                component: LoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'force',
                component: ForceLoginPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'register',
                component: RegisterPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'forgot-password',
                component: RequestForgotPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'forgot-password/:id/:code',
                component: ForgotPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'activate/:id/:code',
                component: ActivateAccountPageComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'callback',
                component: OAuth2CallbackComponent,
                canActivate: [UnauthorizeGuardService],
            },
            {
                path: 'logout',
                component: LogoutComponent,
                canActivate: [AuthGuardService],
            },
        ],
    }];
class DoAuthRoutingModule {
}
DoAuthRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DoAuthRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
DoAuthRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthRoutingModule, imports: [[RouterModule.forChild(routes$1)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: DoAuthRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes$1)],
                    exports: [RouterModule],
                }]
        }] });

class AuthGuardChildService {
    constructor(router, authTokenService, translate, enc, storage) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.translate = translate;
        this.enc = enc;
        this.storage = storage;
    }
    canActivateChild(route, state) {
        const result$ = new Subject();
        this.authTokenService.isLogin().then((value) => {
            result$.next(value);
            if (route.data) {
                if (route.data['title']) {
                    this.translate.get(route.data['title']).subscribe(trans => {
                        route.data['title'] = trans;
                    });
                }
                Promise.all([
                    this.storage.getEnc('menus'),
                    this.storage.getEnc('extras'),
                ]).then((strg) => {
                    if (!(strg[0].includes(route.data['code']) || strg[1].includes(route.data['code']))) {
                        this.router.navigate(['/app/home']);
                    }
                    return result$.asObservable();
                });
            }
            if (!value) {
                this.router.navigate(['/auth']);
            }
        });
        return result$.asObservable();
    }
}
AuthGuardChildService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardChildService, deps: [{ token: i1.Router }, { token: AuthTokenService }, { token: i3.TranslateService }, { token: i4.EncryptionService }, { token: AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuardChildService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardChildService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardChildService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: AuthTokenService }, { type: i3.TranslateService }, { type: i4.EncryptionService }, { type: AuthIndexedDBService }]; } });

class AuthLanguageService {
    constructor(locale, settingsIndexedDB) {
        this.locale = locale;
        this.settingsIndexedDB = settingsIndexedDB;
    }
    getLocale(req) {
        return from(this.settingsIndexedDB.get('locale')).pipe(take(1), switchMap((value) => {
            let httpHeaders = req.headers ? req.headers : new HttpHeaders();
            const localeCode = value ?
                (value.match(new RegExp(Pattern.LOCALE, 'g')) ?
                    value :
                    this.locale) : this.locale;
            httpHeaders = httpHeaders.append('Accept-Language', localeCode);
            return of(req.clone({ headers: httpHeaders }));
        }));
    }
}
AuthLanguageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthLanguageService, deps: [{ token: LOCALE_ID }, { token: SettingsIndexedDBService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthLanguageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthLanguageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthLanguageService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: SettingsIndexedDBService }]; } });

class AuthSignatureService {
    constructor(translate, enc, oauthResource, authStorage) {
        this.translate = translate;
        this.enc = enc;
        this.oauthResource = oauthResource;
        this.authStorage = authStorage;
    }
    signHeaders(req) {
        return combineLatest([
            this.key(),
            this.signature(this.getPath(req.url)),
        ]).pipe(take(1), switchMap((value) => {
            if (signatureHeader.signature) {
                let httpHeaders = req.headers ? req.headers : new HttpHeaders();
                httpHeaders.keys().forEach((key) => {
                    if (key === signatureHeader.key) {
                        httpHeaders = httpHeaders.delete(signatureHeader.key);
                    }
                    if (key === signatureHeader.timestamp) {
                        httpHeaders = httpHeaders.delete(signatureHeader.timestamp);
                    }
                    if (key === signatureHeader.signature) {
                        httpHeaders = httpHeaders.delete(signatureHeader.signature);
                    }
                });
                httpHeaders = httpHeaders.set(signatureHeader.key, value[0]);
                httpHeaders = httpHeaders.set(signatureHeader.timestamp, this.timeStamp);
                httpHeaders = httpHeaders.set(signatureHeader.signature, value[1]);
                return of(req.clone({ headers: httpHeaders }));
            }
            return of(req);
        }));
    }
    key() {
        return this.authStorage.getOfEnc(oauthInfo.public_key);
    }
    timestamp() {
        this.timeStamp = Math.floor(new Date().getTime() / 1000).toString();
        return this.timeStamp;
    }
    date() {
        return new DatePipe(this.translate.currentLang).transform(new Date(), DateFormat.DATE);
    }
    signature(url) {
        return combineLatest([
            this.key(),
            this.authStorage.getOfEnc(oauthInfo.access_token),
        ]).pipe(take(1), switchMap((value) => {
            const key = value[0] + ':' +
                this.timestamp() + ':' +
                // this.date() + ':' +
                url + ':' +
                value[1];
            return of(this.enc.getHmacSha256(this.oauthResource['private_key'], key));
        }));
    }
    getPath(url) {
        return '/' + url
            .replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(:[0-9]{1,5})?(\/).*?/g, '');
    }
}
AuthSignatureService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthSignatureService, deps: [{ token: i3.TranslateService }, { token: i4.EncryptionService }, { token: OAUTH_INFO }, { token: AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthSignatureService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthSignatureService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthSignatureService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i3.TranslateService }, { type: i4.EncryptionService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: AuthIndexedDBService }]; } });

class AuthUserService extends UserService {
    constructor(profileIndexedDB, apiPath, httpBaseService) {
        super();
        this.profileIndexedDB = profileIndexedDB;
        this.apiPath = apiPath;
        this.httpBaseService = httpBaseService;
        this.loaderUserSubject$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    loadUser() {
        this.profileIndexedDB.get('image').then((checksum) => {
            this.putImageBase64(checksum);
        });
        this.httpBaseService.HTTP_AUTH(this.apiPath['profile']['get-profile'])
            .pipe(takeUntil(this.destroy$))
            .subscribe((response) => {
            Promise.all([
                this.profileIndexedDB.put('name', response['name']),
                this.profileIndexedDB.put('email', response['email']),
                this.profileIndexedDB.put('image', response['image']),
            ]).then();
        });
    }
    updateName(name) {
        this.profileIndexedDB.put('name', name).then(() => {
            this.awaitUser();
        });
        return this.loaderUserSubject$.asObservable();
    }
    updatePhoto(checksum) {
        this.profileIndexedDB.put('image', checksum).then(() => {
            this.putImageBase64(checksum);
        });
        return this.loaderUserSubject$.asObservable();
    }
    get onUserChange() {
        this.awaitUser();
        return this.loaderUserSubject$.asObservable();
    }
    awaitUser() {
        Promise.all([
            this.profileIndexedDB.get('name'),
            this.profileIndexedDB.get('image-base64'),
        ]).then((value) => {
            const user = {
                name: value[0],
                image: value[1],
            };
            this.loaderUserSubject$.next(user);
        });
    }
    putImageBase64(checksum) {
        if (checksum) {
            this.httpBaseService.HTTP_AUTH(this.apiPath['profile']['get-photo-profile'], null, null, null, [checksum], 'arraybuffer')
                .pipe(takeUntil(this.destroy$))
                .subscribe((response) => {
                const imageBlob = new Blob([response], {
                    type: 'image/png',
                });
                const reader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = () => {
                    const imageBase64 = reader.result.toString();
                    this.profileIndexedDB.put('image-base64', imageBase64).then(() => {
                        this.awaitUser();
                    });
                };
            });
        }
    }
}
AuthUserService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthUserService, deps: [{ token: ProfileIndexedDBService }, { token: API }, { token: HTTP_SERVICE }], target: i0.ɵɵFactoryTarget.Injectable });
AuthUserService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthUserService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthUserService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ProfileIndexedDBService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [API]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [HTTP_SERVICE]
                }] }]; } });

class HttpErrorHandler {
    constructor(translate, authToken, authStorage, authSignature) {
        this.translate = translate;
        this.authToken = authToken;
        this.authStorage = authStorage;
        this.authSignature = authSignature;
        this.isRefreshingToken = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    errorHandler(error, req, next) {
        let err = new HttpErrorResponse({
            error: error.error,
            headers: error.headers,
            status: error.status,
            statusText: error.statusText,
            url: error.url,
        });
        if (error.error instanceof ArrayBuffer) {
            const decodedString = String.fromCharCode.apply(null, new Uint8Array(error.error));
            err = new HttpErrorResponse({
                error: JSON.parse(decodedString),
                headers: error.headers,
                status: error.status,
                statusText: error.statusText,
                url: error.url,
            });
        }
        switch (err.status) {
            case 200:
            case 201:
            case 304:
                return EMPTY;
            case 400:
                return this.error400(err);
            case 401:
                return this.error401(err, req, next);
            case 404:
            case 403:
            case 500:
            case 504:
            case 0:
                return throwError(this.errorDefault(err));
            default:
                break;
        }
        return throwError(err);
    }
    errorDefault(error) {
        let err = {
            respStatusCode: error.status,
            respStatusMessage: {},
        };
        err.respStatusMessage[err.respStatusCode] = error.statusText;
        let msgKey = 'error.' + err.respStatusCode;
        if (error.error) {
            if (error.error['respStatusCode']) {
                err = error.error;
                msgKey = err.respStatusMessage[err.respStatusCode];
            }
        }
        this.translate.get(msgKey).subscribe((result) => {
            err.respStatusMessage[err.respStatusCode] = result;
        });
        return err;
    }
    error400(error) {
        if (error.error['respStatusCode']) {
            if (error.error['respStatusCode'] === 'invalid_grant') {
                switch (error.error['respStatusMessage']['invalid_grant']) {
                    case 'Bad credentials':
                    case 'User account is locked':
                    case 'User is disabled':
                    case 'User account has expired':
                    case 'User credentials have expired':
                    case 'LDAP Server Error':
                    case 'Invalid credentials.':
                        return throwError(this.errorDefault(error));
                    default:
                        this.authToken.logout();
                        return throwError(this.errorDefault(error));
                }
            }
            else {
                return throwError(this.errorDefault(error));
            }
        }
        return throwError(error);
    }
    error401(error, request, next) {
        if (error.error) {
            if (error.error['respStatusCode'] === 'invalid_token') {
                if (!this.isRefreshingToken) {
                    this.isRefreshingToken = true;
                    this.refreshTokenSubject.next(null);
                    return this.authToken.refresh().pipe(switchMap((response) => {
                        this.isRefreshingToken = false;
                        this.refreshTokenSubject.next(response);
                        return this.authToken.oauthHeaders(request).pipe(switchMap((req) => {
                            request = req;
                            return this.authSignature.signHeaders(request).pipe(switchMap((valReq) => {
                                return next.handle(valReq);
                            }));
                        }));
                    }), catchError((err) => {
                        return this.errorHandler(err, request, next);
                    }));
                }
                else {
                    const msg = error.error['respStatusMessage']['invalid_token'];
                    if (msg.includes('expired')) {
                        this.authToken.logout();
                    }
                    else {
                        return this.refreshTokenSubject.pipe(filter(response => response != null), take(1), switchMap(() => {
                            return this.authToken.oauthHeaders(request).pipe(switchMap((req) => {
                                request = req;
                                return this.authSignature.signHeaders(request).pipe(switchMap((valReq) => {
                                    return next.handle(valReq);
                                }));
                            }));
                        }));
                    }
                }
            }
        }
        return throwError(error);
    }
}

class HttpInterceptorErrorService extends HttpErrorHandler {
    constructor(translate, authToken, authStorage, authSignature) {
        super(translate, authToken, authStorage, authSignature);
        this.translate = translate;
        this.authToken = authToken;
        this.authStorage = authStorage;
        this.authSignature = authSignature;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    intercept(req, next) {
        return next.handle(req).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
                return this.errorHandler(error, req, next);
            }
            else {
                return throwError(error);
            }
        })).pipe(takeUntil(this.destroy$));
    }
}
HttpInterceptorErrorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorErrorService, deps: [{ token: i3.TranslateService }, { token: AuthTokenService }, { token: AuthIndexedDBService }, { token: AuthSignatureService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpInterceptorErrorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorErrorService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorErrorService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i3.TranslateService }, { type: AuthTokenService }, { type: AuthIndexedDBService }, { type: AuthSignatureService }]; } });

class HttpInterceptorLangService {
    constructor(authLanguage) {
        this.authLanguage = authLanguage;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authLanguage.getLocale(req).pipe(switchMap((value) => {
                    return next.handle(value);
                }));
            }
        }
        return next.handle(req).pipe(takeUntil(this.destroy$));
    }
}
HttpInterceptorLangService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorLangService, deps: [{ token: AuthLanguageService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpInterceptorLangService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorLangService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorLangService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: AuthLanguageService }]; } });

class HttpInterceptorSignatureService {
    constructor(authSignature, oauthResource) {
        this.authSignature = authSignature;
        this.oauthResource = oauthResource;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark) && this.oauthResource.signature) {
                return this.authSignature.signHeaders(req).pipe(switchMap((value) => {
                    return next.handle(value);
                }));
            }
        }
        return next.handle(req).pipe(takeUntil(this.destroy$));
    }
}
HttpInterceptorSignatureService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorSignatureService, deps: [{ token: AuthSignatureService }, { token: OAUTH_INFO }], target: i0.ɵɵFactoryTarget.Injectable });
HttpInterceptorSignatureService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorSignatureService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorSignatureService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: AuthSignatureService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }]; } });

class HttpInterceptorTokenService {
    constructor(authToken) {
        this.authToken = authToken;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
    intercept(req, next) {
        if (req.headers) {
            if (req.headers.has(signatureHeader.mark)) {
                return this.authToken.oauthHeaders(req).pipe(switchMap((reqAuth) => {
                    return next.handle(reqAuth);
                }));
            }
        }
        return next.handle(req).pipe(takeUntil(this.destroy$));
    }
}
HttpInterceptorTokenService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorTokenService, deps: [{ token: AuthTokenService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpInterceptorTokenService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorTokenService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorTokenService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: AuthTokenService }]; } });

const AUTH_PROVIDERS = [
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
const AUTH_COMPONENTS = [
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
class DoAuthModule {
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
        NbSpinnerModule, i2.NbDialogModule, DoThemeModule, i2$1.DoToastrModule, DoLayoutAuthModule,
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

class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    goToHome() {
        this.router.navigate(['/app/home']);
        return;
    }
}
PageNotFoundComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PageNotFoundComponent, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
PageNotFoundComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: PageNotFoundComponent, selector: "do-404", ngImport: i0, template: "<div class=\"flex-centered\">\n  <h2 class=\"title\">404</h2>\n  <h2 class=\"title\">Page Not Found</h2>\n  <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n  <button nbButton fullWidth (click)=\"goToHome()\" type=\"button\" class=\"home-button\">\n    Take me home\n  </button>\n</div>\n", styles: [".flex-centered{margin:auto}nb-card-body{display:flex}.title{text-align:center}.sub-title{text-align:center;display:block;margin-bottom:3rem}.home-button{margin-bottom:2rem}\n"], components: [{ type: i2.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PageNotFoundComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'do-404',
                    styleUrls: ['./404.component.scss'],
                    templateUrl: './404.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });

const routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: '404',
                component: PageNotFoundComponent,
            },
        ],
    },
];
class MiscellaneousRoutingModule {
}
MiscellaneousRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MiscellaneousRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
MiscellaneousRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule],
                }]
        }] });

class MiscellaneousModule {
}
MiscellaneousModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MiscellaneousModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousModule, declarations: [PageNotFoundComponent], imports: [NbButtonModule,
        NbIconModule,
        CommonModule,
        DoThemeModule,
        DoLayoutAuthModule,
        MiscellaneousRoutingModule] });
MiscellaneousModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousModule, imports: [[
            NbButtonModule,
            NbIconModule,
            CommonModule,
            DoThemeModule,
            DoLayoutAuthModule,
            MiscellaneousRoutingModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MiscellaneousModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        NbButtonModule,
                        NbIconModule,
                        CommonModule,
                        DoThemeModule,
                        DoLayoutAuthModule,
                        MiscellaneousRoutingModule,
                    ],
                    declarations: [
                        PageNotFoundComponent,
                    ],
                }]
        }] });

/*
 * Public API Surface of do-auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AUTH_COMPONENTS, AUTH_PROVIDERS, ActivateAccountPageComponent, AuthGuardChildService, AuthGuardService, AuthIndexedDBService, AuthSignatureService, AuthTokenService, AuthUserService, DoAuthModule, ForceLoginPageComponent, ForgotPageComponent, LoginPageComponent, LogoutComponent, MiscellaneousModule, OAuth2CallbackComponent, PageNotFoundComponent, ProfileIndexedDBService, RegisterPageComponent, RequestForgotPageComponent, SettingsIndexedDBService, TermsConditionsComponent, UnauthorizeGuardService };
//# sourceMappingURL=dongkap-do-auth.js.map
