import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth-token.service";
import * as i3 from "@ngx-translate/core";
import * as i4 from "@dongkap/do-core";
import * as i5 from "./storage/auth-indexeddb.service";
export class AuthGuardChildService {
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
AuthGuardChildService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardChildService, deps: [{ token: i1.Router }, { token: i2.AuthTokenService }, { token: i3.TranslateService }, { token: i4.EncryptionService }, { token: i5.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuardChildService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardChildService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthGuardChildService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.AuthTokenService }, { type: i3.TranslateService }, { type: i4.EncryptionService }, { type: i5.AuthIndexedDBService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC1jaGlsZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tYXV0aC9zcmMvbGliL3NlcnZpY2VzL2F1dGgtZ3VhcmQtY2hpbGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFPM0MsTUFBTSxPQUFPLHFCQUFxQjtJQUM5QixZQUNZLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsU0FBMkIsRUFDM0IsR0FBc0IsRUFDdEIsT0FBNkI7UUFKN0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7SUFBRyxDQUFDO0lBRTdDLGdCQUFnQixDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDdEUsTUFBTSxPQUFPLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNaLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDdEQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2lCQUNOO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7aUJBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFjLEVBQUUsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDakYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzttSEFqQ1EscUJBQXFCO3VIQUFyQixxQkFBcUI7NEZBQXJCLHFCQUFxQjtrQkFEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGVDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBFbmNyeXB0aW9uU2VydmljZSB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkQ2hpbGRTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGVDaGlsZCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aFRva2VuU2VydmljZTogQXV0aFRva2VuU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlOiBBdXRoSW5kZXhlZERCU2VydmljZSkge31cblxuICAgIGNhbkFjdGl2YXRlQ2hpbGQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgICAgICB0aGlzLmF1dGhUb2tlblNlcnZpY2UuaXNMb2dpbigpLnRoZW4oKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQkLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJvdXRlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAocm91dGUuZGF0YVsndGl0bGUnXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5nZXQocm91dGUuZGF0YVsndGl0bGUnXSkuc3Vic2NyaWJlKHRyYW5zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLmRhdGFbJ3RpdGxlJ10gPSB0cmFucztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldEVuYygnbWVudXMnKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldEVuYygnZXh0cmFzJyksXG4gICAgICAgICAgICAgICAgXSkudGhlbigoc3RyZzogc3RyaW5nW10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoc3RyZ1swXS5pbmNsdWRlcyhyb3V0ZS5kYXRhWydjb2RlJ10pIHx8IHN0cmdbMV0uaW5jbHVkZXMocm91dGUuZGF0YVsnY29kZSddKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FwcC9ob21lJ10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0JC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbn1cbiJdfQ==