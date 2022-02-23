import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { signatureHeader } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "./auth-token.service";
export class HttpInterceptorTokenService {
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
HttpInterceptorTokenService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorTokenService, deps: [{ token: i1.AuthTokenService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpInterceptorTokenService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorTokenService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorTokenService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AuthTokenService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci10b2tlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vQGRvbmdrYXAvZG8tYXV0aC9zcmMvbGliL3NlcnZpY2VzL2h0dHAtaW50ZXJjZXB0b3ItdG9rZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUluRCxNQUFNLE9BQU8sMkJBQTJCO0lBRXBDLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRXZDLGFBQVEsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUZGLENBQUM7SUFJbkQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sU0FBUyxDQUFDLEdBQXFCLEVBQUUsSUFBaUI7UUFDckQsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ2IsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQVksRUFBRSxFQUFFO29CQUNwRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDUDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7eUhBckJRLDJCQUEyQjs2SEFBM0IsMkJBQTJCOzRGQUEzQiwyQkFBMkI7a0JBRHZDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwSGFuZGxlciwgSHR0cEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHNpZ25hdHVyZUhlYWRlciB9IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vYXV0aC10b2tlbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBJbnRlcmNlcHRvclRva2VuU2VydmljZSBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciwgT25EZXN0cm95IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFRva2VuOiBBdXRoVG9rZW5TZXJ2aWNlKSB7fVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgICB0aGlzLmRlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgICAgICBpZiAocmVxLmhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmIChyZXEuaGVhZGVycy5oYXMoc2lnbmF0dXJlSGVhZGVyLm1hcmspKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFRva2VuLm9hdXRoSGVhZGVycyhyZXEpLnBpcGUoc3dpdGNoTWFwKChyZXFBdXRoOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcUF1dGgpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSk7XG4gICAgfVxuXG59XG4iXX0=