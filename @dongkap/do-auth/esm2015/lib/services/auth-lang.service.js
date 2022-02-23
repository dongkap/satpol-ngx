import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of, from } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { Pattern } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "./storage/settings-indexeddb.service";
export class AuthLanguageService {
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
AuthLanguageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthLanguageService, deps: [{ token: LOCALE_ID }, { token: i1.SettingsIndexedDBService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthLanguageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthLanguageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthLanguageService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [LOCALE_ID]
                }] }, { type: i1.SettingsIndexedDBService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1sYW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvc2VydmljZXMvYXV0aC1sYW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBSTNDLE1BQU0sT0FBTyxtQkFBbUI7SUFFNUIsWUFDK0IsTUFBYyxFQUNqQyxpQkFBMkM7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNqQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO0lBQUcsQ0FBQztJQUUzRCxTQUFTLENBQUMsR0FBcUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDbEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3pCLElBQUksV0FBVyxHQUFnQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzdFLE1BQU0sVUFBVSxHQUFXLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxDQUNJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzlDLEtBQUssQ0FBQyxDQUFDO29CQUNQLElBQUksQ0FBQyxNQUFNLENBQ2QsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQixXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNoRSxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7aUhBcEJRLG1CQUFtQixrQkFHaEIsU0FBUztxSEFIWixtQkFBbUI7NEZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVTs7MEJBSUYsTUFBTTsyQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBMT0NBTEVfSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQYXR0ZXJuIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBTZXR0aW5nc0luZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Uvc2V0dGluZ3MtaW5kZXhlZGRiLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aExhbmd1YWdlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgc2V0dGluZ3NJbmRleGVkREI6IFNldHRpbmdzSW5kZXhlZERCU2VydmljZSkge31cblxuICAgIGdldExvY2FsZShyZXE6IEh0dHBSZXF1ZXN0PGFueT4pOiBPYnNlcnZhYmxlPEh0dHBSZXF1ZXN0PGFueT4+IHtcbiAgICAgICAgcmV0dXJuIGZyb20odGhpcy5zZXR0aW5nc0luZGV4ZWREQi5nZXQoJ2xvY2FsZScpKS5waXBlKFxuICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgIHN3aXRjaE1hcCgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgbGV0IGh0dHBIZWFkZXJzOiBIdHRwSGVhZGVycyA9IHJlcS5oZWFkZXJzID8gcmVxLmhlYWRlcnMgOiBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZUNvZGU6IHN0cmluZyA9IHZhbHVlID9cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaChuZXcgUmVnRXhwKFBhdHRlcm4uTE9DQUxFLCAnZycpKSA/XG4gICAgICAgICAgICAgICAgdmFsdWUgOlxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgICAgICApIDogdGhpcy5sb2NhbGU7XG4gICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLmFwcGVuZCgnQWNjZXB0LUxhbmd1YWdlJywgbG9jYWxlQ29kZSk7XG4gICAgICAgICAgICByZXR1cm4gb2YocmVxLmNsb25lKHsgaGVhZGVyczogaHR0cEhlYWRlcnMgfSkpO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG59XG4iXX0=