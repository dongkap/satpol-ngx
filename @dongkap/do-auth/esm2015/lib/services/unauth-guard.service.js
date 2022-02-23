import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth-token.service";
export class UnauthorizeGuardService {
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
UnauthorizeGuardService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UnauthorizeGuardService, deps: [{ token: i1.Router }, { token: i2.AuthTokenService }], target: i0.ɵɵFactoryTarget.Injectable });
UnauthorizeGuardService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UnauthorizeGuardService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: UnauthorizeGuardService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.AuthTokenService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hdXRoLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvc2VydmljZXMvdW5hdXRoLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBSTNDLE1BQU0sT0FBTyx1QkFBdUI7SUFDaEMsWUFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFbEYsV0FBVyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDakUsTUFBTSxPQUFPLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xDLENBQUM7O3FIQVpRLHVCQUF1Qjt5SEFBdkIsdUJBQXVCOzRGQUF2Qix1QkFBdUI7a0JBRG5DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhUb2tlblNlcnZpY2UgfSBmcm9tICcuL2F1dGgtdG9rZW4uc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbmF1dGhvcml6ZUd1YXJkU2VydmljZSBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UpIHt9XG5cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gICAgICAgIHRoaXMuYXV0aFRva2VuU2VydmljZS5pc0xvZ2luKCkudGhlbigodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCQubmV4dCghdmFsdWUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCQuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG59XG4iXX0=