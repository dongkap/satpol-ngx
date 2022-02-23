import { Inject, Injectable } from '@angular/core';
import { OAUTH_INFO } from '../../providers/shared/oauth.provider';
import * as i0 from "@angular/core";
import * as i1 from "../security/encryption.service";
export class StorageMaskService {
    constructor(enc, oauthResource) {
        this.enc = enc;
        this.oauthResource = oauthResource;
    }
    getSessionStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (sessionStorage.getItem(keyEncrypted)) {
            return this.enc.decryptAES(this.oauthResource['aes_key'], sessionStorage.getItem(keyEncrypted));
        }
        else {
            return null;
        }
    }
    setSessionStorageEnc(key, value) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        sessionStorage.setItem(keyEncrypted, valueEncrypted);
    }
    removeSessionStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        sessionStorage.removeItem(keyEncrypted);
    }
    getLocalStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        if (localStorage.getItem(keyEncrypted)) {
            return this.enc.decryptAES(this.oauthResource['aes_key'], localStorage.getItem(keyEncrypted));
        }
        else {
            return null;
        }
    }
    setLocalStorageEnc(key, value) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        const valueEncrypted = this.enc.encryptAES(this.oauthResource['aes_key'], value);
        localStorage.setItem(keyEncrypted, valueEncrypted);
    }
    removeLocalStorageEnc(key) {
        const keyEncrypted = this.enc.getHmacSha256(this.oauthResource['private_key'], key, true);
        localStorage.removeItem(keyEncrypted);
    }
    getSessionStorage(key) {
        return (key) ? sessionStorage.getItem(key) : null;
    }
    setSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
    }
    removeSessionStorage(key) {
        sessionStorage.removeItem(key);
    }
    getLocalStorage(key) {
        return (key) ? localStorage.getItem(key) : null;
    }
    setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
    removeLocalStorage(key) {
        localStorage.removeItem(key);
    }
    clearSessionStorage() {
        sessionStorage.clear();
    }
    clearLocalStorage() {
        localStorage.clear();
    }
    clearAll() {
        sessionStorage.clear();
        localStorage.clear();
    }
}
StorageMaskService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StorageMaskService, deps: [{ token: i1.EncryptionService }, { token: OAUTH_INFO }], target: i0.ɵɵFactoryTarget.Injectable });
StorageMaskService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StorageMaskService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StorageMaskService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.EncryptionService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [OAUTH_INFO]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1tYXNrLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9AZG9uZ2thcC9kby1jb3JlL3NyYy9saWIvc2VydmljZXMvc3RvcmFnZS9zdG9yYWdlLW1hc2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7OztBQU9uRSxNQUFNLE9BQU8sa0JBQWtCO0lBRTNCLFlBQ2MsR0FBc0IsRUFDSixhQUFvQztRQUR0RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUNKLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7SUFFakUsb0JBQW9CLENBQUMsR0FBVztRQUNuQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztTQUNuRzthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUNsRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRixNQUFNLGNBQWMsR0FB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Q0FBQztJQUVNLGlCQUFpQjtRQUNwQixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLFFBQVE7UUFDWCxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dIQWpGUSxrQkFBa0IsbURBSWYsVUFBVTtvSEFKYixrQkFBa0IsY0FGZixNQUFNOzRGQUVULGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7OzBCQUtRLE1BQU07MkJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VjdXJpdHlSZXNvdXJjZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IE9BVVRIX0lORk8gfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvc2hhcmVkL29hdXRoLnByb3ZpZGVyJztcbmltcG9ydCB7IEVuY3J5cHRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VjdXJpdHkvZW5jcnlwdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VGYWN0b3J5U2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS1mYWN0b3J5LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yYWdlTWFza1NlcnZpY2UgaW1wbGVtZW50cyBTdG9yYWdlRmFjdG9yeVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBlbmM6IEVuY3J5cHRpb25TZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KE9BVVRIX0lORk8pIHByaXZhdGUgb2F1dGhSZXNvdXJjZTogU2VjdXJpdHlSZXNvdXJjZU1vZGVsKSB7fVxuXG4gICAgcHVibGljIGdldFNlc3Npb25TdG9yYWdlRW5jKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleUVuY3J5cHRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYy5kZWNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleUVuY3J5cHRlZCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2Vzc2lvblN0b3JhZ2VFbmMoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHZhbHVlRW5jcnlwdGVkID0gdGhpcy5lbmMuZW5jcnlwdEFFUyh0aGlzLm9hdXRoUmVzb3VyY2VbJ2Flc19rZXknXSwgdmFsdWUpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleUVuY3J5cHRlZCwgdmFsdWVFbmNyeXB0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVTZXNzaW9uU3RvcmFnZUVuYyhrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXlFbmNyeXB0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2NhbFN0b3JhZ2VFbmMoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleUVuY3J5cHRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYy5kZWNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlFbmNyeXB0ZWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldExvY2FsU3RvcmFnZUVuYyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBrZXlFbmNyeXB0ZWQgPSB0aGlzLmVuYy5nZXRIbWFjU2hhMjU2KHRoaXMub2F1dGhSZXNvdXJjZVsncHJpdmF0ZV9rZXknXSwga2V5LCB0cnVlKTtcbiAgICAgICAgY29uc3QgdmFsdWVFbmNyeXB0ZWQgPSB0aGlzLmVuYy5lbmNyeXB0QUVTKHRoaXMub2F1dGhSZXNvdXJjZVsnYWVzX2tleSddLCB2YWx1ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleUVuY3J5cHRlZCwgdmFsdWVFbmNyeXB0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVMb2NhbFN0b3JhZ2VFbmMoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qga2V5RW5jcnlwdGVkID0gdGhpcy5lbmMuZ2V0SG1hY1NoYTI1Nih0aGlzLm9hdXRoUmVzb3VyY2VbJ3ByaXZhdGVfa2V5J10sIGtleSwgdHJ1ZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleUVuY3J5cHRlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNlc3Npb25TdG9yYWdlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChrZXkpID8gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0U2Vzc2lvblN0b3JhZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlU2Vzc2lvblN0b3JhZ2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKGtleSkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0TG9jYWxTdG9yYWdlKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVMb2NhbFN0b3JhZ2Uoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJTZXNzaW9uU3RvcmFnZSgpOiB2b2lkIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJMb2NhbFN0b3JhZ2UoKTogdm9pZCB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckFsbCgpOiB2b2lkIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuXG59XG4iXX0=