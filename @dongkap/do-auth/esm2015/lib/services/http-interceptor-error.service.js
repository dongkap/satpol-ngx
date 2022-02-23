import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "./auth-token.service";
import * as i3 from "./storage/auth-indexeddb.service";
import * as i4 from "./auth-signature.service";
export class HttpInterceptorErrorService extends HttpErrorHandler {
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
HttpInterceptorErrorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorErrorService, deps: [{ token: i1.TranslateService }, { token: i2.AuthTokenService }, { token: i3.AuthIndexedDBService }, { token: i4.AuthSignatureService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpInterceptorErrorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorErrorService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorErrorService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: i2.AuthTokenService }, { type: i3.AuthIndexedDBService }, { type: i4.AuthSignatureService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1lcnJvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tYXV0aC9zcmMvbGliL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItZXJyb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXdELGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBTXhELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxnQkFBZ0I7SUFFN0QsWUFDVyxTQUEyQixFQUMzQixTQUEyQixFQUMzQixXQUFpQyxFQUNqQyxhQUFtQztRQUMxQyxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFKakQsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUl0QyxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7SUFGcEQsQ0FBQztJQUlELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFxQixFQUFFLElBQWlCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3hCLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDSCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1QjtRQUNULENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOzt5SEEzQlEsMkJBQTJCOzZIQUEzQiwyQkFBMkI7NEZBQTNCLDJCQUEyQjtrQkFEdkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyLCBIdHRwRXZlbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vYXV0aC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTaWduYXR1cmVTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXNpZ25hdHVyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlL2F1dGgtaW5kZXhlZGRiLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEludGVyY2VwdG9yRXJyb3JTZXJ2aWNlIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYXV0aFRva2VuOiBBdXRoVG9rZW5TZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYXV0aFN0b3JhZ2U6IEF1dGhJbmRleGVkREJTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgYXV0aFNpZ25hdHVyZTogQXV0aFNpZ25hdHVyZVNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIodHJhbnNsYXRlLCBhdXRoVG9rZW4sIGF1dGhTdG9yYWdlLCBhdXRoU2lnbmF0dXJlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9ySGFuZGxlcihlcnJvciwgcmVxLCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KSkucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgIH1cblxufVxuIl19