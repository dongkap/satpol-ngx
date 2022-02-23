import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { signatureHeader } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "./auth-lang.service";
export class HttpInterceptorLangService {
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
HttpInterceptorLangService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorLangService, deps: [{ token: i1.AuthLanguageService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpInterceptorLangService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorLangService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorLangService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AuthLanguageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1sYW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1hdXRoL3NyYy9saWIvc2VydmljZXMvaHR0cC1pbnRlcmNlcHRvci1sYW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFJbkQsTUFBTSxPQUFPLDBCQUEwQjtJQUVuQyxZQUFvQixZQUFpQztRQUFqQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFFN0MsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO0lBRkksQ0FBQztJQUl6RCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNyRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBdUIsRUFBRSxFQUFFO29CQUMvRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDUDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7d0hBckJRLDBCQUEwQjs0SEFBMUIsMEJBQTBCOzRGQUExQiwwQkFBMEI7a0JBRHRDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHNpZ25hdHVyZUhlYWRlciB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4vYXV0aC1sYW5nLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEludGVyY2VwdG9yTGFuZ1NlcnZpY2UgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3IsIE9uRGVzdHJveSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhMYW5ndWFnZTogQXV0aExhbmd1YWdlU2VydmljZSkge31cblxuICAgIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgaWYgKHJlcS5oZWFkZXJzKSB7XG4gICAgICAgICAgICBpZiAocmVxLmhlYWRlcnMuaGFzKHNpZ25hdHVyZUhlYWRlci5tYXJrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhMYW5ndWFnZS5nZXRMb2NhbGUocmVxKS5waXBlKHN3aXRjaE1hcCgodmFsdWU6IEh0dHBSZXF1ZXN0PGFueT4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgIH1cblxufVxuIl19