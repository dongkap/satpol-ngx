import { Injectable, Inject } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { of, combineLatest } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { DateFormat, oauthInfo, OAUTH_INFO, signatureHeader, } from '@dongkap/do-core';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@dongkap/do-core";
import * as i3 from "./storage/auth-indexeddb.service";
export class AuthSignatureService {
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
AuthSignatureService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthSignatureService, deps: [{ token: i1.TranslateService }, { token: i2.EncryptionService }, { token: OAUTH_INFO }, { token: i3.AuthIndexedDBService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthSignatureService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthSignatureService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AuthSignatureService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: i2.EncryptionService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }, { type: i3.AuthIndexedDBService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zaWduYXR1cmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0Bkb25na2FwL2RvLWF1dGgvc3JjL2xpYi9zZXJ2aWNlcy9hdXRoLXNpZ25hdHVyZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQ0gsVUFBVSxFQUVWLFNBQVMsRUFDVCxVQUFVLEVBRVYsZUFBZSxHQUNsQixNQUFNLGtCQUFrQixDQUFDOzs7OztBQUkxQixNQUFNLE9BQU8sb0JBQW9CO0lBRTdCLFlBQ1ksU0FBMkIsRUFDM0IsR0FBc0IsRUFDRixhQUFvQyxFQUN4RCxXQUFpQztRQUhqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNGLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQUN4RCxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7SUFBRyxDQUFDO0lBSTFDLFdBQVcsQ0FBQyxHQUFxQjtRQUNwQyxPQUFPLGFBQWEsQ0FBQztZQUNqQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4QyxDQUFDLENBQUMsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsQ0FBQyxLQUFl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R0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVPLE9BQU8sQ0FBQyxHQUFXO1FBQ3ZCLE9BQU8sR0FBRyxHQUFHLEdBQUc7YUFDZixPQUFPLENBQUMsNkdBQTZHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEksQ0FBQzs7a0hBdkVRLG9CQUFvQixtRkFLakIsVUFBVTtzSEFMYixvQkFBb0I7NEZBQXBCLG9CQUFvQjtrQkFEaEMsVUFBVTs7MEJBTUYsTUFBTTsyQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgICBEYXRlRm9ybWF0LFxuICAgIEVuY3J5cHRpb25TZXJ2aWNlLFxuICAgIG9hdXRoSW5mbyxcbiAgICBPQVVUSF9JTkZPLFxuICAgIFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICBzaWduYXR1cmVIZWFkZXIsXG59IGZyb20gJ0Bkb25na2FwL2RvLWNvcmUnO1xuaW1wb3J0IHsgQXV0aEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2UvYXV0aC1pbmRleGVkZGIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2lnbmF0dXJlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZW5jOiBFbmNyeXB0aW9uU2VydmljZSxcbiAgICAgICAgQEluamVjdChPQVVUSF9JTkZPKSBwcml2YXRlIG9hdXRoUmVzb3VyY2U6IFNlY3VyaXR5UmVzb3VyY2VNb2RlbCxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU3RvcmFnZTogQXV0aEluZGV4ZWREQlNlcnZpY2UpIHt9XG5cbiAgICBwcml2YXRlIHRpbWVTdGFtcDogYW55O1xuXG4gICAgcHVibGljIHNpZ25IZWFkZXJzKHJlcTogSHR0cFJlcXVlc3Q8YW55Pik6IE9ic2VydmFibGU8SHR0cFJlcXVlc3Q8YW55Pj4ge1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICB0aGlzLmtleSgpLFxuICAgICAgICAgICAgdGhpcy5zaWduYXR1cmUodGhpcy5nZXRQYXRoKHJlcS51cmwpKSxcbiAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHZhbHVlOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNpZ25hdHVyZUhlYWRlci5zaWduYXR1cmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgaHR0cEhlYWRlcnM6IEh0dHBIZWFkZXJzID0gcmVxLmhlYWRlcnMgPyByZXEuaGVhZGVycyA6IG5ldyBIdHRwSGVhZGVycygpO1xuICAgICAgICAgICAgICAgIGh0dHBIZWFkZXJzLmtleXMoKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBzaWduYXR1cmVIZWFkZXIua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLmRlbGV0ZShzaWduYXR1cmVIZWFkZXIua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBzaWduYXR1cmVIZWFkZXIudGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLmRlbGV0ZShzaWduYXR1cmVIZWFkZXIudGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBzaWduYXR1cmVIZWFkZXIuc2lnbmF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLmRlbGV0ZShzaWduYXR1cmVIZWFkZXIuc2lnbmF0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGh0dHBIZWFkZXJzID0gaHR0cEhlYWRlcnMuc2V0KHNpZ25hdHVyZUhlYWRlci5rZXksIHZhbHVlWzBdKTtcbiAgICAgICAgICAgICAgICBodHRwSGVhZGVycyA9IGh0dHBIZWFkZXJzLnNldChzaWduYXR1cmVIZWFkZXIudGltZXN0YW1wLCB0aGlzLnRpbWVTdGFtcCk7XG4gICAgICAgICAgICAgICAgaHR0cEhlYWRlcnMgPSBodHRwSGVhZGVycy5zZXQoc2lnbmF0dXJlSGVhZGVyLnNpZ25hdHVyZSwgdmFsdWVbMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBvZihyZXEuY2xvbmUoeyBoZWFkZXJzOiBodHRwSGVhZGVycyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2YocmVxKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBrZXkoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFN0b3JhZ2UuZ2V0T2ZFbmMob2F1dGhJbmZvLnB1YmxpY19rZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0aW1lc3RhbXAoKTogc3RyaW5nIHtcbiAgICAgICAgdGhpcy50aW1lU3RhbXAgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZVN0YW1wO1xuICAgIH1cblxuICAgIHB1YmxpYyBkYXRlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVBpcGUodGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcpLnRyYW5zZm9ybShuZXcgRGF0ZSgpLCBEYXRlRm9ybWF0LkRBVEUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaWduYXR1cmUodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICB0aGlzLmtleSgpLFxuICAgICAgICAgICAgdGhpcy5hdXRoU3RvcmFnZS5nZXRPZkVuYyhvYXV0aEluZm8uYWNjZXNzX3Rva2VuKSxcbiAgICAgICAgXSkucGlwZShcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKHZhbHVlOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdmFsdWVbMF0gKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXN0YW1wKCkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kYXRlKCkgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlWzFdO1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRoaXMuZW5jLmdldEhtYWNTaGEyNTYodGhpcy5vYXV0aFJlc291cmNlWydwcml2YXRlX2tleSddLCBrZXkpKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UGF0aCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAnLycgKyB1cmxcbiAgICAgICAgLnJlcGxhY2UoL14oaHR0cDpcXC9cXC93d3dcXC58aHR0cHM6XFwvXFwvd3d3XFwufGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcLyk/W2EtejAtOV0rKFtcXC1cXC5dezF9W2EtejAtOV0rKSooOlswLTldezEsNX0pPyhcXC8pLio/L2csICcnKTtcbiAgICB9XG5cbn1cbiJdfQ==