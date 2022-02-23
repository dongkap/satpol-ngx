import { Component, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { API, HTTP_SERVICE, OAUTH_INFO } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/storage/auth-indexeddb.service";
import * as i3 from "../../services/storage/profile-indexeddb.service";
import * as i4 from "../../services/storage/settings-indexeddb.service";
import * as i5 from "@ng-idle/core";
import * as i6 from "@nebular/theme";
import * as i7 from "@ngx-translate/core";
export class OAuth2CallbackComponent {
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
OAuth2CallbackComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: OAuth2CallbackComponent, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }, { token: HTTP_SERVICE }, { token: OAUTH_INFO }, { token: API }, { token: i2.AuthIndexedDBService }, { token: i3.ProfileIndexedDBService }, { token: i4.SettingsIndexedDBService }, { token: i5.Idle }], target: i0.ɵɵFactoryTarget.Component });
OAuth2CallbackComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: OAuth2CallbackComponent, selector: "do-oauth2-callback", ngImport: i0, template: "<p class=\"sub-title\">{{ 'message.callback' | translate }}</p>\n<div class=\"spinner-area\" [nbSpinner]=\"true\" nbSpinnerSize=\"small\" nbSpinnerStatus=\"info\">", styles: [".nb-theme-default :host .sub-title{margin:1rem}.nb-theme-default :host .spinner-area{height:22px}.nb-theme-default :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-dark :host .sub-title{margin:1rem}.nb-theme-dark :host .spinner-area{height:22px}.nb-theme-dark :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-cosmic :host .sub-title{margin:1rem}.nb-theme-cosmic :host .spinner-area{height:22px}.nb-theme-cosmic :host ::ng-deep nb-spinner{background:transparent!important}.nb-theme-corporate :host .sub-title{margin:1rem}.nb-theme-corporate :host .spinner-area{height:22px}.nb-theme-corporate :host ::ng-deep nb-spinner{background:transparent!important}\n"], directives: [{ type: i6.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i7.TranslatePipe } });
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
                }] }, { type: i2.AuthIndexedDBService }, { type: i3.ProfileIndexedDBService }, { type: i4.SettingsIndexedDBService }, { type: i5.Idle }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgyLWNhbGxiYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9wYWdlcy9vYXV0aDIvb2F1dGgyLWNhbGxiYWNrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9wYWdlcy9vYXV0aDIvb2F1dGgyLWNhbGxiYWNrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUM7QUFFakUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBZ0MsWUFBWSxFQUFFLFVBQVUsRUFBeUIsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7O0FBVXRILE1BQU0sT0FBTyx1QkFBdUI7SUFJbEMsWUFDVSxNQUFjLEVBQ3RCLEtBQXFCLEVBQ1EsZUFBbUMsRUFDckMsYUFBb0MsRUFDM0MsT0FBaUIsRUFDN0IsYUFBbUMsRUFDbkMsZ0JBQXlDLEVBQ3pDLGlCQUEyQyxFQUMzQyxJQUFVO1FBUlYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVPLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNyQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFDM0MsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBc0I7UUFDbkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUN6QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLFNBQUksR0FBSixJQUFJLENBQU07UUFYVixhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7UUFZcEQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7YUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7U0FDakc7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sWUFBWSxDQUFDLFdBQW1CO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLGVBQWU7WUFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLEVBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ3hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsQ0FBQyxRQUEyQixFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLGtEQUFrRDtZQUNsRCx5RkFBeUY7WUFDekYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU8sV0FBVyxDQUFDLFdBQW1CO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sYUFBYTtRQUNuQixPQUFPLElBQUksV0FBVyxDQUFDO1lBQ25CLGNBQWMsRUFBRSxtQ0FBbUM7WUFDbkQsYUFBYSxFQUFFLFFBQVE7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3JGLE1BQU0sRUFBRSxrQkFBa0I7U0FDN0IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7cUhBOURZLHVCQUF1QixzRUFPeEIsWUFBWSxhQUNaLFVBQVUsYUFDVixHQUFHO3lHQVRGLHVCQUF1QiwwRENoQnBDLHFLQUMwRjs0RkRlN0UsdUJBQXVCO2tCQUxuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO29CQUM3QyxXQUFXLEVBQUUsZ0NBQWdDO2lCQUM5Qzs7MEJBUUksTUFBTTsyQkFBQyxZQUFZOzswQkFDbkIsTUFBTTsyQkFBQyxVQUFVOzswQkFDakIsTUFBTTsyQkFBQyxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWRsZSB9IGZyb20gJ0BuZy1pZGxlL2NvcmUnO1xuaW1wb3J0IHsgQVBJLCBBUElNb2RlbCwgSHR0cEZhY3RvcnlTZXJ2aWNlLCBIVFRQX1NFUlZJQ0UsIE9BVVRIX0lORk8sIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZmlsZUluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yYWdlL3Byb2ZpbGUtaW5kZXhlZGRiLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RvcmFnZS9zZXR0aW5ncy1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RvLW9hdXRoMi1jYWxsYmFjaycsXG4gIHN0eWxlVXJsczogWydvYXV0aDItY2FsbGJhY2suY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdvYXV0aDItY2FsbGJhY2suY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPQXV0aDJDYWxsYmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgQEluamVjdChIVFRQX1NFUlZJQ0UpcHJpdmF0ZSBodHRwQmFzZVNlcnZpY2U6IEh0dHBGYWN0b3J5U2VydmljZSxcbiAgICBASW5qZWN0KE9BVVRIX0lORk8pcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWwsXG4gICAgQEluamVjdChBUEkpcHJpdmF0ZSBhcGlQYXRoOiBBUElNb2RlbCxcbiAgICBwcml2YXRlIGF1dGhJbmRleGVkREI6IEF1dGhJbmRleGVkREJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcHJvZmlsZUluZGV4ZWREQjogUHJvZmlsZUluZGV4ZWREQlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nc0luZGV4ZWREQjogU2V0dGluZ3NJbmRleGVkREJTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWRsZTogSWRsZSkge1xuICAgIGlmIChyb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snYWNjZXNzX3Rva2VuJ10pIHtcbiAgICAgIHRoaXMuZXh0cmFjdFRva2VuKHJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zWydhY2Nlc3NfdG9rZW4nXSk7XG4gICAgfSBlbHNlIGlmIChyb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snZXJyb3InXSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aCddLCB7IHF1ZXJ5UGFyYW1zOiB7IGVycm9yOiByb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snZXJyb3InXSB9fSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdFRva2VuKGFjY2Vzc1Rva2VuOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQmFzZVNlcnZpY2UuXG4gICAgSFRUUF9CQVNFKHRoaXMuYXBpUGF0aFsnYXV0aCddWydleHRyYWN0LXRva2VuJ10sXG4gICAgICAgIHRoaXMuZ2V0QXV0aEJvZHkoYWNjZXNzVG9rZW4pLnRvU3RyaW5nKCksXG4gICAgICAgIHRoaXMuZ2V0QXV0aEhlYWRlcigpKVxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZGxlLnNldElkbGUoK3Jlc3BvbnNlWydleHBpcmVzX2luJ10pO1xuICAgICAgICAgICAgICAgIHRoaXMuaWRsZS53YXRjaCgpO1xuICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKCdbRE9OR0tBUF0gU2Vzc2lvbiBJZGxlIFN0YXJ0Jyk7ICovXG4gICAgICAgICAgICAgICAgLyogY29uc29sZS5sb2coJ1tET05HS0FQXSBTZXNzaW9uIFRpbWVvdXQgaW4gJyArIHJlc3BvbnNlWydleHBpcmVzX2luJ10gKyAnIHNlY29uZHMnKTsgKi9cbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhJbmRleGVkREIubG9naW5TdG9yYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVJbmRleGVkREIubG9naW5TdG9yYWdlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzSW5kZXhlZERCLmxvZ2luU3RvcmFnZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL2hvbWUnXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICAgICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXV0aEJvZHkoYWNjZXNzVG9rZW46IHN0cmluZyk6IFVSTFNlYXJjaFBhcmFtcyB7XG4gICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBib2R5LmFwcGVuZCgnYWNjZXNzX3Rva2VuJywgYWNjZXNzVG9rZW4pO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdXRoSGVhZGVyKCk6IEh0dHBIZWFkZXJzIHtcbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICBBdXRob3JpemF0aW9uOiAnQmFzaWMgJyArXG4gICAgICAgICAgICBidG9hKHRoaXMub2F1dGhSZXNvdXJjZVsnY2xpZW50X2lkJ10gKyAnOicgKyB0aGlzLm9hdXRoUmVzb3VyY2VbJ2NsaWVudF9zZWNyZXQnXSksXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xufVxufVxuIiwiPHAgY2xhc3M9XCJzdWItdGl0bGVcIj57eyAnbWVzc2FnZS5jYWxsYmFjaycgfCB0cmFuc2xhdGUgfX08L3A+XG48ZGl2IGNsYXNzPVwic3Bpbm5lci1hcmVhXCIgW25iU3Bpbm5lcl09XCJ0cnVlXCIgbmJTcGlubmVyU2l6ZT1cInNtYWxsXCIgbmJTcGlubmVyU3RhdHVzPVwiaW5mb1wiPiJdfQ==