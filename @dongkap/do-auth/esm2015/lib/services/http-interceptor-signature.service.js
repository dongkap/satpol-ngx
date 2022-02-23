import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { OAUTH_INFO, signatureHeader } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "./auth-signature.service";
export class HttpInterceptorSignatureService {
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
HttpInterceptorSignatureService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorSignatureService, deps: [{ token: i1.AuthSignatureService }, { token: OAUTH_INFO }], target: i0.ɵɵFactoryTarget.Injectable });
HttpInterceptorSignatureService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorSignatureService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: HttpInterceptorSignatureService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AuthSignatureService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1pbnRlcmNlcHRvci1zaWduYXR1cmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9zZXJ2aWNlcy9odHRwLWludGVyY2VwdG9yLXNpZ25hdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUF5QixlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBSXRGLE1BQU0sT0FBTywrQkFBK0I7SUFFeEMsWUFDWSxhQUFtQyxFQUNmLGFBQW9DO1FBRHhELGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUU1RCxhQUFRLEdBQWlCLElBQUksT0FBTyxFQUFPLENBQUM7SUFGbUIsQ0FBQztJQUl4RSxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxTQUFTLENBQUMsR0FBcUIsRUFBRSxJQUFpQjtRQUNyRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtnQkFDdkUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBdUIsRUFBRSxFQUFFO29CQUNsRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDUDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7NkhBdkJRLCtCQUErQixzREFJNUIsVUFBVTtpSUFKYiwrQkFBK0I7NEZBQS9CLCtCQUErQjtrQkFEM0MsVUFBVTs7MEJBS0YsTUFBTTsyQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCwgSHR0cEhhbmRsZXIsIEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9BVVRIX0lORk8sIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCwgc2lnbmF0dXJlSGVhZGVyIH0gZnJvbSAnQGRvbmdrYXAvZG8tY29yZSc7XG5pbXBvcnQgeyBBdXRoU2lnbmF0dXJlU2VydmljZSB9IGZyb20gJy4vYXV0aC1zaWduYXR1cmUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwSW50ZXJjZXB0b3JTaWduYXR1cmVTZXJ2aWNlIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yLCBPbkRlc3Ryb3kge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXV0aFNpZ25hdHVyZTogQXV0aFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgIEBJbmplY3QoT0FVVEhfSU5GTykgcHJpdmF0ZSBvYXV0aFJlc291cmNlOiBTZWN1cml0eVJlc291cmNlTW9kZWwpIHt9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIGlmIChyZXEuaGVhZGVycykge1xuICAgICAgICAgICAgaWYgKHJlcS5oZWFkZXJzLmhhcyhzaWduYXR1cmVIZWFkZXIubWFyaykgJiYgdGhpcy5vYXV0aFJlc291cmNlLnNpZ25hdHVyZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTaWduYXR1cmUuc2lnbkhlYWRlcnMocmVxKS5waXBlKHN3aXRjaE1hcCgodmFsdWU6IEh0dHBSZXF1ZXN0PGFueT4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpO1xuICAgIH1cblxufVxuIl19